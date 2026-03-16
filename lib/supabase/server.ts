import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/lib/supabase/types";

export const createServerSupabase = () => createServerComponentClient<Database>({ cookies });
