import { api } from "@/utils/api";
import React from "react";
import { LoadingPage } from "./Loading";
import Post from "./Post";

const Feed = () => {
  const { data, isLoading } = api.post.getAll.useQuery();
  return !isLoading ? (
    <>
      <div className="grid w-full ">
        {data?.map((post) => (
          <Post post={post} key={post.post.id} />
        ))}
      </div>
    </>
  ) : (
    <LoadingPage />
  );
};

export default Feed;
