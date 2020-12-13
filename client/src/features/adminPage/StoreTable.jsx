import React from "react";
import Table from "./table";
import { axios } from "../../services/axios";

const loadStoreTable = () => {
  return axios.get("/api/property/inventory").then((res) => {
    if (res.data.success){
    const { body } = res.data.data;
      return {
        data: body.map((item) => {
          return {
            ...item,
            name: item.name,
            description: item.description,
            price: item.price,
            category: item.category,
          };
        }),
      };
    }
    else{
      return [];
    }
  });
};

const StoreTable = () => (
  <Table
    columns={[
      { title: "ItemName", field: "name" },
      { title: "Description", field: "description" },
      { title: "Price", field: "price" },
      { title: "Category", field: "category" },
    ]}
    getData={loadStoreTable}
    title={"Store Info"}
  />
);

export default StoreTable;
