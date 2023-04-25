import { api } from "@/utils/api";

import React from "react";
import { useRouter } from "next/router";
import { LoadingPage } from "@/components/Loading";
import Avatar from "@/components/Avatar";
import Post from "@/components/Post";
import { useUser } from "@clerk/nextjs";
import CreatePost from "@/components/CreatePost";
import { toast } from "react-hot-toast";
const Slug = () => {
  const { user } = useUser();
  const {
    query: { slug },
  } = useRouter();
  const { data, isLoading } = api.profile.getUser.useQuery({
    username: String(slug).substring(1),
  });

  const { data: posts, isLoading: isFetching } = api.post.getUserPosts.useQuery(
    {
      userId: data?.id as string,
    }
  );

  return isLoading || isFetching ? (
    <LoadingPage />
  ) : (
    <>
      {!data ? (
        toast("Couldn't fetch profile")
      ) : (
        <div className="min-h-screen w-full border-slate-400 md:max-w-2xl md:border-x">
          <div className="bg-black">
            <div className="h-32 w-full bg-slate-500"></div>
            <div className="relative -top-16 border-b border-slate-400  px-4 py-3">
              <Avatar user={data} size={100} />
              <p className="text-2xl font-bold">@{data?.username}</p>
            </div>
          </div>
          {!isLoading || isFetching ? (
            <>
              <div className="relative -top-16 grid w-full">
                {user?.username === String(slug).substring(1) && <CreatePost />}
                {posts?.map((post) => (
                  <Post post={post} key={post.post.id} />
                ))}
              </div>
            </>
          ) : (
            <LoadingPage />
          )}
          ;
        </div>
      )}
    </>
  );
};

export default Slug;
