import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Logo from "../Logo";
import Cart from "../cart/Cart";
import { LogIn, LogOut, User } from "lucide-react";
import SearchBar from "./SearchBar";

interface PcNavbarProps {
  isLoggedIn: boolean;
  kindeId: string;
  cartLength: number;
}

const PcNavbar = ({ isLoggedIn, kindeId, cartLength }: PcNavbarProps) => {
  return (
    <div>
      <div className="flex items-center justify-between gap-5 ">
        <Logo w="w-12 " />

        <div className="flex flex-1 justify-between gap-8 items-center">
          <SearchBar />

          <div className="flex items-center gap-4 ">
            {!isLoggedIn ? (
              <>
                <LoginLink>
                  <div className="flex justify-between gap-2 items-center transition-all duration-300 hover:text-primary">
                    <LogIn size={24} />
                    <p>Oturum Aç</p>
                  </div>
                </LoginLink>
                <RegisterLink>
                  <div className="flex justify-between gap-2 items-center transition-all duration-300 hover:text-primary">
                    <User size={24} />
                    <p>Kayıt Ol</p>
                  </div>
                </RegisterLink>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <Cart cartLength={cartLength} kindeId={kindeId} />
                <LogoutLink>
                  <div className="flex justify-between gap-2 items-center transition-all duration-300 hover:text-primary">
                    <LogOut size={24} />
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
