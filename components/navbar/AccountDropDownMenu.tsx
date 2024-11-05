import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogOut } from "lucide-react";
import Link from "next/link";

const AccountDropDownMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          Account 
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/my-orders">My Orders</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutLink>
              <div className="flex justify-between gap-2 items-center transition-all duration-300  hover:text-yellow-500">
                <LogOut className="w-9 h-9 lg:w-6 lg:h-6" />
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
