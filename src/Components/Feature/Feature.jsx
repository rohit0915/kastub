import React, { useEffect } from 'react'
import HOC from "../../Common/HOC.jsx";
import { Grid } from '@material-ui/core';

//used image
import f from "./f.png";

//css file
import "./Feature.css";

//asked question component
import AskedQuestion from '../AskedQuestion/AskedQuestion.jsx';

function Feature() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_padding">
                <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                    <Grid item md={6}>
                        <div className="page_heading">Paint Point Description<br />and our solution</div>
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
                    <Grid item md={6}>
                        <img src={f} alt="" className="Page_image" />
                    </Grid>
                </Grid>

                <div className="mt-3 mb-2 text-center page_heading">Paint point description and our solution</div>
                <Grid className="Component_main_grid mt-2 mb-2 p-3 ">
                    <Grid item md={3}>
                        <div><span className="content_point"><i class="fa fa-circle"></i></span>------------------</div>
                        <div className="page_heading">Lorem Ipsum</div>
                        <div className="p-2">Lorem Ipsum is a fish text often
                            used in print and web design.
                            Lorem Ipsum has been the
                            standard "fish"</div>
                    </Grid>
                    <Grid item md={3}>
                        <div><span className="content_point"><i class="fa fa-circle"></i></span>-------------------</div>
                        <div className="page_heading">Lorem Ipsum</div>
                        <div className="p-2">Lorem Ipsum is a fish text often
                            used in print and web design.
                            Lorem Ipsum has been the
                            standard "fish"</div>
                    </Grid>
                    <Grid item md={3}>
                        <div><span className="content_point"><i class="fa fa-circle"></i></span>-------------------</div>
                        <div className="page_heading">Lorem Ipsum</div>
                        <div className="p-2">Lorem Ipsum is a fish text often
                            used in print and web design.
                            Lorem Ipsum has been the
                            standard "fish"</div>
                    </Grid>
                    <Grid item md={3}>
                        <div><span className="content_point"><i class="fa fa-circle"></i></span>-------------------</div>
                        <div className="page_heading">Lorem Ipsum</div>
                        <div className="p-2">Lorem Ipsum is a fish text often
                            used in print and web design.
                            Lorem Ipsum has been the
                            standard "fish"</div>
                    </Grid>
                </Grid>

                <div className="mt-5 mb-2 page_heading">Paint point description and our solution</div>
                <Grid className="Component_main_grid mt-2 mb-2 p-3 ">
                    <Grid item md={6}>
                        <div className="p-2">Lorem Ipsum is a fish text often used in print and web design.
                            Lorem Ipsum has been the standard "fish" for Latin texts since
                            the early 16th century. At the time, an unnamed printer
                            created a large collection of font sizes and shapes using Lorem
                            Ipsum to print samples. Lorem Ipsum Not only successfully
                            survived five. At the time, an unnamed printer created a large
                            collection of font sizes and shapes using Lorem Ipsum to print
                            samples. Lorem Ipsum Not only successfully survived five.</div>
                    </Grid>
                    <Grid item md={6}>
                        <div className="p-2">Lorem Ipsum is a fish text often used in print and web design.
                            Lorem Ipsum has been the standard "fish" for Latin texts since
                            the early 16th century. At the time, an unnamed printer
                            created a large collection of font sizes and shapes using Lorem
                            Ipsum to print samples. Lorem Ipsum Not only successfully
                            survived five. At the time, an unnamed printer created a large
                            collection of font sizes</div>
                    </Grid>

                </Grid>
                <div className="mt-4 mb-4">
                    <AskedQuestion />
                </div>
            </div>
        </>
    )
}

export default HOC(Feature);
