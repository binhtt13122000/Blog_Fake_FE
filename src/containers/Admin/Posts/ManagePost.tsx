import React from "react";

import MaterialTable from "material-table";

import DashBoardMain from "../../../components/DashBoardMain";
import { Typography } from "@material-ui/core";

import { useStyles } from "../style/ManageStyles";

const ManagePost: React.FC = () => {
    const classes = useStyles();
    const [selectedRow, setSelectedRow] = React.useState<number | undefined>();

    return (
        <div className={classes.root}>
            <DashBoardMain />
            <div className={classes.table}>
                <MaterialTable
                    title={
                        <Typography variant="h5" className={classes.tableTitle}>
                            Posts Management
                        </Typography>
                    }
                    columns={[
                        { title: "Id", field: "id", filtering: false, align: "right" },
                        {
                            title: "First Name",
                            field: "firstName",
                            align: "left",
                            hideFilterIcon: true,
                            emptyValue: <div className={classes.tagEmpty}>Null</div>,
                            customFilterAndSearch: (term, rowData) => term == rowData.firstName,
                        },
                        {
                            title: "Last Name ",
                            field: "lastName",
                            align: "left",
                            hideFilterIcon: true,
                            emptyValue: <div className={classes.tagEmpty}>Null</div>,
                            customFilterAndSearch: (term, rowData) => term == rowData.lastName,
                        },
                        {
                            title: "Mobile ",
                            field: "mobile",
                            align: "left",
                            hideFilterIcon: true,
                            emptyValue: <div className={classes.tagEmpty}>Null</div>,
                            customFilterAndSearch: (term, rowData) => term == rowData.mobile,
                        },
                        {
                            title: "Email ",
                            field: "email",
                            align: "left",
                            hideFilterIcon: true,
                            emptyValue: <div className={classes.tagEmpty}>Null</div>,
                            customFilterAndSearch: (term, rowData) => term == rowData.email,
                        },
                        {
                            title: "Registered Date ",
                            field: "registeredat",
                            type: "date",
                            align: "left",
                            dateSetting: { locale: "en-GB" },
                            emptyValue: <div className={classes.tagEmpty}>Null</div>,
                            filtering: false,
                        },
                        {
                            title: "Updated Date ",
                            field: "updatedat",
                            type: "date",
                            align: "left",
                            dateSetting: { locale: "en-GB" },
                            emptyValue: <div className={classes.tagEmpty}>Null</div>,
                            filtering: false,
                        },
                        {
                            title: "Is Verify ",
                            field: "isverify",
                            align: "left",
                            filtering: false,
                            lookup: { false: "Not Verified", true: "Verified" },
                            render: function changeShowDataVerify(rowData) {
                                return (
                                    <div
                                        className={
                                            rowData.isverify ? classes.verified : classes.notVerify
                                        }
                                    >
                                        {rowData.isverify ? "Verified" : "Not Verify"}
                                    </div>
                                );
                            },
                        },
                        {
                            title: "Role ",
                            field: "role",
                            align: "left",
                            filtering: false,
                            render: function changeDataShowRole(rowData) {
                                return (
                                    <div
                                        className={
                                            rowData.role === "Admin"
                                                ? classes.tagAdmin
                                                : classes.tagUser
                                        }
                                    >
                                        {rowData.role}
                                    </div>
                                );
                            },
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
                            id: 1,
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
                            id: 4,
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
                            id: 9,
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
                            id: 6,
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

export default ManagePost;
