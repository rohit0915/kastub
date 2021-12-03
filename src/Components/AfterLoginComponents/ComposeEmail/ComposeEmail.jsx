import React, { useEffect } from 'react'
import { Card, Button } from '@material-ui/core';
import HOC1 from "../../../Common/HOC1";

function ComposeEmail() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="content_padding">
                <div className="margin_content_both_side">
                    <div className="page_heading">
                        Compose Email
                    </div>
                    <Card className="mt-2 mb-4 Card_shadow">
                        <div className="card_admissiondetails_height">
                            <div className="textfiled_margin">
                                <div className="card_content_instition">

                                    <div className="text_filed_heading pt-3">
                                        Email Address
                                    </div>
                                    <div className=" mt-1">
                                        <input
                                            type="text"
                                            className="form-control "
                                            placeholder="Enter E-mail Address"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="text_filed_heading">
                                        Subject
                                    </div>
                                    <div className=" mt-1">
                                        <input
                                            type="text"
                                            className="form-control "
                                            placeholder="Enter Subject"
                                            autoComplete="off"
                                        />
                                    </div>

                                    <div className="text_filed_heading">
                                        Message
                                    </div>
                                    <div className=" mt-1">
                                        <textarea
                                            class="form-control"
                                            rows="3"
                                            placeholder="Message"
                                        >
                                        </textarea>
                                    </div>

                                </div>
                                <div className="mt-2 pb-2 ">
                                    <Button
                                        variant="contained"
                                        className="button_formatting"

                                    >
                                        Send Email
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default HOC1(ComposeEmail)
