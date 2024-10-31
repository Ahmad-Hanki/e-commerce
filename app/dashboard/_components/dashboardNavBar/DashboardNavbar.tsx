import Links from "@/components/Link";

const DashboardNavbar = () => {
  const linkes = [
    {
      href: "/dashboard",
      name: "Dashboard",
    },
    {
      href: "/dashboard/category",
      name: "Category",
    },
    {
      href: "/dashboard/product",
      name: "Product",
    },
    {
      href: "/dashboard/package",
      name: "Package",
    },
  ];
  return (
    <div>
        
    <div className="w-full flex justify-center gap-6 bg-primary-foreground">
      {linkes.map((item) => (
        <Links key={item.href} item={item}
        
        />
      ))}
    </div>
    
    </div>
  );
};

export default DashboardNavbar;
