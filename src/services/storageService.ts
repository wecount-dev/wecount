import imageCompression from 'browser-image-compression';
import {nanoid} from 'nanoid';
import supabase from "../lib/db";

type UploadDir = 'communities' | 'profiles' | 'replies' | 'feeds' | 'images';
type UploadBucket = 'public';

export type UploadSingleImageType = {
  file?: File;
  fileName?: string;
  dir?: UploadDir;
  bucket?: UploadBucket;
}

export const uploadSingleImage = 
  async ({
    file, 
    fileName = Date.now().toString() + '@' + nanoid(4),
    dir = 'images',
    bucket = 'public',
  }: UploadSingleImageType): Promise<string | null> => {
    if (!file) {return null;}

    const compressed = await imageCompression(file, {});

    // Image Upload to supabase
    const splittedFilename = compressed.name.split('.');
    const fileType = splittedFilename[splittedFilename.length - 1];
    const path = `${dir}/${fileName}.${fileType}`;

    const {error} = await supabase.storage.from(bucket).upload(path, compressed, {upsert:false});
    
    if(error) {throw error;}

    const {publicURL} = supabase.storage.from(bucket).getPublicUrl(path);

    return publicURL;
};

export interface UploadMultipleImageOption { 
  maxSizeMB?: number          // (default: Number.POSITIVE_INFINITY)
  maxWidthOrHeight?: number   // compressedFile will scale down by ratio to a point that width or height is smaller than maxWidthOrHeight (default: undefined)

  // following options are for advanced users
  maxIteration?: number      // optional, max number of iteration to compress the image (default: 10)
  exifOrientation?: number    // optional, see https://stackoverflow.com/a/32490603/10395024
  fileType?: string           // optional, fileType override
  initialQuality?: number      // optional, initial quality value between 0 and 1 (default: 1)

  dirs: UploadDir
  bucket: UploadBucket
}

export const uploadMultipleImages = 
  async (
    files:File[] | FileList ,
    {dirs, bucket, ...option}: UploadMultipleImageOption,
  ): Promise<string[]> => {
    // Image compress
    const compressedFiles = await Promise.all(Array.from(files).map((file) => imageCompression(file, option)));

    // Image Upload to supabase
    const uris = await Promise.all(compressedFiles.map((file) => (async () => {
        const filename = Date.now().toString() + '@' + nanoid(4);
        const splittedFilename = file.name.split('.');
        const fileType = splittedFilename[splittedFilename.length - 1];
        const path = dirs + '/' + filename + '.' + fileType;
  
        const {error} = await supabase.storage.from(bucket).upload(path, file, {upsert:false});
        
        if(error) {throw error;}

        const {publicURL} = supabase.storage.from(bucket).getPublicUrl(path);

        return publicURL;
      })(),
    ));

    
  return uris.filter((v) => !!v) as string[];
};
