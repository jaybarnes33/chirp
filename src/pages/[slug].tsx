import { useUser } from "@clerk/nextjs";
import Head from "next/head";
import React from "react";

const Slug = () => {
  const { user } = useUser();
  return (
    <main>
      <Head>
        <title>{user?.username}&apos;s Profile</title>
      </Head>
    </main>
  );
};

export default Slug;
