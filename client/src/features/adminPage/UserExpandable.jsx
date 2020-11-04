import React, { Component, useEffect, useRef } from 'react';
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
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import { isRegularExpressionLiteral } from 'typescript';

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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    form: {
        '& .MuiTextField-root': {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        lexGrow: 1,
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    parallel: {
        width: "50%",
        padding: 4,
    },
}));
export default function Usertable({ columns, getData, title }) {
    const { useState } = React;

    const classes = useStyles();
    const [data, setData] = useState([]);
    useEffect(() => {
        if (getData) {
            (async () => {
                const { data: dataset } = await getData();
                setData(dataset);
            })();
        }
    }, [getData]);

    const ref = useRef();

    return (
        <MaterialTable
            icons={tableIcons}
            columns={columns}
            title={title}
            data={data}
            tableRef={ref}
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
            detailPanel={rowData => {
                const handleChange = event => {
                    console.log(event.target.value)
                    const index = rowData.tableData.id;
                    const newData = rowData;
                    newData.email = event.target.value;
                    const updateData = [...data];
                    updateData[index] = newData;
                    setData([...updateData]);
                }
                var bool = rowData.email.search("@");
                const error = bool == -1;

                if (error) {
                    var emailValid = "Invalid email address";
                } else {
                    var emailValid = "";
                }

                const error2 = rowData.nickname === "";
                const error3 = rowData.firstname === "";
                const error4 = rowData.lastname === "";

                return(
                    <React.Fragment>
                        <form className={classes.form} noValidate autoComplete="off">
                            <div>
                                <TextField
                                    required
                                    id="nickName"
                                    name="nickName"
                                    label="Nickname"
                                    defaultValue={rowData.nickname}
                                    fullWidth
                                    onChange={event => {
                                        console.log(event.target.value)
                                        const index = rowData.tableData.id;
                                        const newData = rowData;
                                        newData.nickname = event.target.value;
                                        const updateData = [...data];
                                        updateData[index] = newData;
                                        setData([...updateData]);
                                    }}
                                    error={error2}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Email"
                                    fullWidth
                                    defaultValue={rowData.email}
                                    onChange={handleChange}
                                    error={error}
                                    helperText={emailValid}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="birthday"
                                    name="birthday"
                                    label="Date Of Birth"
                                    fullWidth
                                    defaultValue={rowData.birthday}
                                    onChange={event => {
                                        console.log(event.target.value)
                                        const index = rowData.tableData.id;
                                        const newData = rowData;
                                        newData.birthday = event.target.value;
                                        const updateData = [...data];
                                        updateData[index] = newData;
                                        setData([...updateData]);
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="First name"
                                    className={classes.parallel}
                                    defaultValue={rowData.firstname}
                                    onChange={event => {
                                        console.log(event.target.value)
                                        const index = rowData.tableData.id;
                                        const newData = rowData;
                                        newData.firstname = event.target.value;
                                        const updateData = [...data];
                                        updateData[index] = newData;
                                        setData([...updateData]);
                                    }}
                                    error={error3}
                                />
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Last name"
                                    className={classes.parallel}
                                    defaultValue={rowData.lastname}
                                    onChange={event => {
                                        console.log(event.target.value)
                                        const index = rowData.tableData.id;
                                        const newData = rowData;
                                        newData.lastname = event.target.value;
                                        const updateData = [...data];
                                        updateData[index] = newData;
                                        setData([...updateData]);
                                    }}
                                    error={error4}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="descirption"
                                    label="Descirption"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    fullWidth
                                    defaultValue={rowData.description}
                                    onChange={event => {
                                        console.log(event.target.value)
                                        const index = rowData.tableData.id;
                                        const newData = rowData;
                                        newData.description = event.target.value;
                                        const updateData = [...data];
                                        updateData[index] = newData;
                                        setData([...updateData]);
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="contact"
                                    label="Contact Information"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    fullWidth
                                    defaultValue={rowData.contactinformation}
                                    onChange={event => {
                                        console.log(event.target.value)
                                        const index = rowData.tableData.id;
                                        const newData = rowData;
                                        newData.contactinformation = event.target.value;
                                        const updateData = [...data];
                                        updateData[index] = newData;
                                        setData([...updateData]);
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="interest"
                                    label="Interest"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    fullWidth
                                    defaultValue={rowData.interest}
                                    onChange={event => {
                                        console.log(event.target.value)
                                        const index = rowData.tableData.id;
                                        const newData = rowData;
                                        newData.interest = event.target.value;
                                        const updateData = [...data];
                                        updateData[index] = newData;
                                        setData([...updateData]);
                                    }}
                                />
                            </div>
                            {/*<div className={classes.buttons}>*/}
                            {/*    <Button variant="outlined">Cancel</Button>*/}
                            {/*    <Button*/}
                            {/*        variant="contained"*/}
                            {/*        color="primary"*/}
                            {/*        startIcon={<SaveIcon />}*/}
                            {/*    >*/}
                            {/*        Save*/}
                            {/*    </Button>*/}
                            {/*</div>*/}
                        </form>

                    </React.Fragment>
                )
            }}
        />
    );
}