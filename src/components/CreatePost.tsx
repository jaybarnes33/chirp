import { api } from "@/utils/api";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React, { useState } from "react";
import Loading from "./Loading";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Avatar from "./Avatar";
const CreatePost = () => {
  const {
    query: { slug },
  } = useRouter();

  const { user } = useUser();
  const ctx = api.useContext();
  const { mutate, isLoading } = api.post.create.useMutation({
    onSuccess: () => {
      setText("");
      !slug
        ? void ctx.post.getAll.invalidate()
        : void ctx.post.getUserPosts.invalidate();
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
      className="flex gap-2 border-b border-slate-400 p-2 py-5 "
      onSubmit={handleSubmit}
    >
      <Avatar size={75} user={user} />
      <textarea
        className="flex-1 grow bg-transparent text-slate-200 focus:border-b focus:border-slate-400 focus:outline-none"
        placeholder="What's on your mind?"
        value={text}
        rows={3}
        onChange={(e) => setText(e.target.value)}
        minLength={5}
        required
      />
      <button
        disabled={!text || isLoading}
        className="mt-auto flex items-center gap-2 rounded-full bg-blue-500 p-1 px-5 disabled:bg-transparent"
      >
        {isLoading ? <Loading size={15} /> : "Chirp"}
      </button>
    </form>
  ) : null;
};

export default CreatePost;
