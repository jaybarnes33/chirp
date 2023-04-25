import { type NextPage } from "next";
import Head from "next/head";
import { useUser } from "@clerk/nextjs";
import { api } from "@/utils/api";
import CreatePost from "@/components/CreatePost";

import Feed from "@/components/Feed";

const Home: NextPage = () => {
  const user = useUser();
  api.post.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Chirp</title>
        <meta name="description" content="Connect with your people " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center">
        <div className="min-h-screen w-full border-slate-400 md:max-w-2xl md:border-x">
          {user.user?.username && <CreatePost />}
          <Feed />
        </div>
      </main>
    </>
  );
};

export default Home;
