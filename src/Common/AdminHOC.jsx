import React, { Fragment, Component } from "react";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
const AdminHOC = (Wcomponent) => {
  return class extends Component {
    render() {
      return (
        <Fragment>
          <div className="app-container-hoc main-margin">
            <Header {...this.props} />
            <div>
              <Wcomponent {...this.props} />
            </div>
            {/* <Footer {...this.props} /> */}
          </div>
        </Fragment>
      );
    }
  };
};

export default AdminHOC;
