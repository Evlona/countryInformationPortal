import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
  label?: string;
  className?: string;
}

export const Text: FC<TextProps> = ({ children, className, label }) => {
  return (
    <div className={cn("mt-2 flex gap-6 ", className)}>
      {label ?? <p className="text-gray-500 font-semibold">{label}</p>}
      <p className="text-gray-700">{children}</p>
    </div>
  );
};
