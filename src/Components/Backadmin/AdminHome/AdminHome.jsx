import React, { useState } from "react";
import {
  Button,
  Card,
  Grid,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import AdminLogin from "../AdminLogin/AdminLogin";
import AdminHOC from "../../../Common/AdminHOC";

const AdminHome = () => {
  var retrievedData = localStorage.getItem("dataarr");
  console.log("data recevuied::::", retrievedData);

  const [open, setOpen] = React.useState(false);
  const [editaddress, seteditaddress] = useState("");
  const [editbalance, seteditbalance] = useState("");
  const [index, setindex] = useState("");

  //addd data in table
  const [address, setaddress] = useState("");
  const [balance, setbalance] = useState("");

  const [updtes, setupdates] = useState([
    { address: "115 Northampton Rd. 1", balance: "$270" },
    { address: "115  Rd. 1", balance: "$150" },
    { address: "115 Northampton Rd. 1", balance: "$270" },
    { address: "115 Northampton Rd. 1", balance: "$270" },
    { address: "115 Northampton Rd. 1", balance: "$270" },
  ]);

  const handleClickOpen = (item, index) => {
    seteditaddress(item.address);
    seteditbalance(item.balance);
    setindex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="content_padding">
        <div className="main_div">
          <div className="container">
            <h3>Add Properties</h3>
            <Card>
              <div class="form-group">
                <label for="exampleInputEmail1">Address</label>
                <input
                  type="Update"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => {
                    setaddress(e.target.value);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Balance</label>
                <input
                  type="Message"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Balance"
                  value={balance}
                  onChange={(e) => {
                    setbalance(e.target.value);
                  }}
                />
              </div>
              <span className="feature_add_btn">
                <button
                  type="submit "
                  className="btn btn-primary "
                  onClick={() => {
                    updtes.push({
                      address: address,
                      balance: balance,
                    });
                    setupdates([...updtes]);
                  }}
                >
                  Submit
                </button>
              </span>
            </Card>

            <div className="mt-5">
              <Card>
                <Grid className="Component_main_grid ml-2 ">
                  <Grid item md={4}>
                    <h5>Address</h5>
                  </Grid>
                  <Grid item md={4}>
                    <h5>Outstanding Balances</h5>
                  </Grid>
                  <Grid item md={4}>
                    <h5>Action</h5>
                  </Grid>
                </Grid>
                <hr />
                {updtes.map((item, index) => (
                  <Grid className="Component_main_grid ml-2 ">
                    <Grid item md={4}>
                      {item.address}
                      <hr />
                    </Grid>
                    <Grid item md={4}>
                      {item.balance}
                      <hr />
                    </Grid>
                    <Grid item md={4}>
                      <span className="pr-3">
                        <i
                          class="fa fa-edit"
                          onClick={() => handleClickOpen(item, index)}
                        ></i>
                      </span>

                      <span>
                        <i
                          class="fa fa-trash"
                          onClick={() => {
                            updtes.splice(index, 1);
                            setupdates([...updtes]);
                          }}
                        ></i>
                      </span>
                      <hr />
                    </Grid>
                  </Grid>
                ))}
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        maxWidth="sm"
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <h3>Data Update</h3>
        </DialogTitle>
        <DialogContent>
          <div class="form-group">
            <label for="exampleInputEmail1">Address</label>
            <input
              type="Update"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Address"
              value={editaddress}
              onChange={(e) => seteditaddress(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Balance</label>
            <input
              type="Message"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Balance"
              value={editbalance}
              onChange={(e) => seteditbalance(e.target.value)}
            />
          </div>
          <span className="feature_add_btn">
            <button
              type="submit "
              className="btn btn-primary "
              onClick={() => {
                updtes[index].address = editaddress;
                updtes[index].balance = editbalance;
                setupdates([...updtes]);
                setOpen(false);
              }}
            >
              Update
            </button>
          </span>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminHOC(AdminHome);
