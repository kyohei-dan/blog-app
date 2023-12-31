"use client";
import { ChangeEvent, useTransition } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useUser } from "@/lib/store/user";
import { loadStripe } from "@stripe/stripe-js";
import { checkout } from "@/lib/actions/stripe";
import LoginForm from "../nav/LoginForm";
import { LightningBoltIcon } from "@radix-ui/react-icons";

export default function Checkout() {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const user = useUser((state) => state.user);

  const handleCheckOut = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      const data = JSON.parse(await checkout(user?.email!, location.origin + pathname));
      const result = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
      await result?.redirectToCheckout({ sessionId: data.id });
    });
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-96 gap-2">
        この記事は会員登録（有料）で続きをお読みいただけます。まずはGithubアカウント<LoginForm /> してください。
      </div>
    );
  }

  return (
    <form
      onSubmit={handleCheckOut}
      className={cn(
        "flex items-center  w-full justify-center h-96",
        { hidden: !user?.id },
        { "animate-pulse": isPending }
      )}
    >
      <button
        className="ring-1 ring-green-500 p-10 rounded-md text-center"
        type="submit"
      >
        <h1 className="uppercase font-bold text-2xl text-green-500 flex items-center gap-2">
          <LightningBoltIcon
            className={cn(
              "animate-bounce w-5 h-5",
              !isPending ? "animate-bounce" : "animate-spin"
            )}
          />
          会員登録（有料）で続きをお読みいただけます
        </h1>
        <p className="text-sm text-gray-500">
        全ての記事が閲覧できます
        </p>
      </button>
    </form>
  );
}