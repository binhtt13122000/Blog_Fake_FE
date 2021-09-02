import React from "react";

import MaterialTable from "material-table";

import DashBoardMain from "../../components/DashBoardMain";
import { createStyles, CssBaseline, makeStyles, Typography } from "@material-ui/core";

const heightNavBar = 60;
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: "flex",
        },
        table: {
            marginTop: heightNavBar,
            width: "100%",
            height: "100%",
        },
    })
);

const ManageUser: React.FC = () => {
    const classes = useStyles();
    const [selectedRow, setSelectedRow] = React.useState<number | undefined>();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <DashBoardMain />
            <div className={classes.table}>
                <MaterialTable
                    title={
                        <Typography
                            variant="h5"
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                padding: "12px 6px",
                            }}
                        >
                            Users Management
                        </Typography>
                    }
                    columns={[
                        { title: "Id", field: "id", filtering: false },
                        {
                            title: "First Name",
                            field: "firstName",
                            align: "center",
                            emptyValue: () => <em>Null</em>,
                            customFilterAndSearch: (term, rowData) => term == rowData.firstName,
                        },
                        {
                            title: "Last Name ",
                            field: "lastName",
                            align: "center",
                            emptyValue: () => <em>Null</em>,
                            customFilterAndSearch: (term, rowData) => term == rowData.lastName,
                        },
                        {
                            title: "Mobile ",
                            field: "mobile",
                            align: "center",
                            emptyValue: () => <em>Null</em>,
                            customFilterAndSearch: (term, rowData) => term == rowData.mobile,
                        },
                        {
                            title: "Email ",
                            field: "email",
                            align: "center",
                            emptyValue: () => <em>Null</em>,
                            customFilterAndSearch: (term, rowData) => term == rowData.email,
                        },
                        {
                            title: "Registered Date ",
                            field: "registeredat",
                            type: "date",
                            align: "center",
                            dateSetting: { locale: "en-GB" },
                            emptyValue: () => <em>Null</em>,
                            filtering: false,
                        },
                        {
                            title: "Updated Date ",
                            field: "updatedat",
                            type: "date",
                            align: "center",
                            dateSetting: { locale: "en-GB" },
                            emptyValue: () => <em>Null</em>,
                            filtering: false,
                        },
                        {
                            title: "Is Verify ",
                            field: "isverify",
                            align: "center",
                            filtering: false,
                            lookup: { false: "Not Verified", true: "Verified" },
                            render: (rowData) => (
                                <div
                                    style={{
                                        background: rowData.isverify ? "green" : "red",
                                        padding: "6px 4px",
                                        borderRadius: "6px",
                                        color: "white",
                                        textAlign: "center",
                                    }}
                                >
                                    {rowData.isverify ? "Verified" : "Not Verify"}
                                </div>
                            ),
                        },
                        {
                            title: "Role ",
                            field: "role",
                            align: "center",
                            filtering: false,
                            render: (rowData) => (
                                <div
                                    style={{
                                        color: rowData.role === "Admin" ? "#0000ffb5" : "#008000cc",
                                        textAlign: "center",
                                        fontWeight: 600,
                                    }}
                                >
                                    {rowData.role}
                                </div>
                            ),
                        },
                    ]}
                    data={[
                        {
                            id: 8,
                            firstName: "Danh",
                            lastName: "Pham",
                            mobile: "0902472118",
                            email: "Danhpvse141028@fpt.edu.vn",
                            intro: null,
                            roleid: 1,
                            registeredat: "2021-01-01T00:00:00",
                            registeredby: "Danhpvse141028@fpt.edu.vn",
                            updatedat: null,
                            updatedby: null,
                            lastlogin: null,
                            isverify: false,
                            role: "User",
                        },
                        {
                            id: 9,
                            firstname: "string",
                            lastname: "string",
                            mobile: "string",
                            email: "string",
                            intro: null,
                            roleid: 1,
                            registeredat: "0001-01-01T00:00:00",
                            registeredby: "string",
                            updatedat: null,
                            updatedby: null,
                            lastlogin: null,
                            isverify: false,
                            role: "User",
                        },
                        {
                            id: 2,
                            firstname: "Danh",
                            lastname: "Pham",
                            mobile: "0902472118",
                            email: "DanhPV1@gmail.com",
                            intro: null,
                            roleid: 2,
                            registeredat: "0001-01-01T00:00:00",
                            registeredby: "DanhPV1@gmail.com",
                            updatedat: null,
                            updatedby: null,
                            lastlogin: null,
                            isverify: true,
                            role: "Admin",
                        },
                        {
                            id: 8,
                            firstName: "Danh",
                            lastName: "Pham",
                            mobile: "0902472118",
                            email: "Danhpvse141028@fpt.edu.vn",
                            intro: null,
                            roleid: 1,
                            registeredat: "0001-01-01T00:00:00",
                            registeredby: "Danhpvse141028@fpt.edu.vn",
                            updatedat: null,
                            updatedby: null,
                            lastlogin: null,
                            isverify: false,
                            role: "Admin",
                        },
                        {
                            id: 8,
                            firstName: "Danh",
                            lastName: "Pham",
                            mobile: "0902472118",
                            email: "Danhpvse141028@fpt.edu.vn",
                            intro: null,
                            roleid: 1,
                            registeredat: "0001-01-01T00:00:00",
                            registeredby: "Danhpvse141028@fpt.edu.vn",
                            updatedat: null,
                            updatedby: null,
                            lastlogin: null,
                            isverify: false,
                            role: "User",
                        },
                        {
                            id: 8,
                            firstName: "Danh",
                            lastName: "Pham",
                            mobile: "0902472118",
                            email: "Danhpvse141028@fpt.edu.vn",
                            intro: null,
                            roleid: 1,
                            registeredat: "0001-01-01T00:00:00",
                            registeredby: "Danhpvse141028@fpt.edu.vn",
                            updatedat: null,
                            updatedby: null,
                            lastlogin: null,
                            isverify: false,
                            role: "User",
                        },
                        {
                            id: 8,
                            firstName: "Danh",
                            lastName: "Pham",
                            mobile: "0902472118",
                            email: "Danhpvse141028@fpt.edu.vn",
                            intro: null,
                            roleid: 1,
                            registeredat: "0001-01-01T00:00:00",
                            registeredby: "Danhpvse141028@fpt.edu.vn",
                            updatedat: null,
                            updatedby: null,
                            lastlogin: null,
                            isverify: false,
                            role: "Admin",
                        },
                    ]}
                    onRowClick={(evt, selectedRow) => setSelectedRow(selectedRow?.id)}
                    options={{
                        loadingType: "overlay",
                        actionsColumnIndex: -1,
                        pageSizeOptions: [5],
                        filtering: true,
                        rowStyle: (rowData) => ({
                            backgroundColor: selectedRow === rowData.id ? "#EEE" : "#FFF",
                        }),
                        columnsButton: true,
                        paginationType: "stepped",
                        draggable: false,
                        headerStyle: {
                            backgroundColor: "rgb(107 189 255)",
                            color: "#FFF",
                            fontWeight: 600,
                        },
                    }}
                    editable={{
                        onRowUpdate: () =>
                            new Promise(() => {
                                console.log(123);
                            }),
                        onRowAdd: () =>
                            new Promise(() => {
                                console.log(123);
                            }),
                        onRowDelete: () =>
                            new Promise(() => {
                                console.log(123);
                            }),
                    }}
                />
            </div>
        </div>
    );
};

export default ManageUser;
