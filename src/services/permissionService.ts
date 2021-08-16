import {Permission, PermissionType} from "../generated/client";

import supabase from "../lib/db";

export const inviteMemberToCommunity = async (type: PermissionType, communityId: string, memberId: string): Promise<Permission | null> => {
  try {
    const {data, error} = await supabase
    .from<Permission>('Permission')
    .insert([
      {
        type,
        communityId,
        userId: memberId,
        accepted: true,
      },
    ]).single();

    if (error) throw error;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};

export const sendJoinRequestToCommunity = async (
  type: PermissionType, communityId: string, memberId: string,
): Promise<Permission | null> => {
  try {
    const {data, error} = await supabase
    .from<Permission>('Permission')
    .insert([
      {
        type,
        communityId,
        userId: memberId,
      },
    ]).single();

    if (error) throw error;

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
): Promise<Permission | null> => {
  try {
    const {data, error} = await supabase
    .from<Permission>('permissions')
    .update({
      accepted: true,
    })
    .match({
      communityId,
      memberId,
    })
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
