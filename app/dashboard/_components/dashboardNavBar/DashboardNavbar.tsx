import Links from "@/components/Link";

const DashboardNavbar = () => {
  const linkes = [
    {
      href: "/dashboard",
      name: "Yönetim Paneli",
    },
    {
      href: "/dashboard/upperCategory",
      name: "Üst Kategoriler",
    },
    {
      href: "/dashboard/downerCategory",
      name: "Alt Kategoriler",
    },
    {
      href: "/dashboard/product",
      name: "Ürünler",
    },
    {
      href: "/dashboard/package",
      name: "Paketler",
    },
    {
      href: "/dashboard/order",
      name: "Siparişler",
    },
  ];
  return (
    <div>
      <div className="w-full flex justify-center gap-6 bg-primary-foreground flex-wrap">
        {linkes.map((item) => (
          <Links key={item.href} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DashboardNavbar;
