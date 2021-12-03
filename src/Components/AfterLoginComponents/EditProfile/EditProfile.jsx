import React, { useEffect, useState } from 'react'

//HOC contains header & footer
import HOC1 from "../../../Common/HOC1.jsx";
import { Button, Card } from '@material-ui/core';
import { TextField, IconButton, OutlinedInput, InputAdornment, FormControl } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

//Css file
import "./EditProfile.css";

//for backend call
import axios from "axios";
import { getBaseUrl } from "../../../utils";
import { blankValidator, emailValidator, showNotificationMsz } from "../../../utils/Validation";
import Loder from "../../Loder/Loder.jsx"


function EditProfile(props) {

    //user details
    // let full_name = props.location.state.UserName;
    // let emailaddress = props.location.state.email;
    // let phonenumber = props.location.state.phone;
    let id = props.location.state.userid;

    //---------------------local state ----------------------
    const [showimage, setshowimage] = useState("https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png")
    const [imageurl, setimageurl] = useState("");
    const [fullname, setfullname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("")
    const [isloading, setisloading] = useState(false)
    const [isUpdated, setisUpdated] = useState(false)




    useEffect(() => {
        window.scrollTo(0, 0);
        const getUserData = () => {
            try {
                if (!blankValidator(id)) {
                    return;
                }
                let url = getBaseUrl() + `getUserDetail/${id}`
                axios.get(url).then(
                    (response) => {
                        console.log("user data::", response)
                        if (!blankValidator(response)) {
                            return;
                        } else {
                            response.data.map(
                                (data) => {
                                    setfullname(data.full_name);
                                    setemail(data.email);
                                    setphone(data.phonno)
                                    if(data.image === null){
                                        setshowimage("https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png")
                                    }else
                                    setshowimage(data.image)
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
    }, [isUpdated, id])

    const updateProfile = () => {
        try {
            setisloading(true)
            let url = getBaseUrl() + `updateProfile/${id}`;
            let fileData = new FormData();
            fileData.append("full_name", fullname);
            fileData.append("email", email);
            fileData.append("phonno", phone);
            if (imageurl) {
                fileData.append('myField', imageurl)
            } else
                fileData.append('currentImage', showimage)

            axios
                .post(url, fileData)
                .then(
                    (res) => {
                        console.log("data response:::", res)
                        setisloading(false)
                        showNotificationMsz(res.data.msg, "success")
                        setimageurl("")
                        setisUpdated(!isUpdated)
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
    }
    return (
        <>
            <div className="Register_Main_div content_padding">
                <div className="mx-auto">
                    <div>
                        <img
                            src={!blankValidator(imageurl) ? `https://fathomless-taiga-94619.herokuapp.com/public/images/${showimage}` : showimage}
                            alt=""
                            id="img"
                            className="profile_Edit"
                        />
                    </div>
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            name="image-upload"
                            id="input"
                            onChange={(e) => {
                                setimageurl(e.target.files[0])
                                setshowimage(URL.createObjectURL(e.target.files[0]))
                            }}
                        />
                        <div className="">
                            <label className="resumeview_image_upload" htmlFor="input">
                                <i class="fa fa-camera mr-1"></i>
                                Upload Your Photo
                            </label>
                        </div>

                    </div>

                </div>
                <div><strong>{fullname}</strong></div>
                <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
                    <p className="page_heading text-center mt-3">Edit Account</p>

                    <div className="mt-4 p-3">

                        <TextField
                            placeholder="Full Name"
                            id="outlined-basic"
                            variant="outlined"
                            autoComplete="off"
                            value={fullname}
                            onChange={(e) => {
                                setfullname(e.target.value)
                            }}
                        />
                        <div className="mt-2">
                            <TextField
                                placeholder="Email"
                                id="outlined-basic"
                                variant="outlined"
                                autoComplete="off"
                                value={email}
                                onChange={(e) => {
                                    setemail(e.target.value)
                                }}
                            />
                        </div>
                        <div className="mt-2">
                            <PhoneInput
                                country={'in'}
                                countryCodeEditable={false}
                                value={phone}
                                onChange={(e) => {

                                    setphone(e)
                                }}
                            />

                        </div>

                        <div className="mt-4 mb-3"><Button className="Home_page_button login_register_width" onClick={updateProfile}>Save</Button></div>

                    </div>
                </Card>
            </div>


            <Loder loading={isloading} />
        </>
    )
}

export default HOC1(EditProfile);
