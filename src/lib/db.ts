import {createClient} from '@supabase/supabase-js';

/**
 * Doubt about using @ts-ignore?
 * See https://github.com/wecount-dev/wecount/pull/5.
 */

const supabase = createClient(
  // @ts-ignore
  SUPABASE_URL || '',
  // @ts-ignore
  SUPABASE_PUBLIC_KEY || '',
);

export default supabase;
