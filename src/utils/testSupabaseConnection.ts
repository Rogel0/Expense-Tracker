import { supabase } from "../config/connection";

export async function testSupabaseConnection() {
  try {
    const { data, error, status } = await supabase
      .from("transactions")
      .select("id")
      .limit(1);
    if (error) return { ok: false, message: error.message, status };
    return {
      ok: true,
      message: "Connected to Supabase successfully",
      rows: data?.length ?? 0,
    };
  } catch (error: unknown) {
    return {
      ok: false,
      message: error instanceof Error ? error.message : String(error),
    };
  }
}
