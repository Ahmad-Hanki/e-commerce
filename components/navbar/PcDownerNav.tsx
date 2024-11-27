import { UpperCategory } from "@prisma/client";
import { PcCategory } from "./PcCategories";
import Container from "../Container";
import Links from "../Link";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

interface PcDownerNavProps {
  categories: UpperCategory[];
}

const PcDownerNav = ({ categories }: PcDownerNavProps) => {
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

            {/* <div className="flex items-center gap-4 ">
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
                  <AccountDropDownMenu admin ={admin}/>
                </div>
              )}
            </div> */}

            <div className="flex items-center gap-5 ">
              <div className="flex items-center gap-1 transition-all duration-300 hover:text-primary/80">
                <Mail size={20} />
                <Link
                  className="text-lg"
                  href="mailto:email@provider.com?subject=Hello%20there&body=How%20are%20you?"
                >
                  Email@provider.com
                </Link>
              </div>
              <div className="flex items-center gap-1 transition-all duration-300 hover:text-primary/80">
                <Phone size={20} />
                <Link className="text-lg" href="tel:+1234567890">
                  +1 234 567 890
                </Link>
              </div>
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
