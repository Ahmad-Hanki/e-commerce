import { cn } from "@/lib/utils";
import logo from "@/app/favicon.ico";
import Image from "next/image";

const Logo = ({ w }: { w?: string }) => {
  return (
    <div className={cn("w-12 aspect-square relative overflow-hidden", w)}>
      <Image
        src={logo}
        alt="logo"
        fill
        className="object-cover object-center"
      />
    </div>
  );
};

export default Logo;
