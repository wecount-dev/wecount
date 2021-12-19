import type {definitions} from "../types/supabase";
import supabase from "../lib/db";

export type PermissionType = 'owner' | 'admin' | 'member';

export const inviteMemberToCommunity = async (
  type: PermissionType, communityId: string, memberId: string,
): Promise<definitions["Permission"] | null> => {
  try {
    const {data, error} = await supabase
    .from<definitions["Permission"]>('Permission')
    .insert([
      {
        type,
        communityId,
        userId: memberId,
        accepted: true,
      },
    ]).single();

    if (error) {throw error;}

    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};

export const sendJoinRequestToCommunity = async (
  type: PermissionType, communityId: string, memberId: string,
): Promise<definitions["Permission"] | null> => {
  try {
    const {data, error} = await supabase
    .from<definitions["Permission"]>('Permission')
    .insert([
      {
        type,
        communityId,
        userId: memberId,
      },
    ]).single();

    if (error) {throw error;}

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};

export const acceptJoinRequestWithinCommunity = async (
  type: PermissionType, communityId: string, memberId: string,
): Promise<definitions["Permission"] | null> => {
  try {
    const {data, error} = await supabase
    .from<definitions["Permission"]>('permissions')
    .update({
      accepted: true,
    })
    .match({
      communityId,
      memberId,
    })
    .single();

    if (error) {throw error;}

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};
