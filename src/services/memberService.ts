import {Community} from "../generated/client";
import supabase from "../lib/db";

export const createCommunity = async (community: Omit<Community, 'id'>): Promise<Community | null> => {
  try {
    const {data, error} = await supabase
    .from<Community>('Community')
    .insert([
      {...community},
    ]).single();

    if (error) throw error;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
