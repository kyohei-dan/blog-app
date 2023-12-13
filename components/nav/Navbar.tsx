"use client";
import Link from "next/link";
import { useUser } from "@/lib/store/user";
import Profile from "./Profile";
import LoginForm from "./LoginForm";
import HoverUnderLine from "./HoverUnderLine";

export default function Navbar() {
  const user = useUser((state) => state.user);

  return (
    <nav className="w-full justify-between items-center flex p-5 xl:p-0">
      <HoverUnderLine>
        <Link href={"/"} className="font-bold text-2xl">
          Blog-SaaS-App
        </Link>
      </HoverUnderLine>
      {user ? <Profile /> : <LoginForm />}
    </nav>
  );
}