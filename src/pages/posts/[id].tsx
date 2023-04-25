import Post from "@/components/Post";
import { api } from "@/utils/api";
import { useRouter } from "next/router";
import React from "react";

const PostPage = () => {
  const {
    query: { id },
  } = useRouter();

  const { data } = api.post.getPost.useQuery({
    id: id as string,
  });
  return (
    <main className="flex justify-center">
      <div className="min-h-screen w-full border-slate-400 md:max-w-2xl md:border-x">
        {data && <Post post={data} />}
      </div>
    </main>
  );
};

export default PostPage;
