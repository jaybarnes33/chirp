import { api } from "@/utils/api";
import React from "react";
import Avatar from "./Avatar";

const Users = () => {
  const { data } = api.profile.getAll.useQuery();
  console.log(data);
  return (
    <div className="fixed right-[3rem] top-[3rem] mx-auto hidden w-[300px] lg:block">
      <div className="w-full rounded-2xl bg-slate-800 px-3 py-3">
        <h1 className="mb-2 text-2xl font-semibold">Who to follow</h1>
        {data?.map((user) => (
          <div key={user.id} className="my-3 flex items-center gap-3">
            <Avatar user={user} size={40} />
            <p>{user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
