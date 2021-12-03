import React from "react";

import {
  Button,
  Card,
  TextField,
  IconButton,
  OutlinedInput,
  InputAdornment,
  FormControl,
  Grid,
} from "@material-ui/core";

const AdminLogin = (props) => {
  return (
    <div>
      <div className="content_padding">
        <Grid className="Component_main_grid p-2 ">
          <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
            <p className="page_heading mt-3 ml-4">
              Please Enter your Login Details
            </p>
            <div className="main_padding_top_bottom">
              <div>
                <TextField
                  placeholder="User"
                  id="outlined-basic"
                  variant="outlined"
                  autoComplete="off"
                />
              </div>

              <div className="mt-2">
                <FormControl
                  className="MuiFormControl-fullWidth"
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-password"
                    placeholder="Password"
                    autoComplete="off"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility"></IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>

              <div className="inputfiledformatting mt-3">
                <Button
                  variant="contained"
                  className="Home_page_button login_register_width"
                  onClick={() => props.history.push("/client")}
                >
                  Log in
                </Button>
              </div>
            </div>
          </Card>
        </Grid>
      </div>
    </div>
  );
};

export default AdminLogin;
