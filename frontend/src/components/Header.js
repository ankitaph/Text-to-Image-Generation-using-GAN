import React from "react";
import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FaUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './Header.css'
import { logout } from "../features/logoutSlice";

function Header() {
  const navigate = useNavigate();
 const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  console.log(userToken);

  const userIcon = (
    <span>
      <FaUser />
    </span>
  );

   const handleLogout= () =>{
       dispatch(logout());
   }
  return (
    <Navbar className=" glass-morf" sticky="top" style={{ height: "60px" }}>
      <Container>
        <Navbar.Brand
          className="fw-bold fs-3"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          LOGO
        </Navbar.Brand>
        <Nav>
          <Nav.Link onClick={() => navigate("/")} className="fw-bold fs-5">
            Home
          </Nav.Link>
          {/* <Nav.Link
            onClick={() => navigate("/pricing")}
            className="fw-bold fs-5"
          >
            Pricing
          </Nav.Link> */}
        </Nav>

         {userToken ? (
          <div>
          <DropdownButton variant="transparent"  id="dashboard-dropdown"  title={userIcon}>
            <Dropdown.ItemText className="fw-bold text-muted">{user?.firstname + " " +user?.lastname}</Dropdown.ItemText>
            <Dropdown.Item className="fw-bold " as="button" onClick={handleLogout}>Log Out</Dropdown.Item>
          </DropdownButton>
          </div>
        ) : (
          <Button
            variant="dark"
            onClick={() => navigate("/auth/user-login")}
            className="rounded-pill px-4 fw-bold"
          >
            Login
          </Button>
        )} 

        
      </Container>
    </Navbar>
  );
}

export default Header;
