import React from "react";
import UserStoreItem from "./UserStoreItem";
import { loadStoreContents } from "../../services/serverApi/userStoreApi";
import StoreTour from "../Onboarding/components/StoreTour";

const userStore = () => {
  return (
    <div>
      <StoreTour />
      <UserStoreItem getData={loadStoreContents} />
    </div>
  );
};

export default userStore;
