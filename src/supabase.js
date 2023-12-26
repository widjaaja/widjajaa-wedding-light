import { createClient } from "@supabase/supabase-js";

const URL_SUPABASE = "https://iijnsbdnfzzenhowmisu.supabase.co"
const KEY_SUPABASE = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlpam5zYmRuZnp6ZW5ob3dtaXN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1MjMzOTYsImV4cCI6MjAxOTA5OTM5Nn0.hfCqzyq9tmmZKpqIiWa8EKxhlhmPTr892IXYioKCttk"
const supabase = createClient(URL_SUPABASE, KEY_SUPABASE);

export default supabase;