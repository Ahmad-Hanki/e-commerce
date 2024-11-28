import Container from "../Container";
import PcNavbar from "./PcNavbar";
import MobileNavbar from "./MobileNavbar";
import IsAuthenticated from "@/actions/isAuthenticated";
import getKindeId from "@/actions/getKindeId";
import getCartLength from "@/actions/getCartLength";
import getUpperCategories from "@/app/dashboard/upperCategory/_actions/getUpperCategories";
import PcDownerNav from "./PcDownerNav";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export const admins = ["itxti909@gmail.com", "kocticarettrendyol@gmail.com"];

const Navbar = async () => {
  const isLoggedIn = await IsAuthenticated();
  let kindeId = "";
  let email = "";
  let cartLength = 0;
  if (isLoggedIn) {
    kindeId = (await getKindeId()).kindeId;
    cartLength = await getCartLength(kindeId);
    email = (await getKindeId()).email;
  }

  const admin = admins.includes(email);
  const categories = await getUpperCategories();

  return (
    <>
      <div className=" z-30 relative">
        <div className="bg-popover">
          <div className="hidden lg:block space-y-4">
            <div className="bg-primary py-2 text-white">
              <Container>
                {/* upper navbar */}
                <div className="flex justify-between items-center text-lg">
                  <p>Müşteri Hizmetleri : 0850 888 0 887</p>

                  <div className="flex items-center gap-2">
                    <InstagramLogoIcon className=" hover:text-secondary-foreground transition-all duration-300 cursor-pointer w-5 h-5" />
                    <TwitterLogoIcon className=" hover:text-secondary-foreground transition-all duration-300 cursor-pointer w-5 h-5" />
                    <LinkedInLogoIcon className=" hover:text-secondary-foreground transition-all duration-300 cursor-pointer w-5 h-5" />
                    <GitHubLogoIcon className=" hover:text-secondary-foreground transition-all duration-300 cursor-pointer w-5 h-5" />
                  </div>
                </div>
              </Container>
            </div>

            <Container>
              <PcNavbar
                admin={admin}
                kindeId={kindeId}
                cartLength={cartLength}
                isLoggedIn={isLoggedIn}
              />
            </Container>

            <PcDownerNav categories={categories} />
          </div>
          <div className="lg:hidden fixed w-full inset-0 bg-popover h-fit py-2 px-4">
            <Container>
              <MobileNavbar
                admin={admin}
                categories={categories}
                kindeId={kindeId}
                isLoggedIn={isLoggedIn}
                cartLength={cartLength}
              />
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
