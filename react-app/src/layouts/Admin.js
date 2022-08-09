import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import BookDetail from "views/pages/BookDetail.js";

import routes from "routes.js";
import Profile from "views/pages/Profile";
import TradeDetail from "views/pages/TradeDetail";
import SecurityDetail from "views/pages/SecurityDetail";

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    let brandNames = {
      "user-profile": "User Profile",
      book: "Book",
      trade: "Trades",
    };
    for (const [key, value] of Object.entries(brandNames)) {
      if (props.location.pathname.indexOf(key) !== -1) {
        return value;
      }
    }
    return "Brand";
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/argon-react.png").default,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          <Route path="/admin/book/:BookId" component={BookDetail} />
          <Route path="/admin/user-profile" component={Profile} />
          <Route path="/admin/trade/:TradeId" component={TradeDetail} />
          <Route
            path="/admin/security/:SecurityId"
            component={SecurityDetail}
          />
          {getRoutes(routes)}
          <Redirect from="*" to="/admin/index" />
        </Switch>
      </div>
    </>
  );
};

export default Admin;
