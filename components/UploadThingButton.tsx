"use client";

import { UploadButton } from "@/utils/uploadthing";
import { Dispatch } from "react";

interface UploadThingButtonProps {
  setImage: Dispatch<React.SetStateAction<{ url: string; primary: boolean }[]>>; // Set the state type to hold an array of image objects
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
          // Assuming res contains an array of uploaded image objects with URLs
          const newImages = res.map(
            (image: { url: string }, index: number) => ({
              url: image.url,
              primary: index === 0,
            })
          );

          // Append the new images to the existing images state
          setImage((prevImages) => [...prevImages, ...newImages]); // Append new images to the existing images
        }}
      />
    </div>
  );
}
