import type { ReactNode } from "react";
import LeftSideBar from "./LeftSideBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <LeftSideBar />
      <main className="flex justify-center">{children}</main>
    </div>
  );
};

export default Layout;
