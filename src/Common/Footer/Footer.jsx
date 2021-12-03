import React from 'react'
import { Grid } from '@material-ui/core';

//css file
import "./Footer.css";

function Footer(props) {
    return (
        <>

            <div className="mt-5 ml-4 mr-4">
                <hr style={{ width: "80%" }} />
                <Grid className="Component_main_grid mt-2 p-3 ">
                    <Grid item md={3} className="p-3">
                        <div><strong>LOGO</strong></div>
                    </Grid>
                    <Grid item md={3} className="p-3">
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/home")}>Home</div>
                        <div className="Footer_heading_Links mt-1" onClick={() => props.history.push("/features")}>Features</div>
                        <div className="Footer_heading_Links mt-1" onClick={() => props.history.push("/support")}>Support</div>
                        <div className="Footer_heading_Links mt-1" onClick={() => props.history.push("/about-us")}>About Us</div>
                        <div className="Footer_heading_Links mt-1" onClick={() => props.history.push("/resources")}>Resources</div>
                        <div className="Footer_heading_Links mt-1" onClick={() => props.history.push("/contact-us")}>Contact Us</div>
                        <div className="Footer_heading_Links mt-1" onClick={() => props.history.push("/login")}>Login</div>
                    </Grid>
                    <Grid item md={3} className="p-3">
                        <div><span className="Footer_heading_Links mt-1"><i class="fa fa-phone"></i></span><span className="ml-2">+ 1 555 555 555</span></div>
                        <div><span className="Footer_heading_Links mt-1"><i class="fa fa-envelope"></i></span><span className="ml-2">info@gmail.com</span></div>
                        <div><span className="Footer_heading_Links mt-1"><i class="fa fa-instagram"></i></span><span className="ml-2">Instagram.com</span></div>
                        <div><span className="Footer_heading_Links mt-1"><i class="fa fa-facebook"></i></span><span className="ml-2">facebook.com</span></div>
                    </Grid>
                    <Grid item md={3} className="p-3">
                        <div className="mt-1">Lorem ipsum</div>
                        <div className="mt-1">Lorem ipsum is a placeholder text commonly used to demonstrate the visual
                            form of a document or a typeface without relying on meaningful content</div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Footer
