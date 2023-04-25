import type { RouterOutputs } from "@/utils/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";

dayjs.extend(relativeTime);
const Post = ({ post }: { post: RouterOutputs["post"]["getAll"][number] }) => {
  return (
    <div
      className="flex w-full gap-2 rounded-sm border-b  border-slate-400 px-2 py-5   "
      key={post.post.id}
    >
      <Link href={`/@${post.author?.username as string}`}>
        {post.author && <Avatar user={post.author} size={40} />}
      </Link>
      <div className="flex flex-col">
        <div className="flex gap-2 text-sm text-slate-300">
          <Link href={`/@${post.author?.username as string}`}>
            <span className="font-semibold">@{post.author?.username}</span>
          </Link>
          <span className="font-thin">
            · {dayjs(post.post.createdAt).fromNow()}
          </span>
          {}
        </div>
        <Link href={`/posts/${post.post.id}`}>{post.post?.content}</Link>
      </div>
    </div>
  );
};

export default Post;
