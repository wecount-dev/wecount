import {User as PrismaUser} from '../generated/client';
import {User} from '@supabase/gotrue-js';
import supabase from "../lib/db";

export const upsertUser = async (user: User | null): Promise<PrismaUser | null> => {
  if (!user || !user.id) return null;

  const prismaUser: Partial<PrismaUser> = {
    aud: user.aud,
    confirmation_sent_at: new Date(user.confirmation_sent_at as string),
    confirmed_at: new Date(user.confirmed_at as string),
    created_at: new Date(user.created_at),
    email: user.email as string,
    email_confirmed_at: new Date(user.email_confirmed_at as string),
    id: user.id,
    last_sign_in_at: new Date(user.last_sign_in_at as string),
    phone: user.phone as string,
    phone_confirmed_at: new Date(user.phone_confirmed_at as string),
    recovery_sent_at: new Date(user.recovery_sent_at as string),
    role: user.role as string,
    updated_at: new Date(user.updated_at as string),
  };

  try {
    const {data, error} = await supabase
    .from<PrismaUser>('User')
    .insert([
      {...prismaUser},
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

export const updateUserAvatar = async (avatarURL: string, userId: string): Promise<PrismaUser | null> => {
  try {
    const {data, error} = await supabase
    .from<PrismaUser>('User')
    .update({
      avatar_url: avatarURL,
    })
    .match({id: userId})
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
