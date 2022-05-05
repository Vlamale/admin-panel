import * as React from "react";
import { useQuery } from "@apollo/client";
import { operations, Types } from "./duck";
import "./Example.css";

const Example: React.FC = () => {
  const { data, loading } = useQuery<
    Types.GetUsersQuery,
    Types.GetUsersQueryVariables
  >(operations.getUsers);

  if (!data || loading) {
    return <span>Loading...</span>;
  }

  if (data.users?.data) {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.users.data.map((user, index) => {
            return (
              <tr key={user?.id || index}>
                <td>{user?.id}</td>
                <td>{user?.username}</td>
                <td>{user?.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  return <code>data.users = null</code>;
};

export default Example;
