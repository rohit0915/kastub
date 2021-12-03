import React, { useState, useEffect } from 'react';

//css file
import "./UserCommunication.css";

//material ui data table
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

import { Grid, Checkbox } from '@material-ui/core';
import { withRouter } from "react-router";


function ReadMessage(props) {
    const classes = useStyles();
    const [isUpdated, setisUpdated] = useState(false);
    const [messagedetail, setmessagedetail] = useState(false)
    const [allMessagedata, setallMessagedata] = useState([
        { id: 1, subject: "Rema Thaoat", content: "Lorem ipsum is a placeholder text commonly used", date: "09/10/2021", ischecked: false, status: "active" },
        { id: 2, subject: "Lorem ipsum", content: "Lorem ipsum is a placeholder text commonly used", date: "09/10/2021", ischecked: false, status: "active" },
        { id: 3, subject: "Lorem ipsum", content: "Lorem ipsum is a placeholder text commonly used", date: "09/10/2021", ischecked: false, status: "active" },
        { id: 4, subject: "Jhon ratli", content: "Lorem ipsum is a placeholder text commonly used", date: "09/10/2021", ischecked: false, status: "active" },
        { id: 5, subject: "Lorem ipsum", content: "Lorem ipsum is a placeholder text commonly used", date: "09/10/2021", ischecked: false, status: "active" },
        { id: 6, subject: "Lorem ipsum", content: "Lorem ipsum is a placeholder text commonly used", date: "09/10/2021", ischecked: false, status: "active" },
        { id: 7, subject: "Lorem ipsum", content: "Lorem ipsum is a placeholder text commonly used", date: "09/10/2021", ischecked: false, status: "active" },
        { id: 8, subject: "Lorem ipsum", content: "Lorem ipsum is a placeholder text commonly used", date: "09/10/2021", ischecked: false, status: "active" },
        { id: 9, subject: "Lorem ipsum", content: "Lorem ipsum is a placeholder text commonly used", date: "09/10/2021", ischecked: false, status: "active" },
        { id: 10, subject: "Lorem ipsum", content: "Lorem ipsum is a placeholder text commonly used", date: "09/10/2021", ischecked: false, status: "active" },
        { id: 11, subject: "Lorem ipsum", content: "Lorem ipsum is a placeholder text commonly used", date: "09/10/2021", ischecked: false, status: "active" },
        { id: 12, subject: "Lorem ipsum", content: "Lorem ipsum is a placeholder text commonly used", date: "09/10/2021", ischecked: false, status: "active" },
    ]);

    useEffect(() => {
        setallMessagedata(
            allMessagedata.filter((item) => {
                return item.status === "active";
            })
        );
    }, [isUpdated])

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

    const [subject, setsubject] = useState("");
    const filterData = allMessagedata.filter((event) => {
        return (
            event.subject.toLowerCase().indexOf(subject.toLowerCase()) !== -1
        );
    });

    const checkBoxHandler = (id) => {
        let temp = [];
        allMessagedata.forEach((item) => {
            if (item.id === id) {
                item.ischecked = !item.ischecked;
            }
            temp.push(item);
        });
        setallMessagedata(temp);
    };

    const DeleteMessage = () => {
        allMessagedata.forEach((data, index) => {
            if (data.ischecked) {
                allMessagedata.splice(index, 1);
                setallMessagedata([...allMessagedata]);
            }
            setallMessagedata(allMessagedata)
            setisUpdated(!isUpdated)
        });
    }



    const [subjectdata, setsubjectdata] = useState("")
    const wholeMessagedata = (data) => {
        setsubjectdata(data.subject)
        setmessagedetail(!messagedetail)
    }

    return (
        <>

            <Grid className="Component_main_grid p-2 mt-3">
                <Grid item md={6}>
                    <div className="d-flex">
                        <span className="p-2"><i class="fa fa-search"></i></span>
                        <span><input type="text"
                            class="form-control"
                            placeholder="Search in the Mail"
                            value={subject}
                            onChange={(e) => {
                                setsubject(e.target.value)
                            }}
                        /></span>
                    </div></Grid>
                <Grid item md={6}></Grid>

            </Grid>
            {!messagedetail ? (
                <div className="table_foramtitng mt-1 mb-2">

                    <Grid className="Component_main_grid p-2 mt-3">
                        <Grid item md={2}>
                            <div className="font_size_meaasges mt-1"><i class="fa fa-star mr-1"></i>Mark as important</div></Grid>
                        <Grid item md={2}><div className="font_size_meaasges mt-1"><i class="fa fa-envelope mr-1"></i>Mark as read</div></Grid>
                        <Grid item md={2}><div className="font_size_meaasges mt-1"><i class="fa fa-envelope mr-1"></i>Mark as unread</div></Grid>
                        <Grid item md={2}><div className="font_size_meaasges mt-1" onClick={DeleteMessage}><i class="fa fa-trash mr-1"></i>Delete</div></Grid>
                        <Grid item md={4}></Grid>
                    </Grid>
                    <TableContainer component={Paper}>
                        <Table
                            className={classes.table}
                            aria-label="customized table"
                        >

                            <TableBody>
                                {(rowsPerPage > 0
                                    ? filterData.slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage +
                                        rowsPerPage
                                    )
                                    : filterData
                                ).map((row) => (
                                    <StyledTableRow className="hover_cursor">
                                        <StyledTableCell
                                            align="left"
                                        >
                                            <Checkbox
                                                checked={row.ischecked}
                                                onChange={() => checkBoxHandler(row.id)}
                                            /><span onClick={() => wholeMessagedata(row)}><i class="fa fa-star mr-2"></i> {row.subject}</span>
                                        </StyledTableCell>
                                        <StyledTableCell
                                            align="left"
                                            onClick={() => wholeMessagedata(row)}
                                        >
                                            {row.content}
                                        </StyledTableCell>

                                        <StyledTableCell
                                            align="left"
                                            onClick={() => wholeMessagedata(row)}
                                        >
                                            {row.date}
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
            ) : (
                <div>
                    {/*Message Detail View */}
                    <Grid className="Component_main_grid p-2 mt-3">
                        <Grid item md={2}><div className="mt-1"><span className="font_size_meaasges" onClick={() => setmessagedetail(!messagedetail)}><i class="fa fa-arrow-left mr-1"></i>back to Inbox</span></div></Grid>
                        <Grid item md={2}><div className="mt-1"><span className="font_size_meaasges"><i class="fa fa-star mr-1"></i>Mark as important</span></div></Grid>
                        <Grid item md={2}><div className="mt-1"><span className="font_size_meaasges"><i class="fa fa-trash mr-1"></i>Delete</span></div></Grid>
                        <Grid item md={6}></Grid>
                    </Grid>

                    <div className="p-3 mt-2 mb-2 top_botton_boder">
                        <Grid className="Component_main_grid">
                            <Grid item md={2}><span className="mailcontent_font_size">{subjectdata}</span></Grid>
                            <Grid item md={8}><span className="mailcontent_font_size">Lorem Ipsum is a fish text often used in print and web design.</span></Grid>
                            <Grid item md={2}>
                                <div className="mailcontent_font_size d-flex">
                                    <span>01:40pm</span>
                                    <span className="ml-2">09/10/2021</span>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className="p-3 mt-2 mb-2">
                        <div><strong>Lorem Ipsum is a fish text often used in print and web design.</strong></div>
                        <div>
                            <p className="mt-3">Lorem Ipsum is a fish text often used in print and web design. Lorem Ipsum
                                has been the standard "fish" for Latin texts since the early 16th century. At the
                                time, an unnamed printer created a large collection of font sizes and shapes
                                using Lorem Ipsum to print samples.</p>
                            <p className="mt-3">Lorem Ipsum is a fish text often used in print and web design. Lorem Ipsum
                                has been the standard "fish" for Latin texts since the early 16th century. At the
                                time, an unnamed printer created a large collection of font sizes and shapes
                                using Lorem Ipsum to print samples.</p>
                        </div>
                    </div>

                </div>
            )}
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
export default withRouter(ReadMessage)
