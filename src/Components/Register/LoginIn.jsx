import React, { useState, useEffect } from "react";
import HOC from "../../Common/HOC.jsx";
//css file
import "./Register.css";

//login,register,resetpassword uses material ui text-feild
import { Button, Card, TextField, IconButton, OutlinedInput, InputAdornment, FormControl } from "@material-ui/core";
import { withRouter } from "react-router";

//icons to show & hide th password
import { Visibility, VisibilityOff } from "@material-ui/icons";

//for backend call
import axios from "axios";
import { getBaseUrl } from "../../utils";
import { blankValidator, emailValidator, showNotificationMsz } from "../../utils/Validation";
import Loder from "../Loder/Loder.jsx"

const LoginIn = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    //---------------------local state ----------------------
    const [showPassword, setshowPassword] = useState(false);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [isloading, setisloading] = useState(false)


    //errors
    const [emailError, setemailError] = useState(false);
    const [emailMatchError, setemailMatchError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);

    const LoginUser = () => {
        if (!blankValidator(email)) {
            setemailError(true)
            return;
        }
        if (!emailValidator(email)) {
            setemailMatchError(true)
            return;
        }
        if (!blankValidator(password)) {
            setpasswordError(true)
            return;
        }
        setisloading(true)
        let url = getBaseUrl() + "login";
        let temp = {
            email,
            password
        };
        axios
            .post(url, temp)
            .then(
                (res) => {
                    setisloading(false)
                    if (res.data.data.successCode === 0) {
                        showNotificationMsz(res.data.msg, "success")
                        console.log("id:::", res.data.data._id)
                        localStorage.setItem("UserId", res.data.data._id);
                        props.history.push("/user-details")

                    } else {
                        showNotificationMsz(res.data.msg, "danger")
                        return
                    }
                },

                (error) => {
                    setisloading(false)
                    showNotificationMsz(error, "danger")
                    console.log("data response error:::", error)
                }
            )
            .catch((e) => {
                setisloading(false)
                showNotificationMsz(e, "danger")
                console.log("data response error:::", e)
            });
    }

    return (
        <>
            <div className="Register_Main_div content_padding">
                <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
                    <p className="page_heading mt-3">Login</p>
                    <div className="main_padding_top_bottom">

                        <div>
                            <TextField
                                placeholder="Email"
                                id="outlined-basic"
                                variant="outlined"
                                autoComplete="off"
                                value={email}
                                onChange={(e) => {
                                    setemailError(false)
                                    setemailMatchError(false)
                                    setemail(e.target.value)
                                }}
                            />
                            {emailError &&
                                <span className="text-danger float-left">Enter The Email Address</span>
                            }
                            {emailMatchError &&
                                <span className="text-danger float-left">Enter The Correct Email Address</span>
                            }
                        </div>

                        <div className="mt-2">
                            <FormControl className="MuiFormControl-fullWidth" variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => {
                                        setpasswordError(false)
                                        setpassword(e.target.value)

                                    }}
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="off"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setshowPassword(!showPassword)}
                                                onMouseDown={(event) => event.preventDefault()}
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            {passwordError &&
                                <span className="text-danger float-left">Enter The password</span>
                            }
                        </div>

                        <div className="inputfiledformatting mt-3">
                            <Button
                                variant="contained"
                                className="Home_page_button login_register_width"
                                onClick={LoginUser}

                            >
                                Log in
                            </Button>
                        </div>

                    </div>
                </Card>

                <Card className="pt-2 pb-2 Card_shadow mt-2">
                    <div>I don't have an account, <span className="Login_in" onClick={() => props.history.push("/register")}>Register</span></div>
                    <span className="Login_in" onClick={() => props.history.push("/verify-email")}>forgot Password?</span>
                </Card>
            </div>

            <Loder loading={isloading} />
        </>
    );
};

export default withRouter(HOC(LoginIn));
