import Container from "../Container";
import PcNavbar from "./PcNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <div className="py-4 z-30 relative">
      <Container>
        <div>
          <div className="hidden lg:block">
            <PcNavbar />
          </div>
          <div className="lg:hidden">
            <MobileNavbar />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
