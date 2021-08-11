import imageCompression from 'browser-image-compression';
import supabase from "../lib/db";

export interface UploadMultipleImageOption { 
  maxSizeMB?: number,          // (default: Number.POSITIVE_INFINITY)
  maxWidthOrHeight?: number   // compressedFile will scale down by ratio to a point that width or height is smaller than maxWidthOrHeight (default: undefined)

  // following options are for advanced users
  maxIteration?: number      // optional, max number of iteration to compress the image (default: 10)
  exifOrientation?: number    // optional, see https://stackoverflow.com/a/32490603/10395024
  fileType?: string           // optional, fileType override
  initialQuality?: number      // optional, initial quality value between 0 and 1 (default: 1)

  path:string // must end with "/"
  bucket:string
}

const DEFAULT_OPTION:UploadMultipleImageOption = {
  bucket:'image',
  maxSizeMB:1,
  path:'',
};

export const uploadMultipleImage = 
  async (files:FileList , {path:_path, bucket, ...option}: UploadMultipleImageOption = DEFAULT_OPTION): Promise<string[]> =>
{
    // Iamge compress
    const compressedFiles = await Promise.all(Array.from(files).map((file) => imageCompression(file, option)));

    // Image Upload
    const uris = await Promise.all(compressedFiles.map((file) => (async () => {
        const filename = Date.now().toString(); // TODO
        const splitedFilename = file.name.split('.');
        const fileType = splitedFilename[splitedFilename.length - 1];
        const path = _path + filename + '.' + fileType;
  
        const {error}=await supabase.storage.from(bucket).upload(path, file, {upsert:false});
        
        if(error) throw error;

        const {publicURL} = supabase.storage.from(bucket).getPublicUrl(path);

        return publicURL;
      })(),
    ));

    
  return uris.filter((v) => !!v) as string[];
};