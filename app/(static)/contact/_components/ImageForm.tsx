import Image from "next/image";
import img from "@/public/images/contactUs.png";
const ImageForm = () => {
  return (
    <div className="flex-1 w-full">
      <div className="w-full relative min-h-[400px] aspect-auto overflow-hidden">
        <Image
          src={img}
          fill
          className="object-center object-contain scale-150"
          alt="about us image"
        />
      </div>
    </div>
  );
};

export default ImageForm;
