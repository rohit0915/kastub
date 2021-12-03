import React, { useEffect, useState } from 'react'
import { Grid, Card, Button } from '@material-ui/core';
import "./UserProperties.css";
import ac from "./ac.png";
import sofa from "./sofa.png";
import plug from "./plug.png";

//array pagination
import "antd/dist/antd.css";
import { Pagination } from "antd";

function PropertySummary(props) {
    const numEachPage = 2;
    const [minValue, setminValue] = useState(0);
    const [maxValue, setmaxValue] = useState(2);
    const Tenantdetail = [{ name: "Jhon Smith" },
    { name: "Jhon Smith" },
    { name: "Jhons Smith" },
    { name: "Jhon Smith" },
    { name: "Jhon Smith" },
    { name: "Jhon Smith" },
    { name: "Jhon Smith" },
    { name: "Jhon Smith" },
    { name: "Jhon Smith" },
    { name: "Jhon Smith" },
    { name: "Jhon Smith" },
    ]


    const handleChange = (value) => {
        window.scrollTo(0, 0);

        setminValue((value - 1) * numEachPage)
        setmaxValue(value * numEachPage)

    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <>

            <div className="mt-4">
                <Grid className="Component_main_grid mt-2 mb-2 p-3 ">
                    <Grid item md={8}>
                        <Grid className="Component_main_grid mt-2 mb-2 p-3 ">
                            <Grid item md={2}><div className="user_properties_profile"></div></Grid>
                            <Grid item md={10}>
                                <div><strong>Generic Details</strong></div>
                                <div className="content_color_summary">Lorem Ipsum is a fish text often used in print and web design.
                                    Lorem Ipsum has been the standard "fish" for Latin texts since
                                    the early 16th century. At the time, an unnamed printer created
                                    a large collection.</div>
                                <div className="text-right mt-2"><Button className="Home_page_button p-2">Join the tenant</Button></div>

                            </Grid>
                        </Grid>
                        <div className="page_heading mt-3">Tenants Details</div>
                        {Tenantdetail &&
                            Tenantdetail.length > 0 &&
                            Tenantdetail.slice(minValue, maxValue).map((item, index) => (
                                <Card className="p-2 mt-2 Card_shadow">
                                    <div className="d-flex justify-content-between">
                                        <span className="content_color_summary">Tenants</span>
                                        <span className="text-right">
                                            <div className="content_color_summary">Aggreement Date</div>
                                            <div><strong>07.10.2021</strong></div>
                                        </span>
                                    </div>
                                    <Grid className="Component_main_grid mt-2 p-3 ">
                                        <Grid item md={2}><div className="tenants_image_size"></div></Grid>
                                        <Grid item md={10}>
                                            <div><strong>{item.name}</strong></div>
                                            <div><strong>Contact Details</strong></div>
                                        </Grid>
                                    </Grid>
                                    <div className="content_color_summary">Lorem Ipsum is a fish text often used in print and web design.
                                        Lorem Ipsum has been the standard "fish" for Latin texts since
                                        the early 16th century. At the time, an unnamed printer created
                                        a large collection.</div>
                                </Card>
                            ))}

                        <div className="mt-4 mb-4 text-center">
                            <Pagination
                                defaultCurrent={1}
                                defaultPageSize={numEachPage}
                                onChange={handleChange}
                                total={500}
                            />
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="margin_content_both_side">
                            <Card className="p-5 mt-2 Card_shadow">
                                <div className="content_color_summary">Balance Due</div>
                                <div>$255.00</div>
                            </Card>

                            <Card className="p-3 mt-5 Card_shadow">
                                <div className="content_color_summary">Inventory</div>
                                <div className="mt-1">
                                    <span><img src={sofa} alt="" className="ac_image" /></span>
                                    <span className="ml-3">furniture</span>
                                </div>
                                <div className="mt-1">
                                    <span><img src={ac} alt="" className="ac_image" /></span>
                                    <span className="ml-3">air conditinor</span>
                                </div>
                                <div className="mt-1">
                                    <span><img src={plug} alt="" className="ac_image" /></span>
                                    <span className="ml-3">electrical equipment</span>
                                </div>
                                <div className="text-center mt-3 mb-2"><Button className="Home_page_button p-2">Add Inventory</Button></div>
                            </Card>
                        </div>
                    </Grid>
                </Grid>



            </div>

        </>
    )
}


export default PropertySummary;
