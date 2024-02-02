import { createClient } from "@supabase/supabase-js";
import { SUPABASE_ANON_KEY, SUPABASE_PROJECT_URL } from "./utils/config";

const supabase = createClient(`${SUPABASE_PROJECT_URL}`, `${SUPABASE_ANON_KEY}`);

export default supabase