"use client";
import { useRouter } from "next/navigation";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { BlogFormSchemaType } from "../schema";
import { createBlog } from "../../../../lib/actions/blog";
import { defaultCreateBlog } from "@/lib/data";
import BlogForm from "../components/BlogForm";
import { toast } from "@/components/ui/use-toast";

export default function CreateForm() {
  const router = useRouter();

  const onHandleSubmit = async (data: BlogFormSchemaType) => {
    const result = JSON.parse(await createBlog(data));

    const { error } = result as PostgrestSingleResponse<null>;
    if (error?.message) {
      toast({
        title: "記事が作成できませんでした 😢",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{error.message}</code>
          </pre>
        ),
      });
    } else {
      toast({
        title: "記事が作成できました！ 🎉",
        description: data.title,
      });
      router.push("/dashboard");
    }
  };

  return (
    <BlogForm onHandleSubmit={onHandleSubmit} defaultBlog={defaultCreateBlog} />
  );
}