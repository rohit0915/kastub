import React, { useState } from 'react';

//material ui appbar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

//css file
import "./Header.css";

const Header = (props) => {

    /*local state */
    const [Sidebar, setSidebar] = useState(false);

    /*function to open a sidebar */
    const setLoadingnewside = () => {
        document.getElementById("mySidenav").style.width = "250px";
        setSidebar(true)
    };

    /*function to close a sidebar */
    const Closesidebar = () => {
        document.getElementById("mySidenav").style.width = "0px";
        setSidebar(false)
    }
    return (
        <div className="topheader">
            <AppBar position="fixed" className="MainHeader">
                <Toolbar className="header_padding">
                    <div className="header_link_color"><strong>LOGO</strong></div>
                    <div className="header_grow" />
                    <div className="header_links">
                        <span className="header_link_color" onClick={() => props.history.push("/home")}>Home</span>
                        <span className="header_link_color" onClick={() => props.history.push("/features")}>Features</span>
                        <span className="header_link_color" onClick={() => props.history.push("/support")}>Supports</span>
                        <span className="header_link_color" onClick={() => props.history.push("/about-us")}>About Us</span>
                        <span className="header_link_color" onClick={() => props.history.push("/resources")}>Resources</span>
                        <span className="header_link_color" onClick={() => props.history.push("/contact-us")}>Contact Us</span>
                        <span className="header_link_color" onClick={() => props.history.push("/login")}>Login</span>
                    </div>
                    <div className="mobile_Burger_Menu">
                        <span
                            className="logout_Pointer_cursor mr-3 text-right mt-2"
                            onClick={!Sidebar ? setLoadingnewside : Closesidebar}
                        >
                            <i class="fa fa-bars"></i>
                        </span>

                        <div id="mySidenav" className="sidenav">
                            <div className="cross_icon_style">
                                <i
                                    class="fa fa-times cursor"
                                    onClick={() => {
                                        document.getElementById("mySidenav").style.width =
                                            "0px";
                                        setSidebar(false);
                                    }}
                                ></i>
                            </div>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/home")}>
                                Home
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/features")}>
                                Features
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/support")} >
                                Supports
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/about-us")}>
                                About Us
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/resources")}>
                                Resources
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/contact-us")}>
                                Contact Us
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/login")}>
                                Login
                            </span>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
