import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const CreatePost = () => {
  const { user } = useUser();
  return user ? (
    <div className="flex gap-2 border-b border-slate-400 p-2">
      {" "}
      <Image
        width={60}
        height={60}
        className="h-10 w-10 rounded-full"
        src={user.profileImageUrl}
        alt={(user?.username as string) + "'s Avatar"}
      />
      <textarea
        className="flex-1 bg-transparent text-slate-200 focus:outline-none"
        placeholder="What's on your mind?"
        autoFocus
        minLength={5}
      />
    </div>
  ) : null;
};

export default CreatePost;
