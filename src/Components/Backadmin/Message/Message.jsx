import React, { useEffect, useState } from "react";

import {
  Card,
  Grid,
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import AdminLogin from "../AdminLogin/AdminLogin";
import AdminHOC from "../../../Common/AdminHOC";

//import dialogr box

const Message = () => {
  const [updtes, setupdtes] = useState([
    {
      update: "user@gmail.com",
      message: "tenetur doloribus",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur doloribus odit commodi, quae assumend",
    },
    {
      update: "user@gmail.com",
      message: "tenetur doloribus",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur doloribus odit commodi, quae assumend",
    },
    {
      update: "user@gmail.com",
      message: "tenetur doloribus",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur doloribus odit commodi, quae assumend",
    },
  ]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="content_padding">
        <div className="main_div">
          <div className="container">
            <h4 className="mb-2">Compose E-mail</h4>
            <Card className="Card_shadow">
              <form className="p-2">
                <div class="form-group">
                  <label for="exampleInputEmail1">E-mail Id</label>
                  <input
                    type="Update"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Address"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Subject</label>
                  <input
                    type="Message"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Subject"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">Text</label>
                  <textarea
                    rows="3"
                    type="Message"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Message"
                  />
                </div>

                <span className="feature_add_btn">
                  <button type="submit " className="btn btn-primary ">
                    Send
                  </button>
                </span>
              </form>
            </Card>

            <div className="mt-5">
              <Card>
                <Grid className="Component_main_grid ml-2 ">
                  <Grid item md={4}>
                    <h5>Mail Id</h5>
                  </Grid>
                  <Grid item md={4}>
                    <h5>Subject</h5>
                  </Grid>
                  <Grid item md={4}>
                    <h5>Action</h5>
                  </Grid>
                </Grid>
                <hr />
                {updtes.map((item, index) => (
                  <Grid className="Component_main_grid ml-2 ">
                    <Grid item md={4}>
                      {item.update}
                      <hr />
                    </Grid>
                    <Grid item md={4}>
                      {item.message}
                      <hr />
                    </Grid>
                    <Grid item md={4}>
                      <span className="pr-3">
                        <i class="fa fa-edit" onClick={handleClickOpen}></i>
                      </span>

                      <span>
                        <i
                          class="fa fa-trash"
                          onClick={() => {
                            updtes.splice(index, 1);
                            setupdtes([...updtes]);
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
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <div class="form-group">
            <label for="exampleInputEmail1">E-mail Id</label>
            <input
              type="Update"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Address"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Subject</label>
            <input
              type="Message"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Subject"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Text</label>
            <textarea
              rows="3"
              type="Message"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Message"
            />
          </div>

          <span className="feature_add_btn">
            <button type="submit " className="btn btn-primary ">
              Send
            </button>
          </span>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminHOC(Message);
