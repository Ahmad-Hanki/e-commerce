import Container from "../Container";
import PcNavbar from "./PcNavbar";
import MobileNavbar from "./MobileNavbar";
import BandBar from "./BandBar";
import CategoryBar from "./CategoryBar";

const Navbar = () => {
  return (
    <>
      <BandBar />
      <div className=" z-30 relative">
        <Container>
          <div className="py-4">
            <div className="hidden lg:block">
              <PcNavbar />
            </div>
            <div className="lg:hidden">
              <MobileNavbar />
            </div>
          </div>
        </Container>
        <CategoryBar/>
      </div>
    </>
  );
};

export default Navbar;
