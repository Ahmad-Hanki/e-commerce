import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Logo from "../Logo";
import Cart from "../cart/Cart";
import { LogIn, LogOut, User } from "lucide-react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import DashboardIcon from "@/public/icons/DashboardIcon";

interface PcNavbarProps {
  isLoggedIn: boolean;
  kindeId: string;
  cartLength: number;
  admin: boolean;
}

const PcNavbar = ({
  isLoggedIn,
  kindeId,
  cartLength,
  admin,
}: PcNavbarProps) => {
  return (
    <div>
      <div className="flex items-center justify-between gap-5 ">
        <Logo w="w-12 " />

        <div className="flex flex-1 justify-between gap-8 items-center">
          <SearchBar />

          <div className="flex items-center gap-4 ">
            {!isLoggedIn ? (
              <>
                <LoginLink postLoginRedirectURL="/createUser">
                  <div className="flex justify-between gap-2 items-center transition-all duration-300 hover:text-yellow-500">
                    <LogIn className="w-9 h-9 lg:w-6 lg:h-6" />
                    <p>Oturum Aç</p>
                  </div>
                </LoginLink>
                <RegisterLink postLoginRedirectURL="/createUser">
                  <div className="flex justify-between gap-2 items-center transition-all duration-300  hover:text-yellow-500">
                    <User className="w-9 h-9 lg:w-6 lg:h-6" />
                    <p>Kayıt Ol</p>
                  </div>
                </RegisterLink>
              </>
            ) : (
              <div className="flex items-center gap-4">
                {admin && (
                  <Link href={"/dashboard"}>
                    <DashboardIcon className="transition-all duration-300  hover:text-yellow-500 w-9 h-9 lg:w-6 lg:h-6" />
                  </Link>
                )}
                <Cart cartLength={cartLength} kindeId={kindeId} />
                <LogoutLink >
                  <div className="flex justify-between gap-2 items-center transition-all duration-300  hover:text-yellow-500">
                    <LogOut className="w-9 h-9 lg:w-6 lg:h-6" />
                    <p>Çıkış Yap</p>
                  </div>
                </LogoutLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcNavbar;
