"use client";
import { usePathname } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function LoginForm() {
  const pathname = usePathname();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback?next=${pathname}`,
      },
    });
  };

  return (
    <Button onClick={handleLogin} className="flex items-center gap-2" variant="outline">
      <GitHubLogoIcon />
      Login
    </Button>
  );
}