import React, { useState } from 'react';

//css file
import "./UserProperties.css";

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
import { Grid } from '@material-ui/core';

function PropertiesHistory() {
    const classes = useStyles();
    const historyData = [{ date: "08/10/2021", eventtype: "Rent Collection", eventdescription: "Rent of Property name <XYZ> was collected on DD/MM/YY" },
    { date: "08/10/2021", eventtype: "Expences Collection", eventdescription: "Rent of Property name <XYZ> was collected on DD/MM/YY" },
    { date: "08/10/2021", eventtype: "Tax Collection", eventdescription: "Rent of Property name <XYZ> was collected on DD/MM/YY" },
    { date: "08/10/2021", eventtype: "Rent Collection", eventdescription: "Rent of Property name <XYZ> was collected on DD/MM/YY" },
    { date: "08/10/2021", eventtype: "Rent Collection", eventdescription: "Rent of Property name <XYZ> was collected on DD/MM/YY" },
    { date: "08/10/2021", eventtype: "Rent Collection", eventdescription: "Rent of Property name <XYZ> was collected on DD/MM/YY" },
    { date: "08/10/2021", eventtype: "Rent Collection", eventdescription: "Rent of Property name <XYZ> was collected on DD/MM/YY" },
    { date: "08/10/2021", eventtype: "Rent Collection", eventdescription: "Rent of Property name <XYZ> was collected on DD/MM/YY" },
    { date: "08/10/2021", eventtype: "Rent Collection", eventdescription: "Rent of Property name <XYZ> was collected on DD/MM/YY" },
    { date: "08/10/2021", eventtype: "Rent Collection", eventdescription: "Rent of Property name <XYZ> was collected on DD/MM/YY" },
    { date: "08/10/2021", eventtype: "Rent Collection", eventdescription: "Rent of Property name <XYZ> was collected on DD/MM/YY" },
    { date: "08/10/2021", eventtype: "Rent Collection", eventdescription: "Rent of Property name <XYZ> was collected on DD/MM/YY" },
    { date: "08/10/2021", eventtype: "Rent Collection", eventdescription: "Rent of Property name <XYZ> was collected on DD/MM/YY" },
    { date: "08/10/2021", eventtype: "Rent Collection", eventdescription: "Rent of Property name <XYZ> was collected on DD/MM/YY" },
    { date: "08/10/2021", eventtype: "Rent Collection", eventdescription: "Rent of Property name <XYZ> was collected on DD/MM/YY" },
    ]

    // for pagination hadler 
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    const handleChangePage = (event, newPage) => {
        window.scrollTo(0, 0);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const [eventtype, seteventtype] = useState("");
    const filterData = historyData.filter((event) => {
        return (
            event.eventtype.toLowerCase().indexOf(eventtype.toLowerCase()) !== -1
        );
    });

    return (
        <>
            <div className="table_foramtitng mt-1 mb-2">
                <Grid className="Component_main_grid p-2 ">
                    <Grid item md={8}></Grid>
                    <Grid item md={4}>
                        <div className="d-flex">
                            <span className="p-2"><i class="fa fa-search"></i></span>
                            <span><input type="text"
                                class="form-control"
                                placeholder="Search by Event Type"
                                value={eventtype}
                                onChange={(e) => {
                                    seteventtype(e.target.value)
                                }}
                            /></span>
                        </div></Grid>
                </Grid>

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
                                    Date
                                </StyledTableCell>
                                <StyledTableCell
                                    align="left"
                                    className="table_header"
                                >
                                    Event Type
                                </StyledTableCell>

                                <StyledTableCell
                                    align="left"
                                    className="table_header"
                                >
                                    Event Description
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
                                        {row.date}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="left"
                                    >
                                        {row.eventtype}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="left"
                                    >
                                        {row.eventdescription}
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
export default PropertiesHistory
