import React, { Fragment, Component } from "react";
import Footer from "./Footer/Footer.jsx";
import HeaderAfterLogin from "./Header/HeaderAfterLogin.jsx";
const HOC1 = (Wcomponent) => {
    return class extends Component {
        render() {
            return (
                <Fragment>
                    <div className="app-container-hoc main-margin">
                        <HeaderAfterLogin {...this.props} />
                        <div>
                            <Wcomponent {...this.props} />
                        </div>
                        <Footer {...this.props} />
                    </div>
                </Fragment>
            );
        }
    };
};

export default HOC1;
