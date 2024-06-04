import React, { useState } from "react";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import FromField from "./FormField";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../features/loadingSlice";
import { getError } from "../utils/getError";
import api from "../utils/axios";
import { setUser } from "../features/userSlice";
import toast from "react-hot-toast";

function AuthCard() {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const location = useLocation();
  const isUserLogin = location.pathname.includes("user-login");
  const isUserReg = location.pathname.includes("user-reg");
  const { isLoading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bgStyle = {
    
    borderRadius: "10px",
    minHeight: "500px",
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      dispatch(showLoading());
      const response = await api.post("/api/user-login", {
        email: email,
        password: password,
      });

      if (response?.status === 200) {
        const { user, token } = response?.data;
        const { firstname, lastname } = response?.data?.user;
        console.log(token);
        dispatch(setUser({ user, token }));
        toast.success(`Welcome Back ${firstname} ${lastname}`);
        navigate("/");
      }
      dispatch(hideLoading());

      console.log(response);
    } catch (error) {
      dispatch(hideLoading());
      getError(error);
    }
  };


  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      dispatch(showLoading());
      const response = await api.post("/api/user-register", {

        firstname: firstName,
        lastname: LastName,
        mobile:mobile,
        email: email,
        password: password,
      });

      if (response?.status === 200) {
        const { user, token } = response?.data;
        const { firstname, lastname } = response?.data?.user;
        console.log(token);
        dispatch(setUser({ user, token }));
        toast.success(`Welcome ${firstname} ${lastname}. User account created successfully`);
        navigate("/");
      }
      dispatch(hideLoading());

      console.log(response);
    } catch (error) {
      dispatch(hideLoading());
      getError(error);
    }
  };



  return (
    <Form className="" onSubmit={isUserLogin ? handleLogin : isUserReg? handleRegistration: null}>
      <Card className="rounded-5 p-3 mt-3 glass-morf" style={bgStyle} data-aos='zoom-in' data-aos-duration='500' data-aos-delay="300">
        <Card.Body>
          <h1>
            {isUserLogin
              ? "User Login"
              : isUserReg
              ? "User Registration"
              : null}
          </h1>

          {isUserLogin ? (
            <p className="text-end">
              New Member? <Link to="/auth/user-reg">Register</Link>
            </p>
          ) : isUserReg ? (
            <p className="text-end">
              Already a Member? <Link to="/auth/user-login">Login</Link>
            </p>
          ) : null}

          {isUserReg ? (
            <>
              <Row>
                <Col md={6}>
                  <FromField
                    label="First Name"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col>
                  <FromField
                    label="Last Name"
                    type="text"
                    placeholder="Last Name"
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>
             
            
                  <FromField
                    label="Mobile No."
                    type="number"
                    placeholder="Mobile No."
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
               
            </>
          ) : null}
          <FromField
            label="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FromField
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Card.Body>
        <Card.Footer className="border-0">
          <Button type="submit" className="w-100 rounded-pill">
            {isLoading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : isUserLogin ? (
              "Login"
            ) : isUserReg ? (
              "Register"
            ) : null}
          </Button>
        </Card.Footer>
      </Card>
    </Form>
  );
}

export default AuthCard;
