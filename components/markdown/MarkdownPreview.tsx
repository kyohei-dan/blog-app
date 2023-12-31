import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-light.min.css";
import CopyButton from "./CopyButton";
import { icons } from "@/lib/icon";
import { PiTerminalThin } from "react-icons/pi";

export default function MarkdownPreview({
  content,
  className = "sm:p-10",
}: {
  content: string;
  className?: string;
}) {
  return (
    <Markdown
      className={cn("space-y-8 prose", className)}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
      components={{
        h1: ({ node, ...props }) => {
          return <h1 {...props} className="text-3xl font-bold" />;
        },
        h2: ({ node, ...props }) => {
          return (
            <h1
              {...props}
              className="text-2xl font-bold mt-10 mb-10"
            />
          );
        },
        h3: ({ node, ...props }) => {
          return (
            <h1
              {...props}
              className="text-xl font-bold mt-10 mb-10"
            />
          );
        },
        code: ({ node, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          const id = (Math.floor(Math.random() * 100) + 1).toString();
          if (match?.length) {
            let Icon = PiTerminalThin;
            const isMatch = icons.hasOwnProperty(match[1]);
            if (isMatch) {
              Icon = icons[match[1] as keyof typeof icons];
            }

            return (
              <div className="text-gray-300 border-[0.5px] rounded-md border-zinc-500">
                <div className="flex items-center justify-between px-5 py-2 border-b-[0.5px] border-zinc-500">
                  <div className="flex items-center gap-2">
                    <Icon />
                    <p className="text-sm text-gray-400">
                      {/* @ts-ignore  */}
                      {node?.data?.meta}
                    </p>
                  </div>
                  <CopyButton id={id} />
                </div>
                <div className="overflow-x-auto w-full">
                  <div className="p-5" id={id}>
                    {children}
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <code
                className="text-lg break-words px-1 rounded-sm"
                {...props}
              >
                {children}
              </code>
            );
          }
        },
      }}
    >
      {content}
    </Markdown>
  );
}