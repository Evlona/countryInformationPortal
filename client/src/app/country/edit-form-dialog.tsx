import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FC, ReactNode } from "react";

export interface EditFormDialogProps {
  triggerText: string;
  open: boolean;
  onOpenChange: (changed: boolean) => void;
  children?: ReactNode;
  description?: string;
  dialogTitle?: string;
}

const EditFormDialog: FC<EditFormDialogProps> = ({
  triggerText,
  open,
  onOpenChange,
  children,
  description,
  dialogTitle,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">{triggerText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {dialogTitle ?? <DialogTitle>{dialogTitle}</DialogTitle>}
          {description ?? <DialogDescription>{description} </DialogDescription>}
        </DialogHeader>
        <div className="grid gap-4 py-4">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export { EditFormDialog };
