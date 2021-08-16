import {Feed} from "../generated/client";
import supabase from "../lib/db";

export const createFeed = async (userId: string, communityId: string, feed: Omit<Feed, 'id'>): Promise<Feed | null> => {
  if (!userId || !communityId || !feed) {
    // eslint-disable-next-line no-console
    console.error('All arguments are not specified');

    return null;
  }

  try {
    const {data, error} = await supabase
    .from<Feed>('Feed')
    .insert([
      {...feed},
    ])
    .match({
      communityId,
      userId,
    }).single();

    if (error) throw error;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};

export const updateFeed = async (feed: Feed): Promise<Feed | null> => {
  try {
    const {data, error} = await supabase
    .from<Feed>('Community')
    .update({...feed})
    .match({id: feed.id})
    .single();

    if (error) throw error;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};

export const deleteFeed = async (id: string): Promise<Feed | null> => {
  try {
    const {data, error} = await supabase
    .from<Feed>('Feed')
    .delete()
    .match({id})
    .single();

    if (error) throw error;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};

export const feeds = async (communityId: string): Promise<Feed[] | null> => {
  try {
    const {data, error} = await supabase
    .from<Feed>('Feed')
    .select()
    .match({communityId});

    if (error) throw error;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};

export const getFeed = async (id: string): Promise<Feed | null> => {
  try {
    const {data, error} = await supabase
    .from<Feed>('Feed')
    .select(`
      isPublic
      title
      date
      price
      localizedPrice
      latitude
      longitude
      user (
        id
        email
        phone
        role
        
      )
    `)
    .match({id})
    .single();

    if (error) throw error;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};