import {User} from '@supabase/supabase-js';
import {writable} from 'svelte/store';

export const user = writable<User | null>(null);
