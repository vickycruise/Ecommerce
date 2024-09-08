import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Offcanvas, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./SidebarMenu.css"; // Import custom CSS file
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../Redux/slice/userSlice";
import { useNavigate } from "react-router-dom";

function SidebarMenu() {
  const [show, setShow] = useState(false); // State to control Offcanvas visibility
  const user = useSelector((state) => state.user.user);
  const handleClose = () => setShow(false); // Close Offcanvas
  const handleShow = () => setShow(true); // Show Offcanvas
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearUser()); // Dispatch the action to clear the user
    console.log("User cleared"); // Additional logging if needed
  };
  const status = useSelector((state) => state.user.status);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user && status !== "success") navigate("/login");
  }, [navigate, status, user]);
  return (
    <>
      {/* Regular Navbar for Web View (visible only on md and larger screens) */}
      <Navbar bg="dark" variant="dark" expand="md" className="d-none d-md-flex">
        <Navbar.Brand href="/" className="ms-3">
          My App
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="dashboard" className="text-light">
            <i className="bi bi-speedometer2 me-2"></i> Dashboards
          </Nav.Link>

          {/* Apps Dropdown with Hover */}
          <NavDropdown
            title={
              <>
                <i className="bi bi-grid me-2"></i> Apps
              </>
            }
            id="apps-dropdown"
            className="text-light hover-dropdown"
          >
            <NavDropdown.Item href="calendar">Calendar</NavDropdown.Item>
            <NavDropdown.Item href="chat">Chat</NavDropdown.Item>
            <NavDropdown.Item href="crm">CRM</NavDropdown.Item>
          </NavDropdown>

          {/* Ecommerce Dropdown with Hover */}
          <NavDropdown
            title={
              <>
                <i className="bi bi-basket me-2"></i> Ecommerce
              </>
            }
            id="ecommerce-dropdown"
            className="text-light hover-dropdown"
          >
            <NavDropdown.Item href="product-details"> Product</NavDropdown.Item>
            <NavDropdown.Item href="product-details">
              Product Details
            </NavDropdown.Item>
            <NavDropdown.Item href="orders">Orders</NavDropdown.Item>
          </NavDropdown>
          {user && (
            <div className=" d-flex position-absolute end-0 mx-5">
              <a class="navbar-brand">{user?.name}</a>
              <div class="btn-group ">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-person"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-star ">
                  <li
                    className="text-light  text-center "
                    onClick={() => handleClear()}
                    href=""
                  >
                    {" "}
                    Log Out
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Nav>
      </Navbar>

      {/* Button to Toggle Off-Canvas Menu (visible only on mobile view) */}
      <div className="d-md-none">
        <Button variant="primary" onClick={handleShow} className="m-3">
          <i className="bi bi-list"></i> Menu
        </Button>
      </div>

      {/* Offcanvas Component for Mobile View (visible only on mobile view) */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        className="bg-dark text-light"
        backdrop={true}
        scroll={true}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <Nav className="flex-column">
            <Nav.Link
              href=""
              className="text-light d-flex align-items-center py-3 px-4"
            >
              <i className="bi bi-speedometer2 me-2"></i> Dashboards
            </Nav.Link>

            {/* Collapsible Apps Menu */}
            <Nav.Item>
              <Nav.Link
                className="text-light d-flex align-items-center py-3 px-4"
                data-bs-toggle="collapse"
                href="#appsMenu"
                role="button"
                aria-expanded="false"
                aria-controls="appsMenu"
              >
                <i className="bi bi-grid me-2"></i> Apps
                <i className="bi bi-chevron-right ms-auto"></i>
              </Nav.Link>
              <div className="collapse" id="appsMenu">
                <Nav className="flex-column ms-4">
                  <Nav.Link href="" className="text-light py-2">
                    Calendar
                  </Nav.Link>
                  <Nav.Link href="" className="text-light py-2">
                    Chat
                  </Nav.Link>
                  <Nav.Link href="" className="text-light py-2">
                    CRM
                  </Nav.Link>
                </Nav>
              </div>
            </Nav.Item>

            {/* Collapsible Ecommerce Menu */}
            <Nav.Item>
              <Nav.Link
                className="text-light d-flex align-items-center py-3 px-4"
                data-bs-toggle="collapse"
                href="#ecommerceMenu"
                role="button"
                aria-expanded="false"
                aria-controls="ecommerceMenu"
              >
                <i className="bi bi-basket me-2"></i> Ecommerce
                <i className="bi bi-chevron-right ms-auto"></i>
              </Nav.Link>
              <div className="collapse" id="ecommerceMenu">
                <Nav className="flex-column ms-4">
                  <Nav.Link href="" className="text-light py-2">
                    Products
                  </Nav.Link>
                  <Nav.Link href="" className="text-light py-2">
                    Product Details
                  </Nav.Link>
                  <Nav.Link href="" className="text-light py-2">
                    Orders
                  </Nav.Link>
                </Nav>
              </div>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SidebarMenu;
