import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import "./styles.css";

function Login() {
  // React States
  console.log("sessionStorage : ",sessionStorage);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "mradityae",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        sessionStorage.setItem("username", uname.value);
        window.location.href = "/admin/inputPage";
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <body className="bg-gradient-primary">
    <div className="container">
      <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                      <div className="row">
                          <div className="col-lg-6 d-none d-lg-block bg-login-images"></div>
                          <div className="col-lg-6">
                              <div className="p-5">
                                  <div className="text-center">
                                      <h1 className="h4 text-gray-900 mb-4">React App for Jaskug Test</h1>
                                  </div>
                                  <form className="login-form" onSubmit={handleSubmit}>
                                      <div className="form-group">
                                          <input type="text" name="uname" className="form-control form-control-user"
                                              placeholder="Username"></input>
                                              {renderErrorMessage("uname")}
                                      </div>
                                      <div className="form-group">
                                          <input type="password" name="pass" className="form-control form-control-user"
                                              placeholder="Password"></input>
                                              {renderErrorMessage("pass")}
                                      </div>
                                      <div className="form-group">
                                          <div className="custom-control custom-checkbox small">
                                              <input type="checkbox" className="custom-control-input" id="customCheck"></input>
                                              <label className="custom-control-label" for="customCheck">Remember
                                                  Me</label>
                                          </div>
                                      </div>
                                      <input type="submit" values="Login" className="btn btn-primary btn-user btn-block" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
    // <div className="form">
    //   <form onSubmit={handleSubmit}>
    //     <div className="input-container">
    //       <label>Username </label>
    //       <input type="text" name="uname" required />
    //       {renderErrorMessage("uname")}
    //     </div>
    //     <div className="input-container">
    //       <label>Password </label>
    //       <input type="password" name="pass" required />
    //       {renderErrorMessage("pass")}
    //     </div>
    //     <div className="button-container">
    //       <input type="submit" />
    //     </div>
    //   </form>
    // </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {/* <div className="title">Sign In</div> */}
        {isSubmitted ? <div></div> : renderForm}
      </div>
    </div>
  );
}

export default Login;