import React from "react";
import { useGetAllUsersQuery } from "../../services/userApi";

const Users = () => {
  const { data } = useGetAllUsersQuery();
  console.log(data);
  return (
    <>
      <h1>hello</h1>
    </>
  );
};

export default Users;
