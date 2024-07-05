import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
  label?: string;
  className?: string;
}

export const Text: FC<TextProps> = ({ children, className, label }) => {
  return (
    <div className={cn("mt-2 w-96 flex ", className)}>
      <p className="text-gray-500 min-w-36 bg-white  font-semibold">{label}</p>
      <p className="text-gray-700 min-w-36  ">{children}</p>
    </div>
  );
};
