import { Spinner } from "@/components";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[10000] bg-white flex items-center justify-center h-screen">
      <Spinner />
    </div>
  );
}
