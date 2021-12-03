import React, { useEffect, useState } from 'react'
import { Grid, Card, Button } from '@material-ui/core';
import "./UserProperties.css";
import { withRouter } from "react-router";

//array pagination
import "antd/dist/antd.css";
import { Pagination } from "antd";
import Expand from "react-expand-animated";

function UserProperties(props) {
    const numEachPage = 4;
    const [minValue, setminValue] = useState(0);
    const [maxValue, setmaxValue] = useState(4);
    const propertiesName = [{ name: "Property Name" },
    { name: "Ansal Colony" },
    { name: "Property Name" },
    { name: "Property Name" },
    { name: "Property Name" },
    { name: "Property Name" },
    { name: "Property Name" },
    { name: "Property Name" },
    { name: "Property Name" },
    { name: "Property Name" },
    { name: "Property Name" },
    ]
    const [addMangeopen, setaddMangeopen] = useState(false)


    const handleChange = (value) => {
        window.scrollTo(0, 0);

        setminValue((value - 1) * numEachPage)
        setmaxValue(value * numEachPage)

    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [propertyname, setpropertyname] = useState("");
    const filterData = propertiesName.filter((event) => {
        return (
            event.name.toLowerCase().indexOf(propertyname.toLowerCase()) !== -1
        );
    });
    return (
        <>
            <Grid className="Component_main_grid p-2 ">
                <Grid item md={8}></Grid>
                <Grid item md={4}>
                    <div className="d-flex">
                        <span className="p-2"><i class="fa fa-search"></i></span>
                        <span><input type="text"
                            class="form-control"
                            placeholder="Search by Property Name"
                            value={propertyname}
                            onChange={(e) => {
                                setpropertyname(e.target.value)
                            }}
                        /></span>
                    </div></Grid>
            </Grid>
            <div className="mt-4">
                <div>
                    {!addMangeopen ? (
                        <div className="mt-2 mb-2"><span className="hover_cursor" onClick={() => setaddMangeopen(!addMangeopen)}><i className="fa fa-plus mr-1" />Add New Property</span></div>
                    ) : (
                        <Expand open={addMangeopen}>
                            <Card className=" mb-2 Card_shadow">
                                <div className="card_admissiondetails_height">
                                    <div className="textfiled_margin">
                                        <div className="card_content_instition">
                                            <div className="text-right">
                                                <span className="icon_color hover_cursor">
                                                    <i className="fa fa-times cursor" onClick={() => setaddMangeopen(!addMangeopen)}></i>
                                                </span>
                                            </div>
                                            <div className="text_filed_heading">
                                                Property Name
                                            </div>
                                            <div className=" mt-1">
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="Enter Property Name"
                                                    autoComplete="off"
                                                />
                                            </div>

                                            <div className="text_filed_heading">
                                                Description
                                            </div>
                                            <div className=" mt-1">
                                                <textarea
                                                   rows="3"
                                                    className="form-control "
                                                    placeholder="Enter Description"
                                                    autoComplete="off"
                                                />
                                            </div>
                                            <Grid className="Component_main_grid ">
                                                <Grid item md={6}>
                                                    <div className="text_filed_heading">
                                                        Number of Tenants
                                                    </div>
                                                    <div className="input_margin_right mt-1">
                                                        <input
                                                            type="text"
                                                            className="form-control "
                                                            autoComplete="off"
                                                            placeholder="no. of Tenants"
                                                        />
                                                    </div>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <div className="text_filed_heading">
                                                        Property Image
                                                    </div>
                                                    <div className=" mt-1">
                                                        <input
                                                            type="file"
                                                            className="form-control "
                                                            autoComplete="off"
                                                        />
                                                    </div>
                                                </Grid>
                                            </Grid>
                                            <div className="text_filed_heading">
                                                Property Type
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    2BHK
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label class="form-check-label" for="flexCheckChecked">
                                                    PG
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    A/C
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label class="form-check-label" for="flexCheckChecked">
                                                    Shared
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Custom
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label class="form-check-label" for="flexCheckChecked">
                                                    Other
                                                </label>
                                            </div>

                                        </div>
                                        <div className="mt-2 pb-2 ">
                                            <Button
                                                variant="contained"
                                                className="button_formatting"

                                            >
                                                Create
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Expand>
                    )}
                </div>
                {filterData &&
                    filterData.length > 0 &&
                    filterData.slice(minValue, maxValue).map(item => (

                        <Card className="p-2 mt-2 Card_shadow">
                            <Grid className="Component_main_grid mt-2 mb-2 p-3 ">
                                <Grid item md={2}><div className="user_properties_profile"></div></Grid>
                                <Grid item md={10}>
                                    <div className="hover_cursor" onClick={() => props.history.push("/property-detail")}><strong>{item.name}</strong></div>
                                    <div>Rent Properties</div>
                                    <div>number of tenants in the property</div>
                                </Grid>
                            </Grid>

                            <div className="room_details">
                                <div className="p-1 ml-5 mt-1 bkh_color">2BHK</div>
                                <div className="p-1 ml-5 mt-1 bkh_color">A/C</div>
                                <div className="p-1 ml-5 mt-1 pg_color">PG</div>
                                <div className="p-1 ml-5 mt-1 shared_color">Shared</div>
                                <div className="p-1 ml-5 mt-1 shared_color">Custom</div>
                            </div>

                            <div className="outside_content_border p-2 mt-2">
                                <div><strong>Tenants Info</strong></div>
                                <div>Lorem Ipsum is a fish text often used in print and web design. Lorem Ipsum has been the standard "fish" for Latin texts since the early 16th
                                    century. At the time, an unnamed printer created a large collection of font sizes and shapes using Lorem Ipsum to print samples.</div>
                            </div>

                            <div className="outside_content_border p-2 mt-2">
                                <div>
                                    <span>Lorem Ipsum is a fish text often used in print and web design.</span>
                                    <span className="ml-4">$555.00</span>
                                </div>
                            </div>

                            <div className="outside_content_border p-2 mt-2">
                                <div>
                                    <span>Lorem Ipsum is a fish text often used in print and web design.</span>
                                    <span className="ml-4">$555.00</span>
                                </div>
                            </div>
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
            </div>

        </>
    )
}


export default withRouter(UserProperties);
