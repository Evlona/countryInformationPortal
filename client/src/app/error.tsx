"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // to display logs
  //   useEffect(() => {
  //     console.error(error);
  //   }, [error]);

  return (
    <main className="flex flex-col h-screen w-screen items-center justify-center">
      <h2 className="text-center">{"Something went wrong!" + error} </h2>
      <Button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={() => reset()}
      >
        Try again
      </Button>
    </main>
  );
}
