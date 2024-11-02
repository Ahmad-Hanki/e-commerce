import { ReactNode } from "react";
import OrderNavbar from "./orderNavbar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="space-y-5">
      <OrderNavbar />
      {children}
    </div>
  );
};

export default layout;
