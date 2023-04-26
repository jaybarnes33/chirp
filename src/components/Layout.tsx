import type { ReactNode } from "react";
import LeftSideBar from "./LeftSideBar";
import Users from "./Users";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const Layout = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  return (
    <div>
      <div className="flex justify-center py-4">
        {!user ? (
          <SignInButton>
            <button className="rounded-full bg-blue-500 px-2 py-1 hover:bg-blue-600">
              Sign in
            </button>
          </SignInButton>
        ) : (
          <SignOutButton>
            <button className="rounded-full bg-blue-500 px-2 py-1 hover:bg-blue-600">
              Sign out
            </button>
          </SignOutButton>
        )}
      </div>
      <LeftSideBar />
      <main className="flex justify-center">{children}</main>
      <Users />
    </div>
  );
};

export default Layout;
