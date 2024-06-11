import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import ConvertActiveDirectoryCodeToDescription from "../utils/convertActiveDirectoryCodeToDescription";
import ConvertInt64Timestamp from "../utils/convertInt64Timestamp";
import ldap2date from "ldap2date";

interface GetAllUsersResponse {
  cn: string;
  description: string | "null";
  distinguishedName: string;
  displayName: string;
  mail: string | "null";
  pwdLastSet: Date | string;
  sAMAccountName: string | "null";
  userAccountControl: string;
  whenCreated: Date | string | undefined;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    authorization: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    getAllUsers: builder.query<any, void>({
      query: () => ({
        url: "get-all-users",
      }),
      transformResponse: (response: any) => {
        return response?.map((data: any) => {
          const res: GetAllUsersResponse = {
            cn: data.cn,
            description: data.description || "null",
            displayName: data.displayName || "null",
            distinguishedName: data.distinguishedName,
            mail: data.mail || "null",
            pwdLastSet: ConvertInt64Timestamp(data.pwdLastSet),
            sAMAccountName: data.sAMAccountName,
            whenCreated: ldap2date.parse(data.whenCreated)?.toUTCString(),
            userAccountControl: ConvertActiveDirectoryCodeToDescription(
              data.userAccountControl,
            ),
          };
          return res;
        });
      },
    }),
  }),
});

export const { useAuthorizationMutation, useGetAllUsersQuery } = userApi;
