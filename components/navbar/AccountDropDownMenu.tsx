import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import BillIcon from "@/public/icons/BillIcon";
import DashboardIcon from "@/public/icons/DashboardIcon";
import ProfileIcon from "@/public/icons/ProfileIcon";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogOut, User } from "lucide-react";
import Link from "next/link";

const AccountDropDownMenu = ({ admin }: { admin: boolean }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center border p-2 px-4 gap-2 rounded-xl">
          <User className="w-9 h-9 lg:w-6 lg:h-6" />
          Hesabım
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Hesabım</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className="flex items-center gap-2 transition-all duration-300  hover:text-primary/70"
              href="/profile"
            >
              <ProfileIcon />
              <p>Profil</p>{" "}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              className="flex items-center gap-2 transition-all duration-300  hover:text-primary/70"
              href="/my-orders"
            >
              {" "}
              <BillIcon /> <p>Siparişlerim </p>
            </Link>
          </DropdownMenuItem>
          {admin && (
            <DropdownMenuItem>
              <Link
                className="flex items-center gap-2 transition-all duration-300  hover:text-primary/70"
                href={"/dashboard"}
              >
                <DashboardIcon />
                <p>Yönetim Paneli</p>
              </Link>
            </DropdownMenuItem>
          )}
          <DropdownMenuItem>
            <LogoutLink>
              <div className="flex justify-between gap-2 items-center transition-all duration-300  hover:text-primary/70">
                <LogOut className=" w-4 h-4" />
                <p>Çıkış Yap</p>
              </div>
            </LogoutLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AccountDropDownMenu;
