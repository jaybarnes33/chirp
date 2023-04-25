import type { User } from "@clerk/nextjs/dist/api";
import Image from "next/image";
import React from "react";

const Avatar = ({
  user,
  size,
}: {
  user: Pick<User, "username" | "profileImageUrl">;
  size: number;
}) => {
  return (
    <Image
      className="rounded-full"
      src={user.profileImageUrl}
      alt={`${user.username as string}'s avatar`}
      width={size || 20}
      height={size || 20}
    />
  );
};

export default Avatar;
