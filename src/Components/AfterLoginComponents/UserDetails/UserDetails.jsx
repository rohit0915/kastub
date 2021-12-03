import React, { useEffect, useState } from 'react'
import HOC1 from "../../../Common/HOC1";
import { Grid, Card, Button } from '@material-ui/core';
import "./UserDetails.css";
import Expand from "react-expand-animated";

function UserDetails(props) {

    //local state
    const [addMangeopen, setaddMangeopen] = useState(false);

    const recentsMail = [{ name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    ]

    const properties = [{ address: "115 Northampton Rd. 1", amount: "$270" },
    { address: "115 Northampton Rd. 1", amount: "$370" },
    { address: "115 Northampton Rd. 1", amount: "$450" },
    { address: "115 Northampton Rd. 1", amount: "$320" },
    { address: "115 Northampton Rd. 1", amount: "$420" },
    ]

    const pendingdue = [{ data: "LOREM IPSUM", amount: "$270", status: "paid" },
    { data: "LOREM IPSUM", amount: "$270", status: "due" },
    { data: "LOREM IPSUM", amount: "$270", status: "paid" },
    { data: "LOREM IPSUM", amount: "$270", status: "due" },
    { data: "LOREM IPSUM", amount: "$270", status: "paid" },
    { data: "LOREM IPSUM", amount: "$270", status: "due" },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_padding">
                <div><strong>Hii, Jhons Smith</strong></div>
                <div className="d-flex mt-2">
                    <span className="hover_cursor" onClick={() => props.history.push("/user-data")}><strong>Your Properties</strong></span>

                </div>

                <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                    <Grid item md={8}>
                        <div >
                            <div className="page_heading">
                                Properties Overview
                            </div>

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
                                                        Address
                                                    </div>
                                                    <div className=" mt-1">
                                                        <input
                                                            type="text"
                                                            className="form-control "
                                                            placeholder="Enter Address"
                                                            autoComplete="off"
                                                        />
                                                    </div>
                                                    <div className="text_filed_heading">
                                                        Balance
                                                    </div>
                                                    <div className=" mt-1">
                                                        <input
                                                            type="text"
                                                            className="form-control "
                                                            placeholder="Enter Balanace"
                                                            autoComplete="off"
                                                        />
                                                    </div>

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
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="table_header">Address</th>
                                    <th className="table_header">Outstanding Balances</th>
                                </tr>
                            </thead>
                            <tbody>
                                {properties.map((item, index) => (
                                    <tr>
                                        <td><strong>{item.address}</strong></td>
                                        <td className="amount_color"><strong>{item.amount}</strong></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="page_heading mt-5">Pending Dues</div>
                        <table className="table mt-2">
                            <thead>
                                <tr>
                                    <th className="table_header1"></th>
                                    <th className="table_header2"></th>
                                    <th className="table_header2"></th>
                                </tr>
                            </thead>
                            <tbody className="mt-2">
                                {pendingdue.map((item, index) => (
                                    <tr className={item.status === "paid" ? "Green_color" : "red_color"}>
                                        <td><strong>{item.data}</strong></td>
                                        <td><strong>{item.amount}</strong></td>
                                        <td><strong>{item.amount}</strong></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Grid>
                    <Grid item md={1}></Grid>
                    <Grid item md={3}>
                        <div className="page_heading">Recents Mails</div>
                        <div className="mt-2 mb-2"><span className="hover_cursor" onClick={() => props.history.push("/compose-email")}><i className="fa fa-arrow-right mr-1" />Send Email</span></div>
                        {recentsMail.map((item, index) => (
                            <div>
                                <div className="mt-3 d-flex justify-content-between">
                                    <span>{item.name}</span>
                                    <span><strong>Oct, 07</strong></span>
                                </div>
                                <div><strong>Lorem Ipsum is a fish text</strong></div>
                                <div>{item.content.length > 25 ? item.content.substring(0, 25) + "..." : item.content.substring(0, 25)}</div>
                            </div>
                        ))}
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default HOC1(UserDetails);
