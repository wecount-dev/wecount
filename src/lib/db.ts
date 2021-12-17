import {createClient} from '@supabase/supabase-js';

/**
 * Doubt about using @ts-ignore?
 * See https://github.com/wecount-dev/wecount/pull/5.
 */

// @ts-ignore
const supabase = createClient(
  // @ts-ignore
  import.meta.env.VITE_SUPABASE_URL || '',
  // @ts-ignore
  import.meta.env.VITE_SUPABASE_PUBLIC_KEY || '',
);

export default supabase;
