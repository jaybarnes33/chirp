import { api } from "@/utils/api";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React, { useState } from "react";
import Loading from "./Loading";
import toast from "react-hot-toast";
const CreatePost = () => {
  const { user } = useUser();
  const ctx = api.useContext();
  const { mutate, isLoading } = api.post.create.useMutation({
    onSuccess: () => {
      setText("");
      void ctx.post.getAll.invalidate();
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content;
      if (errorMessage && errorMessage[0]) {
        toast.error(errorMessage[0]);
      } else {
        toast.error("Couldn't post please try again");
      }
    },
  });

  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ content: text });
  };
  return user ? (
    <form
      className="flex gap-2 border-b border-slate-400 p-2 py-5"
      onSubmit={handleSubmit}
    >
      {" "}
      <Image
        width={60}
        height={60}
        className="h-10 w-10 rounded-full"
        src={user.profileImageUrl}
        alt={(user?.username as string) + "'s Avatar"}
      />
      <textarea
        className="flex-1 grow bg-transparent text-slate-200 focus:outline-none"
        placeholder="What's on your mind?"
        autoFocus
        value={text}
        rows={3}
        onChange={(e) => setText(e.target.value)}
        minLength={5}
        required
      />
      <button
        disabled={!text || isLoading}
        className="mt-auto flex items-center gap-2 rounded-full bg-blue-500 p-2 px-5 disabled:bg-transparent"
      >
        {isLoading ? <Loading size={15} /> : "Chirp"}
      </button>
    </form>
  ) : null;
};

export default CreatePost;
