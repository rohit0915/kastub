import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import Home from "./Components/Home/Home";
import Feature from "./Components/Feature/Feature";
import Support from "./Components/Support/Support";
import Register from "./Components/Register/Register";
import LoginIn from "./Components/Register/LoginIn";
import AboutUs from "./Components/AboutUs/AboutUs";
import Resources from "./Components/Resources/Resources";
import ContactUs from "./Components/ContactUs/ContactUs";
import UserDetails from "./Components/AfterLoginComponents/UserDetails/UserDetails";
import EditProfile from "./Components/AfterLoginComponents/EditProfile/EditProfile";
import UserDataTabs from "./Components/AfterLoginComponents/UserDataTabs/UserDataTabs";
import PropertiesDetail from "./Components/AfterLoginComponents/UserProperties/PropertiesDetail";
import ForgotPassword from "./Components/Register/ForgotPassword";
import Message from "./Components/Backadmin/Message/Message";

//Admin Pannel
import AdminLogin from "./Components/Backadmin/AdminLogin/AdminLogin";

//for notification
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import AdminHome from "./Components/Backadmin/AdminHome/AdminHome";
import Adminfirst from "./Components/Backadmin/Adminfirst/Adminfirst";
import ClientDetails from "./Components/Backadmin/client/ClientDetails";
import ComposeEmail from "./Components/AfterLoginComponents/ComposeEmail/ComposeEmail";
import Financials from "./Components/Backadmin/Financials/Financials";
import VerifyEmail from "./Components/Register/VerifyEmail";

function App() {
  return (
    <>
      <ScrollToTop smooth color="#6f00ff" />
      <ReactNotification />
      <Switch>
        <Route exact path="/" component={Home} />

        {/*User Pages */}
        <Route exact path="/home" component={Home} />
        <Route exact path="/features" component={Feature} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={LoginIn} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/user-details" component={UserDetails} />
        <Route exact path="/edit-profile" component={EditProfile} />
        <Route exact path="/user-data" component={UserDataTabs} />
        <Route exact path="/property-detail" component={PropertiesDetail} />
        <Route exact path="/verify-email" component={VerifyEmail} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/compose-email" component={ComposeEmail} />

        {/* Admin Pages*/}
        <Route exact path="/backadmin" component={AdminLogin} />
        <Route exact path="/adminHome" component={AdminHome} />
        <Route exact path="/message" component={Message} />
        <Route exact path="/first" component={Adminfirst} />
        <Route exact path="/client" component={ClientDetails} />
        <Route exact path="/financials" component={Financials} />

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
