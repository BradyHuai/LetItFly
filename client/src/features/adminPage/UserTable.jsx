import React from "react";
import Table from "./UserExpandable";
import { loadUsersTable } from "../../services/serverApi/adminApi";
const UserTable = () => (
  <Table
    columns={[
      { title: "Nickname", field: "nickname" },
      { title: "Account Type", field: "accounttype" },
      { title: "Email", field: "email" },
      { title: "Name", field: "name" },
      { title: "Coins", field: "coins" },
    ]}
    getData={loadUsersTable}
    title={"User Info"}
  />
);

export default UserTable;