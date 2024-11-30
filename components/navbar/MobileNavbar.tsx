"use client";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { Divide as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Cart from "../cart/Cart";
import { LogIn, LogOut, User } from "lucide-react";
import MobileCategories from "./MobileCategories";
import DashboardIcon from "@/public/icons/DashboardIcon";
import { UpperCategory } from "@prisma/client";

import ProfileIcon from "@/public/icons/ProfileIcon";
import BillIcon from "@/public/icons/BillIcon";

interface MobileNavbarProps {
  isLoggedIn: boolean;
  kindeId: string;
  categories: UpperCategory[];
  cartLength: number;
  admin: boolean;
}

const MobileNavbar = ({
  isLoggedIn,
  kindeId,
  categories,
  cartLength,
  admin,
}: MobileNavbarProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const loginNavLinks = [
    {
      title: "Profile",
      url: "/profile",
      active: pathname.includes("/profile"),
      icon: <ProfileIcon className="w-[36px] h-[36px] " />,
    },
    {
      title: "My Orders",
      url: "/my-orders",
      active: pathname.includes("/my-orders"),
      icon: <BillIcon className="w-[36px] h-[36px] " />,
    },
  ];

  const navLinks = [
    {
      title: "Ana Sayfa",
      url: "/",
      active: pathname === "/",
    },
    {
      title: "Ürünler",
      url: "/product",
      active: pathname === "/shop",
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

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="z-[100]">
          <Logo w="w-20" />
        </div>

        <div className="z-[100] flex gap-4 items-center">
          {isLoggedIn && <Cart cartLength={cartLength} kindeId={kindeId} />}

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
            className="fixed inset-0 z-50 w-full  text-popover-foreground px-4 pt-[120px] min-h-[100vh] overflow-scroll bg-zinc-200"
          >
            <div className="relative pb-10">
              <div className="flex flex-col gap-6">
                <MobileCategories categories={categories} />

                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    className={`text-4xl ${
                      link.active ? "text-primary  underline" : ""
                    }`}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col  gap-6 mt-10">
                {!isLoggedIn ? (
                  <>
                    <LoginLink postLoginRedirectURL="/createUser">
                      <div className="flex items-center gap-2 cursor-pointer">
                        <LogIn className="w-8 h-8 " />
                        <p className="text-3xl">Giriş Yap</p>
                      </div>
                    </LoginLink>

                    <RegisterLink postLoginRedirectURL="/createUser">
                      <div className="flex items-center gap-2 cursor-pointer">
                        <User className="w-8 h-8" />
                        <p className="text-3xl">Kayıt Ol</p>
                      </div>
                    </RegisterLink>
                  </>
                ) : (
                  <div className="flex flex-col gap-6">
                    {loginNavLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        className={`text-3xl flex items-center gap-3 ${
                          link.active ? "text-primary" : ""
                        }`}
                      >
                        {link.icon}
                        {link.title}
                      </Link>
                    ))}
                    {admin && (
                      <Link
                        href={"/dashboard"}
                        className={`text-3xl flex items-center gap-3`}
                      >
                        <DashboardIcon className="w-[36px] h-[36px] " />
                        <p className="text-3xl">Dashboard</p>
                      </Link>
                    )}
                    <LogoutLink>
                      <div className="flex items-center gap-2 cursor-pointer">
                        <LogOut className="w-[36px] h-[36px] " />
                        <p className="text-3xl">Çıkış Yap</p>
                      </div>
                    </LogoutLink>
                  </div>
                )}
              </div>

              <p className="mt-5 text-2xl">
                Fıstıklık Mahallesi. 152080 Nolu Sokak. No:4
                Şahitkamil/Gaziantep
              </p>
              <div className="mt-5 flex flex-col gap-1">
                <p className="text-lg">Bize Ulaşın</p>

                <p className=" text-2xl">+90 552 680 80 00</p>
              </div>

              <div className="mt-5 flex flex-col gap-1">
                <p className="text-lg">Bize Takip Edin</p>

                <div className=" flex gap-3">
                  <InstagramLogoIcon
                    height={40}
                    width={40}
                    className="transition-all duration-200 cursor-pointer hover:text-secondary-foreground"
                  />
                  <LinkedInLogoIcon
                    height={40}
                    width={40}
                    className="transition-all duration-200 cursor-pointer hover:text-secondary-foreground"
                  />
                  <TwitterLogoIcon
                    height={40}
                    width={40}
                    className="transition-all duration-200 cursor-pointer hover:text-secondary-foreground"
                  />
                  <GitHubLogoIcon
                    height={40}
                    width={40}
                    className="transition-all duration-200 cursor-pointer hover:text-secondary-foreground"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
