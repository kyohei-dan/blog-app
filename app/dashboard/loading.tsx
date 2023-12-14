export default function loading() {
  return (
    <div role="status" className="animate-pulse space-y-5">
      <div className="flex justify-between items-center">
        <div className="h-10 w-56 bg-gray-300 rounded-md"></div>
        <div className="h-10 w-48 bg-gray-300 rounded-md"></div>
      </div>
      <div className="border h-96 rounded-md bg-gray-300"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}