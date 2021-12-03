import React, { useEffect, useState } from 'react'

//HOC contains header & footer
import HOC from "../../Common/HOC.jsx";
import { Grid, Button, Card } from '@material-ui/core';

//Css file
import "./ContactUs.css";

//for backend call
import axios from "axios";
import { getBaseUrl } from "../../utils";
import { blankValidator, emailValidator, showNotificationMsz } from "../../utils/Validation";
import Loder from "../Loder/Loder.jsx"

function ContactUs() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    const [isloading, setisloading] = useState(false)

    //error
    const [nameError, setnameError] = useState(false);
    const [emailError, setemailError] = useState(false);
    const [emailMatchError, setemailMatchError] = useState(false);
    const [messageError, setmessageError] = useState(false);

    const ContactHandle = () => {
        try {
            if (!blankValidator(name)) {
                setnameError(true);
                return;
            }
            if (!blankValidator(email)) {
                setemailError(true);
                return;
            }
            if (!emailValidator(email)) {
                setemailMatchError(true);
                return
            }
            if (!blankValidator(message)) {
                setmessageError(true);
                return;
            }
            setisloading(true)
            let url = getBaseUrl() + "addContact";
            let temp = {
                name,
                email,
                message
            };
            axios
                .post(url, temp)
                .then(
                    (res) => {
                        setisloading(false)
                        showNotificationMsz(res.data.msg, "success")
                        setname("");
                        setemail("");
                        setmessage("");
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
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_padding">
                <div className="margin_content_both_side">
                    <Grid className="Component_main_grid mt-2 mb-2 p-3 ">
                        <Grid item md={6}>
                            <div className="page_heading mt-2">Contact us</div>
                            <div className="home_paragraph_width">We value each customer and are We are
                                proud that you stay with us.
                            </div>
                            <div className="mt-4"><span className="Footer_heading_Links mt-1"><i class="fa fa-phone"></i></span><span className="ml-2">+ 1 555 555 555</span></div>
                            <div><span className="Footer_heading_Links mt-1"><i class="fa fa-envelope"></i></span><span className="ml-2">info@gmail.com</span></div>
                            <div><span className="Footer_heading_Links mt-1"><i class="fa fa-instagram"></i></span><span className="ml-2">Instagram.com</span></div>
                            <div><span className="Footer_heading_Links mt-1"><i class="fa fa-facebook"></i></span><span className="ml-2">facebook.com</span></div>
                        </Grid>
                        <Grid item md={6}>
                            <div className="page_heading mt-2">Write to us</div>
                            <div className="home_paragraph_width">We are always happy to answer you.</div>
                            <div className="mt-4">
                                <Card className="p-2 Card_shadow">
                                    <div>
                                        <div className="input_heading">Name</div>
                                        <input
                                            type="text"
                                            class={`form-control ${nameError && "invalid"}`}
                                            placeholder="Enter Name"
                                            value={name}
                                            onChange={(e) => {
                                                setnameError(false)
                                                setname(e.target.value)
                                            }}
                                        />
                                        {nameError && (
                                            <span className="text-danger">Enter the User Name</span>
                                        )}
                                    </div>

                                    <div className="mt-2">
                                        <div className="input_heading">E-mail</div>
                                        <input
                                            type="email"
                                            class={`form-control ${(emailError || emailMatchError) && "invalid"}`}
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e) => {
                                                setemailError(false)
                                                setemailMatchError(false)
                                                setemail(e.target.value)
                                            }}
                                        />
                                        {emailError && (
                                            <span className="text-danger">Enter the Email Address</span>
                                        )}
                                        {emailMatchError && (
                                            <span className="text-danger">Enter the Correct Email Address</span>
                                        )}
                                    </div>

                                    <div className="mt-2">
                                        <div className="input_heading">Message</div>
                                        <textarea
                                            class={`form-control ${messageError && "invalid"}`}
                                            rows="3"
                                            placeholder="Enter the Message"
                                            value={message}
                                            onChange={(e) => {
                                                setmessageError(false)
                                                setmessage(e.target.value)
                                            }}
                                        ></textarea>
                                        {messageError && (
                                            <span className="text-danger">Enter the Message</span>
                                        )}
                                    </div>

                                    <div className="mt-4 mb-3"><Button className="Home_page_button support_buton_width" onClick={ContactHandle}>Send</Button></div>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Loder loading={isloading} />
        </>
    )
}

export default HOC(ContactUs);
