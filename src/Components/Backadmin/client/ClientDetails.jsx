import React, { useState } from "react";
import { Grid, Card } from "@material-ui/core";
import AdminHOC from "../../../Common/AdminHOC";
import { Button, Table } from "react-bootstrap";

//import css
import "./ClientDetail.css";

const ClientDetails = (props) => {
  const clientdetail = [
    {
      name: "Jhons Smith",
      email: "jhons@gmail.com",
      balance: "$300",
      path: "/first",
      property: "23-A Delhi",
    },
    {
      name: "Karan",
      email: "jhons@gmail.com",
      balance: "$100",
      path: "/first",
      property: "Noida",
    },
    {
      name: "Rahul",
      email: "jhons@gmail.com",
      balance: "$150",
      path: "/first",
      property: "13-C Delhi",
    },
    {
      name: "Jhons Smith",
      email: "jhons@gmail.com",
      balance: "$300",
      path: "/first",
      property: "23-A Delhi",
    },
  ];

  const [name, setname] = useState("");

  const filterData = clientdetail.filter((event) => {
    return event.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
  });

  return (
    <>
      <div className="content_padding">
        <div className="home_page1">
          <h3>Client Details</h3>
          <Grid className="Component_main_grid">
            <Grid item md={12}>
              <Card className="Card_shadow m-3">
                <Grid>
                  <Grid item md={3}>
                    <span className="">
                      <input
                        class="form-control mb-3 mt-3"
                        id="myInput"
                        type="text"
                        placeholder="Search.."
                        value={name}
                        onChange={(e) => {
                          setname(e.target.value);
                        }}
                      />
                    </span>
                  </Grid>
                </Grid>

                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Lease To</th>
                      <th>Property Name</th>
                      <th>E-mail</th>
                      <th>Amount Due</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterData.map((item, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td onClick={() => props.history.push(`${item.path}`)}>
                          {item.name}
                        </td>
                        <td>{item.property}</td>
                        <td>{item.email}</td>
                        <td>{item.balance}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default AdminHOC(ClientDetails);
