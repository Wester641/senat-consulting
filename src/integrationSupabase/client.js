import { createClient } from "@supabase/supabase-js";


const SUPABASE_URL = "https://krfmvuizaagwacdsmiyc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyZm12dWl6YWFnd2FjZHNtaXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxMjE3MzQsImV4cCI6MjA3NTY5NzczNH0.saR9p5ywT7Aatle1Rg8fjvOA_E_zDO-gzxBkkGT1stk";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
        storage: localStorage,
        persistSession: true,
        autoRefreshToken: true,
    }
});
