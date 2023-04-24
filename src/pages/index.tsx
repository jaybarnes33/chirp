import { type NextPage } from "next";
import Head from "next/head";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { api } from "@/utils/api";
import CreatePost from "@/components/CreatePost";
import Image from "next/image";
import Post from "@/components/Post";

const Home: NextPage = () => {
  const user = useUser();
  const { data } = api.post.getAll.useQuery();
  console.log(user.user);
  return (
    <>
      <Head>
        <title>Chirp</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center">
        <div className="h-screen w-full border-x border-slate-400 md:max-w-2xl">
          <div className="border-b border-slate-400 p-2">
            {!user.isSignedIn ? <SignInButton /> : <SignOutButton />}
          </div>
          <CreatePost />
          <div className="grid w-full ">
            {data?.map((post) => (
              <Post post={post} key={post.post.id} />
            ))}
            {data?.map((post) => (
              <Post post={post} key={post.post.id} />
            ))}
            {data?.map((post) => (
              <Post post={post} key={post.post.id} />
            ))}
            {data?.map((post) => (
              <Post post={post} key={post.post.id} />
            ))}
            {data?.map((post) => (
              <Post post={post} key={post.post.id} />
            ))}
            {data?.map((post) => (
              <Post post={post} key={post.post.id} />
            ))}
          </div>
          <h1>Welcome {user.user?.username}</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
