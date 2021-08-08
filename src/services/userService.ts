import {User as PrismaUser} from '../generated/client';
import {User} from '@supabase/gotrue-js';
import supabase from "../lib/db";

export const upsertUser = async (user: User | null): Promise<PrismaUser | null> => {
  if (!user || !user.id) return null;

  const prismaUser: PrismaUser = {
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

  console.log('prismaUser', prismaUser);

  try {
    const {data, error} = await supabase
    .from<PrismaUser>('User')
    .insert([
      {...prismaUser},
    ]).single();

    if (error) throw error;

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
