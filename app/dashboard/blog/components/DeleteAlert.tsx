"use client";
import { ChangeEvent, useTransition } from "react";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";
import { deleteBlogById } from "@/lib/actions/blog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { TrashIcon } from "@radix-ui/react-icons";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function DeleteAlert({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      const { error } = JSON.parse(await deleteBlogById(id)) as PostgrestSingleResponse<null>;

      if (error) {
        toast({
          title: "Fail to update ",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{error?.message}</code>
            </pre>
          ),
        });
      } else {
        toast({
          title: "削除できました！ 🎉",
        });
      }
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="flex gap-2 items-center" variant="outline">
          <TrashIcon />
          削除
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            このブログを削除してもいいですか？
          </AlertDialogTitle>
          <AlertDialogDescription>
          この操作は元に戻すことができません。ブログが完全に削除され、サーバーからデータが削除されます。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>キャンセル</AlertDialogCancel>
          <form onSubmit={onSubmit}>
            <Button className="flex gap-2 items-center">
              <AiOutlineLoading3Quarters
                className={cn(" animate-spin ", {
                  hidden: !isPending,
                })}
              />{" "}
              削除する
            </Button>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}