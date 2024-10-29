import Container from "../Container";
import PcNavbar from "./PcNavbar";
import MobileNavbar from "./MobileNavbar";
import BandBar from "./BandBar";
import CategoryBar from "./CategoryBar";
import IsAuthenticated from "@/actions/isAuthenticated";
import getKindeId from "@/actions/getKindeId";
import getCategories from "@/actions/getCategories";

const Navbar = async () => {
  const isLoggedIn = await IsAuthenticated();
  let kindeId = "";
  if (isLoggedIn) {
    kindeId = await getKindeId();
  }
  const categories = await getCategories();
  return (
    <>
      <BandBar />
      <div className=" z-30 relative">
        <div className="py-4">
          <div className="hidden lg:block">
            <Container>
              <PcNavbar kindeId={kindeId} isLoggedIn={isLoggedIn} />
            </Container>
          </div>
          <div className="lg:hidden fixed w-full inset-0 bg-popover h-fit py-2 px-4">
            <Container>
              <MobileNavbar categories={categories} kindeId={kindeId} isLoggedIn={isLoggedIn} />
            </Container>
          </div>
        </div>
        <CategoryBar categories={categories} />
      </div>
    </>
  );
};

export default Navbar;
