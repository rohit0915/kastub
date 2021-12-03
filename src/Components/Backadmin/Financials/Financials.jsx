import React from "react";
import AdminHOC from "../../../Common/AdminHOC";
import { Grid, Card } from "@material-ui/core";
import { Button, Table } from "react-bootstrap";

const Financials = () => {
  const Finacialdetai = [
    {
      propertyname: "23-A Delhi",
      name: "Jhon Doe",
      Duration: "23/04/2021 - 23/7/2021",
      amount: "230",
    },
    {
      propertyname: "103-A Noida",
      name: "Karan",
      Duration: "23/04/2021 - 23/7/2021",
      amount: "230",
    },
    {
      propertyname: "23-A Delhi",
      name: "Arjun",
      Duration: "23/04/2021 - 23/7/2021",
      amount: "230",
    },
  ];
  return (
    <>
      <div className="content_padding">
        <div className="home_page1">
          <h3>Financials Details Add</h3>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Lease To</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Name"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Amount Due</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Amount Due"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Property Name</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Property Name"
              />
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">Past collections</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">Start Date</label>

                <input type="date" class="form-control" id="inputAddress" />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">End Date</label>

                <input type="date" class="form-control" id="inputAddress" />
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Labels</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
            </div>

            <button type="submit" class="btn btn-primary">
              Send
            </button>
          </form>
          <Grid className="Component_main_grid">
            <Grid item md={12}>
              <Card className="Card_shadow m-3">
                {/* <Grid>
                  <Grid item md={3}>
                    <span className="">
                      <input
                        class="form-control mb-3 mt-3"
                        id="myInput"
                        type="text"
                        placeholder="Search.."
                      />
                    </span>
                  </Grid>
                </Grid> */}
                <div style={{ overflowX: "auto" }}>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Property Name</th>
                        <th>Lease To</th>
                        <th>Lease Duration</th>
                        <th>Past collections</th>
                        <th>Amount Due</th>
                        <th>Labels</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Finacialdetai.map((item, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.propertyname}</td>
                          <td>{item.name}</td>
                          <td>
                            {item.Duration} <br />
                            <span className="text-center pl-5">88 Day</span>
                          </td>
                          <td>50</td>
                          <td>230</td>
                          <td>23/05/2021</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default AdminHOC(Financials);
