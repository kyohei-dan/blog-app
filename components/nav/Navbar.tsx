import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";


export default function Navbar() {
  return (
    <nav className="w-full justify-between items-center flex p-5 xl:p-0">
      <div className="group">
        <Link href={"/"} className="font-bold text-2xl">
          Blog
        </Link>
      </div>
      <Button variant={"outline"} className="flex items-center">
        <SiGithub/>
        Login
      </Button>
    </nav>
  )
}