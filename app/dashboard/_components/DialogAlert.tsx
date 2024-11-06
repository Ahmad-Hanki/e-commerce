"use client";
import SubmitButton from "@/components/SubmitButton";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { Dispatch, SetStateAction } from "react";

interface DialogAlertProps {
  onSubmit: () => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
}

const DialogAlert = ({ onSubmit, open, setOpen, title }: DialogAlertProps) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl font-bold">
            Silmeyi Onayla{" "}
          </AlertDialogTitle>
          <AlertDialogDescription className="space-y-1">
            <span>
            Bu verileri kalıcı olarak silmek istediğinizden emin misiniz? Bu eylem
            geri alınamaz.
            </span>
            <span className="font-bold text-primary"> {title}</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <form
            action={onSubmit}
            className="flex justify-between gap-2 items-center "
          >
            <SubmitButton
              submitting={"Siliniyor..."}
              submit={"Sil"}
              variant="destructive"
              className="flex-1 py-5"
            />

            <Button
              type="button"
              variant="outline"
              className="flex-1 py-5"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              İptal
            </Button>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogAlert;
