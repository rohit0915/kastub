import React, { useEffect } from 'react'
import HOC1 from "../../../Common/HOC1";
//import { Grid } from '@material-ui/core';
import "./UserDataTabs.css";

//tab pannel
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import UserProperties from '../UserProperties/UserProperties';
import UserFinancial from '../UserFinancial/UserFinancial';
import UserCommunication from '../UserCommunication/UserCommunication';

function UserDataTabs(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_padding">
                <div><strong>Hii, Jhons Smith</strong></div>
                <div className="mt-2 data_tabs">
                    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                        <Tab label="Your Properties" {...a11yProps(0)} className="button_login_decoration user_tabs_in_mobile tabs_text_formatting" />
                        <Tab label="Financials" {...a11yProps(1)} className="button_login_decoration user_tabs_in_mobile tabs_text_formatting" />
                        <Tab label="Communication" {...a11yProps(2)} className="button_login_decoration user_tabs_in_mobile tabs_text_formatting" />
                    </Tabs>
                </div>

                {/* first tab data*/}
                <TabPanel value={value} index={0}>
                    <UserProperties />
                </TabPanel>


                {/* second tab data*/}
                <TabPanel value={value} index={1}>
                    <UserFinancial />
                </TabPanel>


                {/* third tab data*/}
                <TabPanel value={value} index={2}>
                    <UserCommunication />
                </TabPanel>


            </div>
        </>
    )
}
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default HOC1(UserDataTabs);
