import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://wqsteqrdgqcktaxrpqml.supabase.co";

const supabaseAnonKey =
  "sb_publishable_juYZ4da-D-zO_wFVyw8zXQ_yAxfJhMk";

export const supabase =
  createClient(
    supabaseUrl,
    supabaseAnonKey
  );