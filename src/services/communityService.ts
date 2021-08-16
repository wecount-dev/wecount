import {Community, Permission, PermissionType} from "../generated/client";

import supabase from "../lib/db";

export const createCommunity = async (
  userId: string,
  community: Omit<Community, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
): Promise<Community | null> => {
  if (!userId || !community) {
    // eslint-disable-next-line no-console
    console.error('no userId or community');

    return null;
  }

  try {
    const {data, error} = await supabase
    .from<Community>('Community')
    .insert([
      {...community},
    ]).single();

    if (error) throw error;

    await supabase.from<Permission>('Permission').insert([
      {
        communityId: data?.id,
        type: PermissionType.owner,
        userId,
      },
    ]);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};

export const updateCommunity = async (community: Community): Promise<Community | null> => {
  try {
    const {data, error} = await supabase
    .from<Community>('Community')
    .update({...community})
    .match({id: community.id})
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

export const deleteCommunity = async (id: string): Promise<Community | null> => {
  try {
    const {data, error} = await supabase
    .from<Community>('Community')
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

export const getMyCommunites = async (userId: string): Promise<Community[] | null> => {
  try {
    const {data, error} = await supabase
    .from<Community>('Community')
    .select(`
      isPublic
      name
      description
      currency
      color
      Permission (
        type
        accepted
        userId
      )
    `)
    .match({
      Permission: {
        accepted: true,
        userId,
      },
    });

    if (error) throw error;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};

export const getCommunity = async (id: string): Promise<Community | null> => {
  try {
    const {data, error} = await supabase
    .from<Community>('Community')
    .select()
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
