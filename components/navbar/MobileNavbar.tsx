"use client";

import { usePathname } from "next/navigation";
import { Divide as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Cart from "../cart/Cart";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";


const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navLinks = [
    {
      title: "",
      url: "",
      active: pathname === "/",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="z-[100]">
          <Logo w="w-20" />
        </div>

        <div className="z-[100] flex gap-4 items-center">
          {!open && <Cart />}
          {!open && (
            <Link href={"/dashboard"}>
              <User
                className={cn(
                  "transition-all duration-200  hover:text-primary/70 w-9 h-9 lg:w-8 lg:h-8"
                )}
              />
            </Link>
          )}
          <Hamburger
            toggled={open}
            onToggle={() => setOpen((prev) => !prev)}
            duration={0.5}
            size={32}
          />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 w-full bg-popover pt-[112px] text-popover-foreground px-4 flex justify-center flex-col  h-[100vh]"
          >
            <p className="text-lg text-muted-foreground">{"text"}</p>

            <div className="flex flex-col gap-8 mt-7">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className={`text-5xl ${
                    link.active ? "text-primary" : "text-secondary-foreground"
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* 
           input?
            */}
            <div className="mt-10 flex flex-col gap-2">
              <p className="text-muted-foreground  text-lg">
                {"get in touch?"}
              </p>

              <Link className="text-2xl" href={"mailto:itxti909@gmail.com"}>
                itxti909@gmail.com
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
