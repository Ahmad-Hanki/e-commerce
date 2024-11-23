import { Mail, Phone } from "lucide-react";
import Logo from "../Logo";
import SearchBar from "./SearchBar";
import Link from "next/link";

interface PcNavbarProps {}

const PcNavbar = ({}: PcNavbarProps) => {
  return (
    <div>
      <div className="flex items-center justify-between gap-5 ">
        <Logo w="w-12 " />

        <SearchBar />

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
    </div>
  );
};

export default PcNavbar;
