import React, { useEffect } from 'react';

//css file
import "./UserCommunication.css";

import HOC1 from "../../../Common/HOC1";

import { Grid, Card } from '@material-ui/core';
import { withRouter } from "react-router";

function CommunicationDetails(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <div className="content_padding ">
                <Card className="p-2 mt-2 Card_shadow">
                    <Grid className="Component_main_grid p-2 mt-3">
                        <Grid item md={2}><div className="mt-1"><span className="font_size_meaasges" onClick={() => props.history.goBack()}><i class="fa fa-arrow-left mr-1"></i>back to Inbox</span></div></Grid>
                        <Grid item md={2}><div className="mt-1"><span className="font_size_meaasges"><i class="fa fa-back mr-1"></i>Mark as important</span></div></Grid>
                        <Grid item md={2}><div className="mt-1"><span className="font_size_meaasges"><i class="fa fa-trash mr-1"></i>Delete</span></div></Grid>
                        <Grid item md={6}></Grid>
                    </Grid>

                    <div className="p-3 mt-2 mb-2 top_botton_boder">
                        <Grid className="Component_main_grid">
                            <Grid item md={2}><strong>Lorem ipsum</strong></Grid>
                            <Grid item md={8}><strong>Lorem Ipsum is a fish text often used in print and web design.</strong></Grid>
                            <Grid item md={2}>
                                <div>
                                    <span><strong>01:40 pm</strong></span>
                                    <span className="ml-2"><strong>09/10/2021</strong></span>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className="p-3 mt-2 mb-2">
                        <div><strong>Lorem Ipsum is a fish text often used in print and web design.</strong></div>
                        <div>
                            <p>Lorem Ipsum is a fish text often used in print and web design. Lorem Ipsum
                                has been the standard "fish" for Latin texts since the early 16th century. At the
                                time, an unnamed printer created a large collection of font sizes and shapes
                                using Lorem Ipsum to print samples.</p>
                            <p>Lorem Ipsum is a fish text often used in print and web design. Lorem Ipsum
                                has been the standard "fish" for Latin texts since the early 16th century. At the
                                time, an unnamed printer created a large collection of font sizes and shapes
                                using Lorem Ipsum to print samples.</p>
                        </div>
                    </div>
                </Card>
            </div>

        </>
    )
}

export default withRouter(HOC1(CommunicationDetails))
