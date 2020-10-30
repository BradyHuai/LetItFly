import React, { Component, useEffect } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { get } from 'http';

const tableIcons = {
  Add: AddBox,
  Check: Check,
  Clear: Clear,
  Delete: DeleteOutline,
  DetailPanel: ChevronRight,
  Edit: Edit,
  Export: SaveAlt,
  Filter: FilterList,
  FirstPage: FirstPage,
  LastPage: LastPage,
  NextPage: ChevronRight,
  PreviousPage: ChevronLeft,
  ResetSearch: Clear,
  Search: Search,
  SortArrow: ArrowDownward,
  ThirdStateCheck: Remove,
  ViewColumn: ViewColumn,
};

export default function Usertable({ columns, getData }) {
  const { useState } = React;
  /*
  const [columns, setColumns] = useState([
    { title: 'Nickname', field: 'nickname' },
    { title: 'Account Type', field: 'accounttype' },
    { title: 'Email', field: 'email' },
    { title: 'Name', field: 'name'},
    { title: "Coins", filed: 'coins', type:'numeric'}
  ]);
*/
  /*
  const [data, setData] = useState([
    { nickname: 'Tim123', accounttype: 'Admin', email: '12213@mail.utoronto.ca', name:'Tim Kang', coins: 1200},
    { nickname: 'TomHandsome', accounttype: 'Regular', email: '12315@mail.utoronto.ca', name:'Tom Clarsion', coins: 900},
  ]);
*/
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data: dataset } = await getData();
      setData(dataset);
    })();
  }, [getData]);

  return (
    <MaterialTable
      icons={tableIcons}
      title="User info"
      columns={columns}
      data={data}
      tableRef={this.materialTableRef}
      options={{ search: true }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000);
          }),
      }}
    />
  );
}
