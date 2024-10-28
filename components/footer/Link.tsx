"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = ({
  item,
}: {
  item: {
    href: string;
    name: string;
  };
}) => {
  const pathName = usePathname();

  const active = pathName == item.href;
  return (
    <Link
      href={item.href}
      className={cn(
        "text-base text-muted-foreground hover:text-secondary transition-all duration-300",
        active && "text-lg text-primary"
      )}
    >
      {item.name}
    </Link>
  );
};

export default Links;
