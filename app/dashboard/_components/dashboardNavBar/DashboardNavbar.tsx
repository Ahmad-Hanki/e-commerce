import Links from "@/components/Link";

const DashboardNavbar = () => {
  const linkes = [
    {
      href: "/dashboard/main",
      name: "Dashboard",
    },
    {
      href: "/dashboard/category",
      name: "Categories",
    },
    {
      href: "/dashboard/product",
      name: "Products",
    },
    {
      href: "/dashboard/package",
      name: "Packages",
    },
    {
      href: "/dashboard/order",
      name: "Orders",
    },
  ];
  return (
    <div>
      <div className="w-full flex justify-center gap-6 bg-primary-foreground">
        {linkes.map((item) => (
          <Links key={item.href} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DashboardNavbar;
