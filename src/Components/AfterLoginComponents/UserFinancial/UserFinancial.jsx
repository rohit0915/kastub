import React, { useState, useEffect } from 'react';

//css file
import "./UserFinancial.css";

//material ui data table
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import {
    Button,
    Grid,
    Card
} from '@material-ui/core';
import Expand from "react-expand-animated";

//react csv downloader
import { CSVLink } from "react-csv";

function UserFinancial() {
    const classes = useStyles();
    const Financialdata = [{ property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "24-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    ]

    // for pagination hadler 
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);
    const [addMangeopen, setaddMangeopen] = useState(false)

    const handleChangePage = (event, newPage) => {
        window.scrollTo(0, 0);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const [propertyname, setpropertyname] = useState("");
    const filterData = Financialdata.filter((event) => {
        return (
            event.property.toLowerCase().indexOf(propertyname.toLowerCase()) !== -1
        );
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>

            <Grid className="Component_main_grid p-2 ">
                <Grid item md={4}>
                    <div className="d-flex">
                        <span className="p-2"><i class="fa fa-search"></i></span>
                        <span><input type="text"
                            class="form-control"
                            placeholder="Search by Property Name"
                            value={propertyname}
                            onChange={(e) => {
                                setpropertyname(e.target.value)
                            }}
                        /></span>
                    </div></Grid>
                <Grid item md={6}></Grid>
                <Grid item md={2}>
                    <div className="mt-2 mb-2 text-right">
                        <CSVLink
                            data={Financialdata}
                        >
                            <Button className="Home_page_button">Export to CSV</Button>
                        </CSVLink>
                    </div>
                </Grid>

            </Grid>

            <div>
                {!addMangeopen ? (
                    <div className="mt-2 mb-2"><span className="hover_cursor" onClick={() => setaddMangeopen(!addMangeopen)}><i className="fa fa-plus mr-1" />Add New Property</span></div>
                ) : (
                    <Expand open={addMangeopen}>
                        <Card className=" mb-2 Card_shadow">
                            <div className="card_admissiondetails_height">
                                <div className="textfiled_margin">
                                    <div className="card_content_instition">
                                        <div className="text-right">
                                            <span className="icon_color hover_cursor">
                                                <i className="fa fa-times cursor" onClick={() => setaddMangeopen(!addMangeopen)}></i>
                                            </span>
                                        </div>
                                        <div className="text_filed_heading">
                                            Property Name
                                        </div>
                                        <div className=" mt-1">
                                            <input
                                                type="text"
                                                className="form-control "
                                                placeholder="Enter Property Name"
                                                autoComplete="off"
                                            />
                                        </div>

                                        <div className="text_filed_heading">
                                            Lease To
                                        </div>
                                        <div className=" mt-1">
                                            <input
                                                type="text"
                                                className="form-control "
                                                placeholder="Enter Balanace"
                                                autoComplete="off"
                                            />
                                        </div>
                                        <Grid className="Component_main_grid p-2 ">
                                            <Grid item md={6}>
                                                <div className="text_filed_heading">
                                                    Lease Start Date
                                                </div>
                                                <div className="input_margin_right mt-1">
                                                    <input
                                                        type="date"
                                                        className="form-control "
                                                        autoComplete="off"
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item md={6}>
                                                <div className="text_filed_heading">
                                                    Lease End Date
                                                </div>
                                                <div className=" mt-1">
                                                    <input
                                                        type="date"
                                                        className="form-control "
                                                        autoComplete="off"
                                                    />
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid className="Component_main_grid p-2 ">
                                            <Grid item md={6}>
                                                <div className="text_filed_heading">
                                                    Past collection
                                                </div>
                                                <div className="input_margin_right mt-1">
                                                    <input
                                                        type="text"
                                                        className="form-control "
                                                        autoComplete="off"
                                                        placeholder="Past collection"
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item md={6}>
                                                <div className="text_filed_heading">
                                                    Amount Due
                                                </div>
                                                <div className=" mt-1">
                                                    <input
                                                        type="text"
                                                        className="form-control "
                                                        autoComplete="off"
                                                        placeholder="Amount Due"
                                                    />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <div className="mt-2 pb-2 ">
                                        <Button
                                            variant="contained"
                                            className="button_formatting"

                                        >
                                            Create
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Expand>
                )}
            </div>
            <div className="table_foramtitng mt-1 mb-2">

                <TableContainer component={Paper}>
                    <Table
                        className={classes.table}
                        aria-label="customized table"
                        id="table_outside_border"
                    >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell
                                    align="left"
                                    className="table_header"
                                >
                                    Property Name
                                </StyledTableCell>
                                <StyledTableCell
                                    align="left"
                                    className="table_header"
                                >
                                    Lease To
                                </StyledTableCell>

                                <StyledTableCell
                                    align="center"
                                    className="table_header"
                                >
                                    Lease Duration
                                </StyledTableCell>

                                <StyledTableCell
                                    align="left"
                                    className="table_header"
                                >
                                    Past collections
                                </StyledTableCell>

                                <StyledTableCell
                                    align="left"
                                    className="table_header"
                                >
                                    Amount Due
                                </StyledTableCell>

                                <StyledTableCell
                                    align="left"
                                    className="table_header"
                                >
                                    Labels
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? filterData.slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage +
                                    rowsPerPage
                                )
                                : filterData
                            ).map((row) => (
                                <StyledTableRow>
                                    <StyledTableCell
                                        align="left"
                                    >
                                        {row.property}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="left"
                                    >
                                        {row.leaseto}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="center"
                                    >
                                        {row.laseduration}
                                        <div className="text-center">
                                            <span className="p-1 mt-1 lease_duration_color">88 days</span>
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="left"
                                    >
                                        {row.pastcollection}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="left"
                                    >
                                        {row.amountdue}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="left"
                                    >
                                        {row.label}
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        true
                        rowsPerPageOptions={false}
                        component="div"
                        count={filterData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={
                            handleChangeRowsPerPage
                        }
                    />
                </TableContainer>
            </div>

        </>
    )
}
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});
export default UserFinancial
