import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 text-center">
      <div className="p-4 rounded-3xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 mb-6">
        <Compass className="w-12 h-12 animate-pulse" />
      </div>

      <span className="text-sm font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
        404 - Page Not Found
      </span>

      <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
        Lost in cyberspace?
      </h1>

      <p className="mt-4 max-w-md text-base text-zinc-600 dark:text-zinc-400">
        The page or case study you are looking for doesn&apos;t exist or has been relocated.
      </p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <Button href="/" variant="primary" size="md">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Home</span>
        </Button>
      </div>
    </div>
  );
}
