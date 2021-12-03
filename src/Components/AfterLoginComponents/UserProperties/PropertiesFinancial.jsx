import React from 'react';
//css file
import "./UserProperties.css";
//react csv downloader
import { CSVLink } from "react-csv";

import { Button } from '@material-ui/core';

function PropertiesFinancial() {

    const financialdataArr = [
        { heading: "Rent Income", am1: "$100.00", am2: "$100.00", am3: "$100.00", total: "$300.00" },
        { heading: "Total incorme", am1: "$100.00", am2: "$100.00", am3: "$100.00", total: "$300.00" },
        { heading: "Expenses", am1: "", am2: "", am3: "", total: "" },
        { heading: "Landscaping", am1: "$100.00", am2: "$100.00", am3: "$100.00", total: "$300.00" },
        { heading: "Repairs", am1: "$100.00", am2: "$100.00", am3: "$100.00", total: "$300.00" },
        { heading: "Supplies", am1: "$100.00", am2: "$100.00", am3: "$100.00", total: "$300.00" },
        { heading: "Utilities", am1: "$100.00", am2: "$100.00", am3: "$100.00", total: "$300.00" },
        { heading: "Total expenses", am1: "$100.00", am2: "$100.00", am3: "$100.00", total: "$300.00" },
        { heading: "Net opening Income", am1: "$100.00", am2: "$100.00", am3: "$100.00", total: "$300.00" },
        { heading: "Net Income", am1: "$100.00", am2: "$100.00", am3: "$100.00", total: "$300.00" },
    ]

    return (
        <>
            <div className="mt-2 mb-2 text-right">
                <CSVLink
                    data={financialdataArr}
                >
                    <Button className="Home_page_button">Export to CSV</Button>
                </CSVLink>
            </div>
            <div className="table_foramtitng mt-1 mb-2">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="table_header">Primary account(cash basis) Income</th>
                            <th className="table_header">April 2021</th>
                            <th className="table_header">May 2021</th>
                            <th className="table_header">June 1 to Date</th>
                            <th className="table_header">Total as of 6/20/2021</th>
                        </tr>
                    </thead>
                    <tbody>
                        {financialdataArr.map((item, index) => (
                            <tr>
                                <td><strong>{item.heading}</strong></td>
                                <td>{item.am1}</td>
                                <td>{item.am2}</td>
                                <td>{item.am3}</td>
                                <td>{item.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default PropertiesFinancial
