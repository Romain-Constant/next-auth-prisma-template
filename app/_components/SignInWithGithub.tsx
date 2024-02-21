"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

export default function () {
  return (
    <Button
      onClick={() =>
        signIn("github", {
          callbackUrl: `${window.location.origin}`,
        })
      }
      className="mt-4"
      variant="secondary"
    >
      Login with Gitgub <Github className="w-4 h-4 ml-4" />
    </Button>
  );
}
