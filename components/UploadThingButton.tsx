"use client";

import { UploadButton } from "@/utils/uploadthing";
import { Dispatch } from "react";

interface UploadThingButtonProps {
  setImage: Dispatch<React.SetStateAction<string>>;
}

export default function UploadThingButton({
  setImage,
}: UploadThingButtonProps) {
  return (
    <div className="w-full flex justify-start">
      <UploadButton
        endpoint="imageUploader"
        className="w-fit"
        onClientUploadComplete={(res) => {
          setImage(res[0].url);
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}
