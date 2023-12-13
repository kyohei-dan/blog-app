"use client";
import { ChangeEvent } from "react";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";

export default function SwitchForm({
  checked,
  onSubmit,
  name,
}: {
  checked: boolean;
  onSubmit: () => Promise<string>;
  name: string;
}) {
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = JSON.parse(await onSubmit());
    if (!error) {
      toast({
        title: `${name} の設定が更新できました！ 🎉`,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Switch type="submit" checked={checked} className="bg-green-500" />
    </form>
  );
}