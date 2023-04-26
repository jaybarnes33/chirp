import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import {
  FaBookmark,
  FaCog,
  FaDoorOpen,
  FaHome,
  FaKiwiBird,
  FaUser,
} from "react-icons/fa";
const LeftSideBar = () => {
  const links = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Profile", path: "/", icon: <FaUser /> },
    { name: "Bookmarks", path: "/bookmarks", icon: <FaBookmark /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> },
  ];

  const { user } = useUser();
  return (
    <div className=" fixed bottom-0 hidden  w-full bg-black px-4 py-3 lg:top-0  lg:block lg:h-screen lg:max-w-[300px]  lg:py-16 lg:pl-20">
      <p className="absolute top-5 hidden text-3xl font-bold text-blue-500 lg:flex">
        <FaKiwiBird />
      </p>
      <ul className="flex w-full  justify-between text-2xl font-bold lg:flex-col lg:gap-10 lg:py-10">
        {links.map((link) => (
          <Link href={link.path} key={link.name}>
            <li className="flex items-center gap-3 hover:text-blue-500">
              {link.icon}
              <span className="hidden lg:block">{link.name}</span>
            </li>
          </Link>
        ))}

        {user?.username && (
          <li className="absolute bottom-10 hidden items-center gap-3 hover:text-blue-500 lg:flex">
            <FaDoorOpen /> Logout
          </li>
        )}
      </ul>
    </div>
  );
};

export default LeftSideBar;
