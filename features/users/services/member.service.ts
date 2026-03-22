

import { supabase } from "@/lib/supabase";

export async function getMembers() {
  const { data, error } = await supabase
    .from("members")
    .select("*");

  if (error) throw error;

  return data;
}