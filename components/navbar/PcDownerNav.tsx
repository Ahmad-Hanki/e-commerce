import { UpperCategory } from "@prisma/client";
import { PcCategory } from "./PcCategories";
import Container from "../Container";
import Links from "../Link";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { LogIn, User } from "lucide-react";
import Cart from "../cart/Cart";
import AccountDropDownMenu from "./AccountDropDownMenu";

interface PcDownerNavProps {
  categories: UpperCategory[];
  isLoggedIn: boolean;
  kindeId: string;
  cartLength: number;
  admin: boolean;
}

const PcDownerNav = ({
  categories,
  isLoggedIn,
  admin,
  cartLength,
  kindeId,
}: PcDownerNavProps) => {
  const links = [
    {
      name: "Ana Sayfa",
      href: "/",
    },
    {
      name: "Ürünler",
      href: "/product",
    },

    {
      name: "Hakkımızda",
      href: "/about",
    },
    {
      name: "İletişim",
      href: "/contact",
    },
  ];
  return (
    <>
      <div className="py-5 hidden lg:block">
        <Container>
          <div className="flex justify-between">
            <div className="flex items-center gap-5 ">
              {links.map((link) => (
                <Links className="text-xl" item={link} key={link.href} />
              ))}
            </div>

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
                <div className="flex items-center gap-4">
                  <Cart cartLength={cartLength} kindeId={kindeId} />
                  <AccountDropDownMenu admin ={admin}/>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
      <div className="pb-5 bg-background">
        <div className="mt-6 bg-secondary-foreground ">
          <Container>
            <PcCategory categories={categories} />
          </Container>
        </div>
      </div>
    </>
  );
};

export default PcDownerNav;
