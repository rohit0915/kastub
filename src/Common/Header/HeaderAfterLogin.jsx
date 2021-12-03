import React, { useEffect, useState } from 'react';

//material ui appbar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

//css file
import "./Header.css";

//for backend call
import axios from "axios";
import { getBaseUrl } from "../../utils";
import { blankValidator } from '../../utils/Validation';


const HeaderAfterLogin = (props) => {

    // user id
    let userid = localStorage.getItem("UserId")

    //local state 
    const [Sidebar, setSidebar] = useState(false);
    const [UserName, setUserName] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("")

    // function to open a sidebar 
    const setLoadingnewside = () => {
        document.getElementById("mySidenav").style.width = "250px";
        setSidebar(true)
    };

    // function to close a sidebar 
    const Closesidebar = () => {
        document.getElementById("mySidenav").style.width = "0px";
        setSidebar(false)
    }

    useEffect(() => {
        const getUserData = () => {
            try {
                if (!blankValidator(userid)) {
                    return;
                }
                let url = getBaseUrl() + `getUserDetail/${userid}`
                axios.get(url).then(
                    (response) => {
                        if (!blankValidator(response)) {
                            return;
                        } else {
                            response.data.map(
                                (data) => {
                                    setUserName(data.full_name);
                                    setemail(data.email);
                                    setphone(data.phonno)
                                }
                            );

                            console.log("user detail::::", response.data.response)
                        }
                    },
                    (error) => { console.log(error) }
                );
            } catch (error) {
                console.log(error)
            }
        }
        getUserData();
    }, [userid])


    return (
        <div className="topheader">
            <AppBar position="fixed" className="MainHeader">
                <Toolbar className="header_padding">
                    <div className="header_link_color"><strong>LOGO</strong></div>
                    <div className="header_grow" />
                    <div className="header_links">
                        {/* <span className="header_link_color" onClick={() => props.history.push("/home")}>Home</span>
                        <span className="header_link_color" onClick={() => props.history.push("/features")}>Features</span>
                        <span className="header_link_color" onClick={() => props.history.push("/support")}>Supports</span>
                        <span className="header_link_color" onClick={() => props.history.push("/about-us")}>About Us</span>
                        <span className="header_link_color" onClick={() => props.history.push("/resources")}>Resources</span>
                        <span className="header_link_color" onClick={() => props.history.push("/contact-us")}>Contact Us</span> */}
                        <span className="header_link_color">
                            <div className="dropdown">
                                <span><span className="user_image p-2 mr-2">{UserName.substring(0, 2)}</span>My Account</span>
                                <div className="dropdown-content">
                                    <div className="d-flex mt-3">
                                        <span className="dropdown_user_profile p-3"><strong>{UserName.substring(0, 2)}</strong></span>
                                        <span className="pl-2 pr-2 mt-1">
                                            <div><strong>{UserName}</strong></div>
                                            <div>{email}</div>
                                        </span>
                                    </div>
                                    <div className="mt-3" onClick={() => props.history.push("/edit-profile", {
                                        UserName,
                                        email,
                                        phone,
                                        userid
                                    })}>Edit Profile</div>
                                    <hr />
                                    <div className="Login_in" onClick={() => {
                                        localStorage.clear();
                                        window.location.href = "/home"
                                    }}>Log out</div>
                                </div>
                            </div></span>
                    </div>
                    <div className="mobile_Burger_Menu">
                        <span
                            className="logout_Pointer_cursor mr-3 text-right mt-2"
                            onClick={!Sidebar ? setLoadingnewside : Closesidebar}
                        >
                            <i class="fa fa-bars"></i>
                        </span>

                        <div id="mySidenav" className="sidenav text-center">
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
                            <span className="logout_Pointer_cursor text-center"><div className="dropdown_user_profile p-3">{UserName.substring(0, 2)}</div></span>
                            <span className="logout_Pointer_cursor text-center">
                                <div><strong>{UserName}</strong></div>
                                <div>{email}</div>
                            </span>
                            <hr />
                            {/* <span className="logout_Pointer_cursor" onClick={() => props.history.push("/home")}>
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
                            </span> */}

                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/edit-profile", {
                                UserName,
                                email,
                                phone,
                                userid
                            })}>
                                Edit Profile
                            </span>
                            <span className="logout_Pointer_cursor">
                                Log Out
                            </span>
                        </div>
                    </div>
                </Toolbar >
            </AppBar >
        </div >
    )
}

export default HeaderAfterLogin
