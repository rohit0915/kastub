import React, { useEffect } from 'react'
import HOC from "../../Common/HOC.jsx";
import { Grid } from '@material-ui/core';

//used images
import g from "./g.png";

//css file
import "./AboutUs.css";

function AboutUs() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <>
            <div className="content_padding">
                <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                    <Grid item md={6}>
                        <img src={g} alt="" className="Page_image" />
                    </Grid>
                    <Grid item md={6}>
                        <div className="page_heading">Paint Point Description</div>
                        <div>
                            <p className="home_paragraph_width">Lorem Ipsum is a fish text often used in print and web
                                design. Lorem Ipsum has been the standard "fish" for
                                Latin texts since the early 16th century.</p>
                            <p className="home_paragraph_width">At the time, an unnamed printer created a large
                                collection of font sizes and shapes using Lorem Ipsum
                                to print samples. Lorem Ipsum Not only successfully
                                survived five.</p>
                            <p className="home_paragraph_width">Lorem Ipsum is a fish text often used in print and web
                                design. Lorem Ipsum has been the standard "fish" for
                                Latin texts since the early 16th century.</p>
                        </div>
                    </Grid>
                </Grid>

                <div className="page_heading mt-5">Paint Point Description</div>
                <div className="mt-2 mb-3">
                    <p className="home_paragraph_width">Lorem Ipsum is a fish text often used in print and web
                        design. Lorem Ipsum has been the standard "fish" for
                        Latin texts since the early 16th century.</p>
                    <p className="home_paragraph_width">At the time, an unnamed printer created a large
                        collection of font sizes and shapes using Lorem Ipsum
                        to print samples. Lorem Ipsum Not only successfully
                        survived five.</p>
                    <p className="home_paragraph_width">Lorem Ipsum is a fish text often used in print and web
                        design. Lorem Ipsum has been the standard "fish" for
                        Latin texts since the early 16th century.</p>
                </div>

                <div className="page_heading text-center mt-5">Paint point description and our solution</div>
                <div className="mt-2 mb-3 text-center about_para_width">Lorem Ipsum is a fish text often used in print and web design. Lorem Ipsum has been the standard
                    "fish" for Latin texts since the early 16th century. At the time, an unnamed printer created.</div>

                <div className="mt-5 mb-5 text-center">

                    <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                        <Grid item md={4}>
                            <div className="icons_about_us"><i class="fa fa-database"></i></div>
                            <div className="heading_data">Robust workflow</div>
                            <div>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed erat nibh tristique ipsum.</div>
                        </Grid>
                        <Grid item md={4}>
                            <div className="icons_about_us"><i class="fa fa-database"></i></div>
                            <div className="heading_data">Flexibility</div>
                            <div>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed erat nibh tristique ipsum.</div>
                        </Grid>
                        <Grid item md={4}>
                            <div className="icons_about_us"><i class="fa fa-database"></i></div>
                            <div className="heading_data">User friendly</div>
                            <div>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed erat nibh tristique ipsum.</div>
                        </Grid>
                    </Grid>

                    <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                        <Grid item md={4}>
                            <div className="icons_about_us"><i class="fa fa-database"></i></div>
                            <div className="heading_data">Multiple layouts</div>
                            <div>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed erat nibh tristique ipsum.</div>
                        </Grid>
                        <Grid item md={4}>
                            <div className="icons_about_us"><i class="fa fa-database"></i></div>
                            <div className="heading_data">Better components</div>
                            <div>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed erat nibh tristique ipsum.</div>
                        </Grid>
                        <Grid item md={4}>
                            <div className="icons_about_us"><i class="fa fa-database"></i></div>
                            <div className="heading_data">Well organised</div>
                            <div>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed erat nibh tristique ipsum.</div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default HOC(AboutUs);
