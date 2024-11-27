import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Logo from "../Logo";
import SearchBar from "./SearchBar";
import { LogIn, User } from "lucide-react";
import Cart from "../cart/Cart";
import AccountDropDownMenu from "./AccountDropDownMenu";

interface PcNavbarProps {
  isLoggedIn: boolean;
  kindeId: string;
  cartLength: number;
  admin: boolean;
}

const PcNavbar = ({
  admin,
  cartLength,
  isLoggedIn,
  kindeId,
}: PcNavbarProps) => {
  return (
    <div>
      <div className="flex items-center justify-between gap-5 ">
        <Logo w="w-12 " />

        <SearchBar />

        <div className="flex items-center gap-4 ">
          {!isLoggedIn ? (
            <>
              <LoginLink postLoginRedirectURL="/createUser">
                <div className="flex justify-between gap-2 items-center transition-all duration-300  hover:text-primary/70">
                  <LogIn className="w-9 h-9 lg:w-6 lg:h-6" />
                  <p>Oturum Aç</p>
                </div>
              </LoginLink>
              <RegisterLink postLoginRedirectURL="/createUser">
                <div className="flex justify-between gap-2 items-center transition-all duration-300   hover:text-primary/70">
                  <User className="w-9 h-9 lg:w-6 lg:h-6" />
                  <p>Kayıt Ol</p>
                </div>
              </RegisterLink>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Cart cartLength={cartLength} kindeId={kindeId} />
              <AccountDropDownMenu admin={admin} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PcNavbar;
