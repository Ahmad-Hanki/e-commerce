import { cn } from "@/lib/utils";
import logo from "@/app/favicon.ico";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ w }: { w?: string }) => {
  return (
    <div className={cn("w-12 aspect-square relative overflow-hidden", w)}>
      <Link href={"/"}>
        <Image
          src={logo}
          alt="logo"
          fill
          className="object-cover object-center"
        />
      </Link>
    </div>
  );
};

export default Logo;
