import type { RouterOutputs } from "@/utils/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import Link from "next/link";
import React from "react";

dayjs.extend(relativeTime);
const Post = ({ post }: { post: RouterOutputs["post"]["getAll"][number] }) => {
  return (
    <div
      className="flex w-full gap-2 rounded-sm border-b  border-slate-400 px-2 py-5   "
      key={post.post.id}
    >
      <Link href={`/@${post.author?.username as string}`}>
        {post.author && (
          <Image
            width={50}
            height={50}
            className="h-10 w-10"
            src={post.author?.profileImageUrl}
            alt={(post.author.username as string) + "'s avatar"}
          />
        )}
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
