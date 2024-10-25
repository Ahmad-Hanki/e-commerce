"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Logo from "../Logo";
import { cn } from "@/lib/utils";
import Cart from "../cart/Cart";
import { User } from "lucide-react";


const PcNavbar = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      title: "",
      url: "",
      active: pathname === "/",
    },
  ];

  const contact = {
    title: "Get in touch",
    url: "/menu",
    active: pathname === "/menu",
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-1">
        <Logo w="w-20" />

        <nav className="flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className={cn(
                "text-xl text-secondary-foreground/70  transition-all duration-200 hover:text-primary/70",
                link.active && "text-primary",
                 
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 mx-9">
            <Cart />
            <Link href={"/dashboard"}>
              <User
                className={cn(
                  "transition-all duration-200  hover:text-primary/70 w-9 h-9 lg:w-8 lg:h-8",
                )}
              />
            </Link>
          </div>
          <Link href={contact.url}>
            <Button variant={"default"} className="px-3 rounded-md text-xl">
              {contact.title}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PcNavbar;
