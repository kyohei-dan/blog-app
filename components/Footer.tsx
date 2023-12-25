"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="sticky top-100vh flex justify-center items-center gap-10 py-16">
      <Link
        href="https://next-notion-blog-flax.vercel.app"
        target="_blank"
        className="flex items-center text-sm font-medium hover:text-slate-400 ease-in-out transition-all"
      >
        <span className="pr-2">Developed by</span>
        <Image src="https://avatars.githubusercontent.com/u/81695391?s=48&v=4" width={20} height={20} alt="" />
        <span className="pl-1 font-medium">Kyohei Dan</span>
      </Link>
    </footer>
  );
}