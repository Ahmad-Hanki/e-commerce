
import { ReactNode } from "react";
import DashboardNavbar from "./_components/dashboardNavBar/DashboardNavbar";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  

  return <div>
    <DashboardNavbar/>
    {children}
    </div>;
};

export default DashboardLayout;
