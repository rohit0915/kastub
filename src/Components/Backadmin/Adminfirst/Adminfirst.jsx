import React from "react";
import AdminHOC from "../../../Common/AdminHOC";
import { Card, Grid } from "@material-ui/core";

//import css
import "./Adminfirst.css";

const Adminfirst = (props) => {
  return (
    <>
      <div className="content_padding">
        <div className="home_page">
          <Grid className="Component_main_grid">
            <Grid item md={4}>
              <Card className="Card_shadow m-3">
                <div className="box_home">
                  <h6
                    className="add_message pl-2 pt-4"
                    onClick={() => props.history.push("/adminHome")}
                  >
                    <span className="add_btn">+</span>Your Properties
                  </h6>
                </div>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className="Card_shadow m-3">
                <div className="box_home">
                  <h6
                    className="add_message pl-2 pt-4"
                    onClick={() => props.history.push("/message")}
                  >
                    <span className="add_btn">+</span> Send E-mail
                  </h6>
                </div>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className="Card_shadow m-3">
                <div className="box_home">
                  <h6 className="add_message pl-2 pt-4">
                    <span
                      className="add_btn"
                      onClick={() => props.history.push("/financials")}
                    >
                      +
                    </span>{" "}
                    Financials Details Add
                  </h6>
                </div>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default AdminHOC(Adminfirst);
