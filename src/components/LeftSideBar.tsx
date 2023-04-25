import Link from "next/link";
import React from "react";

const LeftSideBar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/" },
    { name: "Bookmarks", path: "/bookmarks" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="fixed bottom-0 w-full bg-black px-2 py-3 lg:top-0 lg:h-screen lg:max-w-[300px] lg:px-6 lg:py-16">
      <ul className="flex w-full justify-between  text-2xl font-bold lg:flex-col lg:gap-10">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
