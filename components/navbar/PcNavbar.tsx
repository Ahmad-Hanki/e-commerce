"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Logo from "../Logo";
import { cn } from "@/lib/utils";
import Cart from "../cart/Cart";
import { LogIn, LogOut, User } from "lucide-react";
import { Input } from "../ui/input";

const PcNavbar = () => {
  const pathname = usePathname();
  const login = true;


  const contact = {
    title: "Get in touch",
    url: "/menu",
    active: pathname === "/menu",
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-5">
        <Logo w="w-12 " />

        <div className="flex flex-1 justify-between gap-8 items-center">
          <div className="flex-1 flex gap-0 items-center">
            <Input className="flex-1 h-[40px] border-r-0 rounded-r-none text-xl" />
            <Button className="h-[40px] border-l-0 rounded-l-none">Bul</Button>
          </div>

          <div className="flex items-center gap-4">
            {!login ? (
              <>
                <div className="flex justify-between gap-2 items-center">
                  <LogIn size={24} />
                  <p>Login</p>
                </div>
                <div className="flex justify-between gap-2 items-center">
                  <User size={24} />
                  <p>Login</p>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <Cart />
                <div className="flex justify-between gap-2 items-center">
                  <LogOut size={24} />
                  <p>Logout</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcNavbar;
