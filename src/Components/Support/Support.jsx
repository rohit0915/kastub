import React, { useState, useEffect } from 'react'
import HOC from "../../Common/HOC.jsx";
import { withRouter } from 'react-router';
import { Button } from '@material-ui/core';

//css file
import "./Support.css";

//for backend call
import axios from "axios";
import { getBaseUrl } from "../../utils";
import { blankValidator, emailValidator, showNotificationMsz } from "../../utils/Validation";
import Loder from "../Loder/Loder.jsx"

function Support() {

    //local state
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");
    const [isloading, setisloading] = useState(false)

    //error
    const [nameError, setnameError] = useState(false);
    const [emailError, setemailError] = useState(false);
    const [emailMatchError, setemailMatchError] = useState(false);
    const [subjectError, setsubjectError] = useState(false);
    const [messageError, setmessageError] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const SupportHandle = () => {
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
            if (!blankValidator(subject)) {
                setsubjectError(true);
                return;
            }
            if (!blankValidator(message)) {
                setmessageError(true);
                return;
            }
            setisloading(true)
            let url = getBaseUrl() + "addSupport";
            let temp = {
                name,
                email,
                subject,
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
                        setsubject("");
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

    return (
        <>
            <div className="content_padding">
                <div className="mt-3 mb-2 text-center page_heading">Write to us</div>
                <div className="mt-2 mb-2 text-center support_para">We are always happy to answer you.</div>
                <div className="support_input_feild_margin">
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
                            }
                            }
                        />
                        {nameError && (
                            <span className="text-danger">Enter the User Name</span>
                        )}
                    </div>

                    <div className="mt-2">
                        <div className="input_heading">E-mail</div>
                        <input type="email" class={`form-control ${(emailError || emailMatchError) && "invalid"}`} placeholder="Enter email"
                            value={email}
                            onChange={(e) => {
                                setemailError(false)
                                setemailMatchError(false)
                                setemail(e.target.value)
                            }
                            }
                        />
                        {emailError && (
                            <span className="text-danger">Enter the Email Address</span>
                        )}
                        {emailMatchError && (
                            <span className="text-danger">Enter the Correct Email Address</span>
                        )}
                    </div>

                    <div className="mt-2">
                        <div className="input_heading">Subject</div>
                        <input type="email" class={`form-control ${subjectError && "invalid"}`} placeholder="Enter Subject"
                            value={subject}
                            onChange={(e) => {
                                setsubjectError(false)
                                setsubject(e.target.value)
                            }
                            } />
                        {subjectError && (
                            <span className="text-danger">Enter the Subject</span>
                        )}
                    </div>

                    <div className="mt-2">
                        <div className="input_heading">Message</div>
                        <textarea class={`form-control ${messageError && "invalid"}`} id="exampleFormControlTextarea1" rows="3" placeholder="Message"
                            value={message}
                            onChange={(e) => {
                                setmessageError(false)
                                setmessage(e.target.value)
                            }
                            }></textarea>
                        {messageError && (
                            <span className="text-danger">Enter the Message</span>
                        )}
                    </div>

                    <div className="text-center mt-4 mb-3"><Button className="Home_page_button support_buton_width" onClick={SupportHandle}>Send</Button></div>
                </div>
            </div>
            <Loder loading={isloading} />
        </>
    )
}

export default withRouter(HOC(Support));
