import * as React from "react";
import { cn } from "@/lib/utils";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn("h-10 w-full rounded-md border border-slate-300 px-3 text-sm outline-none ring-brand-500 focus:ring-2", props.className)} />;
}
