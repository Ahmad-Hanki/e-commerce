import Container from "../Container";
import PcNavbar from "./PcNavbar";
import MobileNavbar from "./MobileNavbar";
import BandBar from "./BandBar";
import CategoryBar from "./CategoryBar";
import IsAuthenticated from "@/actions/isAuthenticated";

const Navbar = async () => {
  const isLoggedIn = await IsAuthenticated();
  return (
    <>
      <BandBar />
      <div className=" z-30 relative">
   
          <div className="py-4">
            <div className="hidden lg:block">
            <Container>
              <PcNavbar isLoggedIn={isLoggedIn} />
              </Container>
            </div>
            <div className="lg:hidden fixed w-full inset-0 bg-popover h-fit py-2 px-4">
            <Container>
              <MobileNavbar isLoggedIn={isLoggedIn} />
              </Container>
            </div>
          </div>
        <CategoryBar />
      </div>
    </>
  );
};

export default Navbar;
