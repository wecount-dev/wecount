import {definitions} from "../types/supabase";
import supabase from "../lib/db";

export const createCommunity = async (
  userId: string,
  community: Omit<definitions["Community"], 'id' | 'createdAt'>,
): Promise<definitions["Community"] | null> => {
  if (!userId || !community) {
    // eslint-disable-next-line no-console
    console.error('no userId or community');

    return null;
  }

  try {
    const {data, error} = await supabase
      .from<definitions["Community"]>('Community')
      .insert([
        {...community},
      ]).single();

    if (error) throw error;

    if (data)
      await supabase.from<definitions["Permission"]>('Permission').insert([
        {
          communityId: data.id,
          type: 'owner',
          userId,
        },
      ]);

    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};

export const updateCommunity = async (
  community: Omit<definitions["Community"], 'createdAt'>,
): Promise<definitions["Community"] | null> => {
  try {
    const {data, error} = await supabase
      .from<definitions["Community"]>('Community')
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

export const deleteCommunity = async (id: string): Promise<definitions["Community"] | null> => {
  try {
    const {data, error} = await supabase
      .from<definitions["Community"]>('Community')
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

export const getMyCommunites = async (userId: string): Promise<definitions["Community"][] | null> => {
  try {
    const {data, error} = await supabase
      .from<definitions["Permission"]>('Permission')
      .select(`
        Community (
          isPublic,
          name,
          description,
          currency,
          color
        )
      `)
      .match({
        userId,
      });

    if (error) throw error;

    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data?.map((el) => el.Community);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};

export const getCommunity = async (id: string): Promise<definitions["Community"] | null> => {
  try {
    const {data, error} = await supabase
      .from<definitions["Community"]>('Community')
      .select()
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
