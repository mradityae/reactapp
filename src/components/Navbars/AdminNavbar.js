import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import routes from "routes.js";

function Header() {
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  }

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
      </button>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow d-sm-none">
            <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-search fa-fw"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown">
                <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small"
                            placeholder="Search for..." aria-label="Search"
                            aria-describedby="basic-addon2"></input>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </li>

        <li className="nav-item dropdown no-arrow mx-1">

        </li>

        <div className="topbar-divider d-none d-sm-block"></div>

        <li className="dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <p className="mr-2 d-none d-lg-inline text-gray-600">Welcome {sessionStorage.getItem("username")}</p>
            </a>
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown">
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#" onClick={logout}>
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                </a>
            </div>
        </li>
      </ul>
    </nav>
    
    // <Navbar bg="light" expand="lg">
    //   <Container fluid>
    //     <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
    //       <Button
    //         variant="dark"
    //         className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
    //         onClick={mobileSidebarToggle}
    //       >
    //         <i className="fas fa-ellipsis-v"></i>
    //       </Button>
    //       <Navbar.Brand
    //         href="#home"
    //         onClick={(e) => e.preventDefault()}
    //         className="mr-2"
    //       >
    //         {getBrandText()}
    //       </Navbar.Brand>
    //     </div>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
    //       <span className="navbar-toggler-bar burger-lines"></span>
    //       <span className="navbar-toggler-bar burger-lines"></span>
    //       <span className="navbar-toggler-bar burger-lines"></span>
    //     </Navbar.Toggle>
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="nav mr-auto" navbar>
    //         <Nav.Item>
    //           <Nav.Link
    //             data-toggle="dropdown"
    //             href="#pablo"
    //             onClick={(e) => e.preventDefault()}
    //             className="m-0"
    //           >
    //             <i className="nc-icon nc-palette"></i>
    //             <span className="d-lg-none ml-1">Dashboard</span>
    //           </Nav.Link>
    //         </Nav.Item>
    //         <Dropdown as={Nav.Item}>
    //           <Dropdown.Toggle
    //             as={Nav.Link}
    //             data-toggle="dropdown"
    //             id="dropdown-67443507"
    //             variant="default"
    //             className="m-0"
    //           >
    //             <i className="nc-icon nc-planet"></i>
    //             <span className="notification">5</span>
    //             <span className="d-lg-none ml-1">Notification</span>
    //           </Dropdown.Toggle>
    //           <Dropdown.Menu>
    //             <Dropdown.Item
    //               href="#pablo"
    //               onClick={(e) => e.preventDefault()}
    //             >
    //               Notification 1
    //             </Dropdown.Item>
    //             <Dropdown.Item
    //               href="#pablo"
    //               onClick={(e) => e.preventDefault()}
    //             >
    //               Notification 2
    //             </Dropdown.Item>
    //             <Dropdown.Item
    //               href="#pablo"
    //               onClick={(e) => e.preventDefault()}
    //             >
    //               Notification 3
    //             </Dropdown.Item>
    //             <Dropdown.Item
    //               href="#pablo"
    //               onClick={(e) => e.preventDefault()}
    //             >
    //               Notification 4
    //             </Dropdown.Item>
    //             <Dropdown.Item
    //               href="#pablo"
    //               onClick={(e) => e.preventDefault()}
    //             >
    //               Another notification
    //             </Dropdown.Item>
    //           </Dropdown.Menu>
    //         </Dropdown>
    //         <Nav.Item>
    //           <Nav.Link
    //             className="m-0"
    //             href="#pablo"
    //             onClick={(e) => e.preventDefault()}
    //           >
    //             <i className="nc-icon nc-zoom-split"></i>
    //             <span className="d-lg-block"> Search</span>
    //           </Nav.Link>
    //         </Nav.Item>
    //       </Nav>
    //       <Nav className="ml-auto" navbar>
    //         <Nav.Item>
    //           <Nav.Link
    //             className="m-0"
    //             href="#pablo"
    //             onClick={(e) => e.preventDefault()}
    //           >
    //             <span className="no-icon">Welcome {sessionStorage.getItem("username")}</span>
    //           </Nav.Link>
    //         </Nav.Item>
    //         <Dropdown as={Nav.Item}>
    //           <Dropdown.Toggle
    //             aria-expanded={false}
    //             aria-haspopup={true}
    //             as={Nav.Link}
    //             data-toggle="dropdown"
    //             id="navbarDropdownMenuLink"
    //             variant="default"
    //             className="m-0"
    //           >
    //             <span className="no-icon">Dropdown</span>
    //           </Dropdown.Toggle>
    //           <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
    //             <Dropdown.Item
    //               href="#pablo"
    //               onClick={(e) => e.preventDefault()}
    //             >
    //               Action
    //             </Dropdown.Item>
    //             <Dropdown.Item
    //               href="#pablo"
    //               onClick={(e) => e.preventDefault()}
    //             >
    //               Another action
    //             </Dropdown.Item>
    //             <Dropdown.Item
    //               href="#pablo"
    //               onClick={(e) => e.preventDefault()}
    //             >
    //               Something
    //             </Dropdown.Item>
    //             <Dropdown.Item
    //               href="#pablo"
    //               onClick={(e) => e.preventDefault()}
    //             >
    //               Something else here
    //             </Dropdown.Item>
    //             <div className="divider"></div>
    //             <Dropdown.Item
    //               href="#pablo"
    //               onClick={(e) => e.preventDefault()}
    //             >
    //               Separated link
    //             </Dropdown.Item>
    //           </Dropdown.Menu>
    //         </Dropdown>
    //         <Nav.Item>
    //           <Nav.Link
    //             className="m-0"
    //             href="#pablo"
    //             onClick={logout}
    //             // onClick={(e) => e.preventDefault()}
    //           >
    //             <span className="no-icon">Log out</span>
    //           </Nav.Link>
    //         </Nav.Item>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default Header;
