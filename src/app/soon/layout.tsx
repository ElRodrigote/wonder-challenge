import { PropsWithChildren } from "react";

export default function SoonLayout({
  children,
}: PropsWithChildren<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center p-24">
      {children}
    </div>
  );
}
