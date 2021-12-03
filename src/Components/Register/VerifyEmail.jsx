import React, { useEffect, useState } from "react";
import HOC from "../../Common/HOC.jsx";
//css file
import "./Register.css";

//login,register,resetpassword uses material ui text-feild
import { Button, Card, TextField } from "@material-ui/core";
import { withRouter } from "react-router";

//for backend call
import axios from "axios";
import { getBaseUrl } from "../../utils";
import { blankValidator, emailValidator, showNotificationMsz } from "../../utils/Validation";
import Loder from "../Loder/Loder.jsx"

const VerifyEmail = (props) => {

    const [email, setemail] = useState("");
    const [isloading, setisloading] = useState(false)

    //errors
    const [emailError, setemailError] = useState(false)
    const [emailMatchError, setemailMatchError] = useState(false)

    const EmailVerify = () => {
        try {
            if (!blankValidator(email)) {
                setemailError(true)
                return;
            }
            if (!emailValidator(email)) {
                setemailMatchError(true)
                return;
            }
            setisloading(true)
            let url = getBaseUrl() + "email-send";
            let temp = {
                email,
            };
            axios
                .post(url, temp)
                .then(
                    (res) => {
                        setisloading(false)
                        showNotificationMsz(res.data.msg, "success")
                        props.history.push("/forgot-password", { email: email })
                        setemail("");

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
                    <p className="page_heading mt-3">Verify Your Email</p>
                    <div className="main_padding_top_bottom">

                        <div>
                            <TextField
                                placeholder="Email"
                                id="outlined-basic"
                                variant="outlined"
                                autoComplete="off"
                                value={email}
                                onChange={(e) => {
                                    setemailError(false);
                                    setemailMatchError(false);
                                    setemail(e.target.value)
                                }}
                            />
                            {emailError && (
                                <span className="text-danger float-left mt-1 mb-1">Enter the Email Address</span>
                            )}
                            {emailMatchError && (
                                <span className="text-danger float-left mt-1 mb-1">Enter the Correct Email Address</span>
                            )}
                        </div>


                        <div className="inputfiledformatting mt-3">
                            <Button
                                variant="contained"
                                className="Home_page_button login_register_width"
                                onClick={EmailVerify}
                            >
                                Verify
                            </Button>

                        </div>
                        <div className="mt-3 mb-3"><span className="Login_in" onClick={() => props.history.goBack()}>Cancel</span></div>

                    </div>
                </Card>

            </div>
            <Loder loading={isloading} />
        </>
    );
};

export default withRouter(HOC(VerifyEmail));
