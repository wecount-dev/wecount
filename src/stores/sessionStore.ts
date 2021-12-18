import type {User} from '@supabase/supabase-js';
import {writable} from 'svelte/store';

type UserExtended = {
  avatarUrl?: string;
  name?: string;
  displayName?: string;
}

export const user = writable<(Partial<User> & UserExtended) | null>(null);
