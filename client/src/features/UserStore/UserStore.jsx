import React from "react";
import UserStoreItem from "./UserStoreItem";
import StoreTour from "../Onboarding/components/StoreTour";
import { loadStoreContents } from "../../services/serverApi/propertyApi";

const userStore = () => {
  return (
    <div>
      <StoreTour />
      <UserStoreItem getData={loadStoreContents} />
    </div>
  );
};

export default userStore;
