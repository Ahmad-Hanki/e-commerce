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
          <DropdownMenuLabel>
            Hesabım

          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/profile">
            
              Profil
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/my-orders">
              Siparişlerim
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutLink>
              <div className="flex justify-between gap-2 items-center transition-all duration-300  hover:text-primary/70">
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
