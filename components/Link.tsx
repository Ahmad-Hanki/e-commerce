"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = ({
  item,
  className,
}: {
  item: {
    href: string;
    name: string;
  };
  className?: string;
}) => {
  const pathName = usePathname();

  const active = pathName == item.href;
  return (
    <Link
      href={item.href}
      className={cn(
        "text-base text-muted-foreground hover:text-secondary transition-all duration-300",
        active && "text-lg text-primary",
        className
      )}
    >
      {item.name}
    </Link>
  );
};

export default Links;
