
import Logo from "../Logo";
import SearchBar from "./SearchBar";


interface PcNavbarProps {}

const PcNavbar = ({}: PcNavbarProps) => {
  return (
    <div>
      <div className="flex items-center justify-between gap-5 ">
        <Logo w="w-12 " />

        <SearchBar />

        <div className="flex items-center gap-5 ">
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground">E-posta</p>
            <a
              className="text-xl"
              href="mailto:email@provider.com?subject=Hello%20there&body=How%20are%20you?"
            >
              Email@provider.com
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground ">Telefon</p>

            <a className="text-xl" href="tel:+1234567890">
              Call +1 234 567 890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcNavbar;
