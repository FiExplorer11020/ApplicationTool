"use client";

import { useState } from "react";
import { createBrowserSupabase } from "@/lib/supabase/client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const supabase = createBrowserSupabase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md space-y-4">
        <h1 className="text-xl font-semibold">Connexion</h1>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
        <Button
          onClick={async () => {
            await supabase.auth.signInWithPassword({ email, password });
            window.location.href = "/dashboard";
          }}
          className="w-full"
        >
          Se connecter
        </Button>
      </Card>
    </div>
  );
}
