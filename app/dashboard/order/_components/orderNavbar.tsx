"use client";
import Container from "@/components/Container";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const OrderNavbar = () => {
  const pathname = usePathname();

  // Define an array of menu items
  const menuItems = [
    { name: "Yeni Siparişler", href: "/dashboard/order/newOrder" },
    { name: "Kargoya gönderildi", href: "/dashboard/order/cargo" },
    { name: "Teslim edilmiş", href: "/dashboard/order/delivered" },
    { name: "İptal edildi", href: "/dashboard/order/cancel" },
    
  ];

  return (
    <div className="mt-5">
      <Container>
        <Menubar>
          <MenubarMenu>
            <div className="w-full flex items-center justify-around">
              {menuItems.map((item) => (
                <MenubarTrigger key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      pathname === item.href ? "font-bold underline" : ""
                    }
                  >
                    {item.name}
                  </Link>
                </MenubarTrigger>
              ))}
            </div>
          </MenubarMenu>
        </Menubar>
      </Container>
    </div>
  );
};

export default OrderNavbar;
