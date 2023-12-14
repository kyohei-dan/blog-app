import Link from "next/link";
import BlogTable from "./blog/components/BlogTable";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

const sleep = async (ms: number) => {
  return new Promise((res) => setTimeout(res, ms));
};

export default async function Dashboard() {

  await sleep(3000);
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blogs</h1>
        <Link href="/dashboard/blog/create">
          <Button className="flex items-center gap-2 " variant="outline">
            Create <PlusIcon />
          </Button>
        </Link>
      </div>

      <BlogTable />
    </div>
  );
}