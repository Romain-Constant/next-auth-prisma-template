"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState<string | null>(null);

  async function SignInWithEmail() {
    const signInResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });

    if (signInResult?.ok) {
      return toast({
        title: "Well this did not worked...",
        description: "Something went wrong, please tyy again",
        variant: "destructive",
      });
    }

    return toast({
      title: "Check your email",
      description: "A magic link has been sent to you",
    });
  }

  return (
    <form action={SignInWithEmail}>
      <div className="flex flex-col gap-y-2">
        <Label>Email</Label>
        <Input
          name="email"
          type="email"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" className="mt-4 w-full">
          Login with email
        </Button>
      </div>
    </form>
  );
}
