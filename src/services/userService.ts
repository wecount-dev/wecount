import {User} from '@supabase/gotrue-js';
import {definitions} from '../types/supabase';
import supabase from "../lib/db";

export const upsertUser = async (
  user: User | null,
): Promise<definitions["User"] | null> => {
  if (!user || !user.id) return null;

  const prismaUser: definitions["User"] = {
    aud: user.aud,
    confirmation_sent_at: user.confirmation_sent_at,
    confirmed_at: user.confirmed_at,
    created_at: user.created_at,
    email: user.email,
    email_confirmed_at: user.email_confirmed_at,
    id: user.id,
    last_sign_in_at: user.last_sign_in_at,
    phone: user.phone,
    phone_confirmed_at: user.phone_confirmed_at,
    recovery_sent_at: user.recovery_sent_at,
    role: user.role,
    updated_at: user.updated_at,
  };

  try {
    const {data, error} = await supabase
    .from<definitions["User"]>('User')
    .upsert([
      {...prismaUser},
    ]).single();

    if (error) throw error;

    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};

export const updateUserAvatar = async (
  avatarURL: string,
  userId: string,
): Promise<definitions["User"] | null> => {
  try {
    const {data, error} = await supabase
    .from<definitions["User"]>('User')
    .update({
      avatar_url: avatarURL,
    })
    .match({id: userId})
    .single();

    if (error) throw error;

    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return null;
  }
};
