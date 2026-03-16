import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/supabase/types";

export const createBrowserSupabase = () => createClientComponentClient<Database>();
