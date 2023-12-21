export function BlogContentLoading() {
  return (
    <div role="status" className="animate-pulse space-y-5 p-10">
      <div className=" h-10 text-3xl font-bold bg-gray-300 w-full rounded-md"></div>
      <div className=" h-5 text-3xl font-bold bg-gray-300 w-full rounded-md"></div>
      <div className=" h-5 text-3xl font-bold bg-gray-300 w-full rounded-md"></div>
      <div className=" h-10 text-3xl font-bold bg-gray-300 w-full rounded-md"></div>
      <div className=" h-5 text-3xl font-bold bg-gray-300 w-full rounded-md"></div>
      <span className="sr-only">読み込み中</span>
    </div>
  );
}