import {definitions} from "../types/supabase";
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

    if (error) throw error;

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

    if (error) throw error;

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

    if (error) throw error;

    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};

export const feeds = async (communityId: string): Promise<definitions["Feed"][] | null> => {
  try {
    const {data, error} = await supabase
    .from<definitions["Feed"]>('Feed')
    .select()
    .match({communityId});

    if (error) throw error;

    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};

export const getFeed = async (id: string): Promise<definitions["Feed"] | null> => {
  try {
    const {data, error} = await supabase
    .from<definitions["Feed"]>('Feed')
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
      )
    `)
    .match({id})
    .single();

    if (error) throw error;

    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};