"use client";
import Link from "next/link";
import { useUser } from "@/lib/store/user";
import Profile from "./Profile";
import LoginForm from "./LoginForm";

export default function Navbar() {
  const user = useUser((state) => state.user);

  return (
    <header>
      <nav className="max-w-7xl justify-between items-center flex p-5 mx-auto">
        <Link href={"/"} className="font-bold text-2xl">
          Blog SaaS App
        </Link>
        {user ? <Profile /> : <LoginForm />}
      </nav>
    </header>
  );
}