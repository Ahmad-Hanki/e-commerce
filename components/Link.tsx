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

  const active =
    pathName === item.href ||
    (item.href !== "/" &&
      item.href !== "/dashboard" &&
      pathName.includes(item.href));

  return (
    <Link
      href={
        item.href == "/dashboard/order"
          ? "/dashboard/order/newOrder"
          : item.href
      }
      className={cn(
        "text-base hover:text-primary/70 transition-all duration-300 hover:underline",
        active && "text-lg text-primary ",
        className
      )}
    >
      {item.name}
    </Link>
  );
};

export default Links;
