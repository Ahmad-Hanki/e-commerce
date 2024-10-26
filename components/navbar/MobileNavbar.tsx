"use client";

import { usePathname } from "next/navigation";
import { Divide as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Cart from "../cart/Cart";
import {
  Facebook,
  Instagram,
  LogIn,
  LogOut,
  Twitch,
  Twitter,
  User,
} from "lucide-react";
import OurProducts from "./OurProducts";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const login = false;
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navLinks = [
    {
      title: "Ana Sayfa",
      url: "/",
      active: pathname === "/",
    },
    {
      title: "Hakkımızda",
      url: "/about",
      active: pathname === "/about",
    },
    {
      title: "Bize Ulaşın",
      url: "/contact",
      active: pathname === "/contact",
    },
  ];

  const loginLinks = [
    {
      title: "Giriş Yap",
      icon: <LogIn size={30} />,
      hidden: login,
    },
    {
      title: "Kayıt Ol",
      icon: <User size={30} />,
      hidden: login,
    },
    {
      title: "Çıkış Yap",
      icon: <LogOut size={30} />,
      hidden: !login,
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
            className="fixed inset-0 z-50 w-full bg-popover text-popover-foreground px-4 pt-[120px] min-h-[100vh] overflow-scroll"
          >
            <div className="relative pb-10">
              <div className="flex flex-col gap-6">
                <OurProducts />

                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    className={`text-4xl ${link.active ? "text-primary" : ""}`}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-6 mt-5">
                {loginLinks.map(
                  (link, index) =>
                    !link.hidden && (
                      <div
                        key={index}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        {link.icon}
                        <p className="text-3xl">{link.title}</p>
                      </div>
                    )
                )}
              </div>

              <p className=" mt-5 text-2xl">
                {/*  random location */}
                Random Location within a City or Radius: Specify a central point
                and radius to limit random locations within that area.
              </p>
            

              <div className="mt-5 flex gap-3">
                <Instagram
                  size={40}
                  className="transition-all duration-200  cursor-pointer hover:text-secondary-foreground"
                />
                <Twitch
                  size={40}
                  className="transition-all duration-200 cursor-pointer hover:text-secondary-foreground"
                />
                <Twitter
                  size={40}
                  className="transition-all duration-200 cursor-pointer  hover:text-secondary-foreground"
                />
                <Facebook
                  size={40}
                  className="transition-all duration-200 cursor-pointer  hover:text-secondary-foreground"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
