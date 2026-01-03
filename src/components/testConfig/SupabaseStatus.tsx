import React, { useEffect, useState } from "react";
import { testSupabaseConnection } from "../../utils/testSupabaseConnection";

export const SupabaseStatus: React.FC = () => {
  const [status, setStatus] = useState<string>("checking...");

  useEffect(() => {
    testSupabaseConnection().then((res) =>
      setStatus(res.ok ? `OK (${res.message})` : `ERROR: ${res.message}`)
    );
  }, []);

  return <div>Supabase: {status}</div>;
};
