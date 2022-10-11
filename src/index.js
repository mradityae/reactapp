import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminLayout from "layouts/Admin.js";

import Login from "auth/Login.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

if (sessionStorage.getItem("username") == null){
  root.render(
    <BrowserRouter>
      <Switch>
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Redirect from="/" to="/login" />
      </Switch>
    </BrowserRouter>
  );
}
else {
  root.render(
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Redirect from="/" to="/admin/inputPage" />
      </Switch>
    </BrowserRouter>
  );
}



// import React from "react";
// import ReactDOM from "react-dom/client";

// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/animate.min.css";
// import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
// import "./assets/css/demo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// import AdminLayout from "layouts/Admin.js";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
//       <Redirect from="/" to="/admin/dashboard" />
//     </Switch>
//   </BrowserRouter>
// );
