import React, { useEffect } from 'react'
import HOC from "../../Common/HOC.jsx";
import { Grid, Button } from '@material-ui/core';

//used images
import a from "./a.png";
import b from "./b.png";
import c from "./c.png";
import d from "./d.png";
import e from "./e.png";

//css file
import "./Home.css";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_padding">
                <div className="margin_content_both_side">
                    <Grid className="Component_main_grid mt-2 mb-2 p-3 ">
                        <Grid item md={6}>
                            <div className="home_page_main_heading">Paint Point Description <br /> and our solution</div>
                            <div className="home_paragraph_width">At the time, an unnamed printer created a large
                                collection of font sizes and shapes using Lorem Ipsum
                                to print samples. Lorem Ipsum Not only successfully
                                survived five.
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <img src={a} alt="" className="home_Page_image" />
                        </Grid>
                    </Grid>

                    <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                        <Grid item md={6}>
                            <img src={b} alt="" className="home_Page_image" />
                        </Grid>
                        <Grid item md={6}>
                            <div className="page_heading">Paint Point Description </div>
                            <div className="home_paragraph_width">At the time, an unnamed printer created a large
                                collection of font sizes and shapes using Lorem Ipsum
                                to print samples. Lorem Ipsum Not only successfully
                                survived five.
                            </div>
                        </Grid>
                    </Grid>

                    <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                        <Grid item md={6}>
                            <div className="page_heading">Paint Point Description </div>
                            <div className="home_paragraph_width">At the time, an unnamed printer created a large
                                collection of font sizes and shapes using Lorem Ipsum
                                to print samples. Lorem Ipsum Not only successfully
                                survived five.
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <img src={c} alt="" className="home_Page_image" />
                        </Grid>
                    </Grid>

                    <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                        <Grid item md={6}>
                            <img src={d} alt="" className="home_Page_image" />
                        </Grid>
                        <Grid item md={6}>
                            <div className="page_heading">Paint Point Description </div>
                            <div className="home_paragraph_width">At the time, an unnamed printer created a large
                                collection of font sizes and shapes using Lorem Ipsum
                                to print samples. Lorem Ipsum Not only successfully
                                survived five.
                            </div>
                        </Grid>
                    </Grid>

                    <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                        <Grid item md={6}>
                            <div className="page_heading">Paint Point Description </div>
                            <div className="home_paragraph_width">At the time, an unnamed printer created a large
                                collection of font sizes and shapes using Lorem Ipsum
                                to print samples. Lorem Ipsum Not only successfully
                                survived five.
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <img src={e} alt="" className="home_Page_image" />
                        </Grid>
                    </Grid>

                    <div className="mt-3 mb-2 text-center page_heading">Paint point description and our solution</div>
                    <div className="text-center">Lorem Ipsum is a fish text often used in print and web design. Lorem Ipsum has been
                        <br />the standard "fish" for Latin texts since the early 16th century.</div>
                    <div className="text-center mt-2 mb-3"><Button className="Home_page_button">Join us now</Button></div>
                </div>
            </div>
        </>
    )
}

export default HOC(Home);
