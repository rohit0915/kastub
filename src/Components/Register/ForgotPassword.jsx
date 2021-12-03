import React, { useEffect, useState } from "react";
import HOC from "../../Common/HOC.jsx";
//css file
import "./Register.css";

//login,register,resetpassword uses material ui text-feild
import { Button, Card, TextField, IconButton, OutlinedInput, InputAdornment, FormControl } from "@material-ui/core";
import { withRouter } from "react-router";
import { Visibility, VisibilityOff } from "@material-ui/icons";

//for backend call
import axios from "axios";
import { getBaseUrl } from "../../utils";
import { blankValidator, showNotificationMsz } from "../../utils/Validation";
import Loder from "../Loder/Loder.jsx"

const ForgotPassword = (props) => {
    console.log("email::::", props)

    let email = props.location.state.email

    const [showPassword, setshowPassword] = useState(false);
    const [otp, setotp] = useState("")
    const [password, setpassword] = useState("")
    const [isloading, setisloading] = useState(false)

    //error
    const [otpError, setotpError] = useState(false)
    const [passwordError, setpasswordError] = useState(false)
    const [passwordlengthError, setpasswordlengthError] = useState(false)

    const ResetPassword = () => {


        try {
            if (!blankValidator(otp)) {
                setotpError(true)
                return
            }
            if (!blankValidator(password)) {
                setpasswordError(true)
                return
            }
            if (password.length !== 6) {
                setpasswordlengthError(true)
                return
            }
            setisloading(true)
            let url = getBaseUrl() + "change-password";
            let temp = {
                email,
                code: otp,
                password
            };
            axios
                .post(url, temp)
                .then(
                    (res) => {
                        setisloading(false)
                        showNotificationMsz(res.data.msg, "success")
                        props.history.push("/login")
                    },
                    (error) => {
                        setisloading(false)
                        showNotificationMsz(error, "danger")
                    }
                )
        } catch (error) {
            setisloading(false)
            showNotificationMsz(error, "danger")
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>

            <div className="Register_Main_div content_padding">
                <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
                    <p className="page_heading mt-3">Reset your Password</p>
                    <div className="main_padding_top_bottom">

                        <div>
                            <TextField
                                placeholder="Email"
                                id="outlined-basic"
                                variant="outlined"
                                autoComplete="off"
                                value={email}
                            />

                        </div>
                        <div className="mt-2">
                            <TextField
                                placeholder="Email OTP"
                                id="outlined-basic"
                                variant="outlined"
                                autoComplete="off"
                                value={otp}
                                onChange={(e) => {
                                    setotp(e.target.value)
                                }}
                            />
                            {otpError &&
                                <span className="text-danger float-left">Enter The Email OTP</span>
                            }
                        </div>

                        <div className="mt-2">
                            <FormControl className="MuiFormControl-fullWidth" variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => {
                                        setpasswordError(false);
                                        setpasswordlengthError(false);
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
                            {passwordError && (
                                <span className="text-danger float-left">Enter the Password</span>
                            )}
                            {passwordlengthError && (
                                <span className="text-danger float-left">Password length must be exactly 6 digits</span>
                            )}
                        </div>

                        <div className="inputfiledformatting mt-3">
                            <Button
                                variant="contained"
                                className="Home_page_button login_register_width"
                                onClick={ResetPassword}
                            >
                                Reset
                            </Button>

                        </div>


                    </div>
                </Card>

            </div>
            <Loder loading={isloading} />
        </>
    );
};

export default withRouter(HOC(ForgotPassword));
