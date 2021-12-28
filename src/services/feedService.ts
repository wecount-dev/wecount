import type {definitions} from "../types/supabase";
import supabase from "../lib/db";

export const createFeed = async (
  userId: string,
  communityId: string,
  feed: definitions["Feed"],
  ): Promise<definitions["Feed"] | null> => {
  if (!userId || !communityId || !feed) {
    // eslint-disable-next-line no-console
    console.error('All arguments are not specified');

    return null;
  }

  try {
    const {data, error} = await supabase
      .from<definitions["Feed"]>('Feed')
      .insert([
        {...feed},
      ])
      .match({
        communityId,
        userId,
      }).single();

    if (error) {throw error;}

    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};

export const updateFeed = async (
  feed: definitions["Feed"],
): Promise<definitions["Feed"] | null> => {
  try {
    const {data, error} = await supabase
      .from<definitions["Feed"]>('Feed')
      .update({...feed})
      .match({id: feed.id})
      .single();

    if (error) {throw error;}

    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};

export const deleteFeed = async (id: string): Promise<definitions["Feed"] | null> => {
  try {
    const {data, error} = await supabase
      .from<definitions["Feed"]>('Feed')
      .delete()
      .match({id})
      .single();

    if (error) {throw error;}

    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};

export type FeedWithImages = definitions['Feed'] & {
  images: Pick<definitions['Image'], 'id' | 'url'>[];
};

export type FeedWithUserAndImages = Omit<definitions['Feed'], 'userId' | 'communityId'> & {
  user: Pick<definitions['User'], 'id' | 'displayName' | 'name' | 'avatarUrl' | 'avatarUrlThumb'>;
  images: Pick<definitions['Image'], 'id' | 'url'>[];
};

export const feeds = async (communityId: string): Promise<
  FeedWithUserAndImages[] | null
> => {
  try {
    const {data, error} = await supabase
    .from<FeedWithUserAndImages>('Feed')
    .select(`
      *,
      User:user (
        id
        email
        phone
      )
      Image:images (
        id
        url
      )`,
    )
    .match({communityId});

    if (error) {throw error;}

    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};


export const getFeed = async (id: string): Promise<
  FeedWithUserAndImages | null
> => {
  try {
    const {data, error} = await supabase
    .from<FeedWithUserAndImages>('Feed')
    .select(`
      isPublic
      title
      date
      price
      localizedPrice
      latitude
      longitude
      User:user (
        id
        email
        phone
      )
      Image:images (
        id
        url
      )
    `)
    .match({id})
    .single();

    if (error) {throw error;}

    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};