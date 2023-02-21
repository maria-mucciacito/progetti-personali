import React, { useState, useEffect, useRef } from "react";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import "../css/Login.css";
import { Button } from "react-bootstrap";
import logo from "../images/logo.png";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "../axios/axios";
import { useNavigate } from "react-router-dom";

//api per effettuare il login
const LOGIN_URL = "/UserLogin/login";

export const Login = () => {
  const usernameRef = useRef();
  const errRef = useRef();

  //set delle variabili per il login
  const [accessToken, setAccessToken] = useState("");
  const [auth, setAuth] = useState({});
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    usernameRef?.current?.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let jsons = JSON.stringify({ username: username, password: pwd });
    try {
      await axios
        .post(LOGIN_URL, jsons, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          if (response.data.accessToken) {
            setAccessToken(response.data.accessToken);
            setAuth({ username, pwd, accessToken });
            localStorage.setItem("user", JSON.stringify(response.data));
            navigate("/");
            window.location.reload();
          }
          return response.data;
        })
        .catch((error) => console.log(error));

      console.log(auth)
      setUsername("");
      setPwd("");
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing username or Password");
      } else if (error.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
      }
      errRef?.current?.focus();
    }
  };

  return (
    <>
      <p ref={errRef} className={errMsg ? "errmsg text-center m-5" : "offscreen text-center"}>
        {errMsg}
      </p>
      <MDBContainer
        className="h-100 d-flex justify-content-center my-3"
        id="main-container"
      >
        <form
          className="text-center w-100"
          onSubmit={handleSubmit}
          id="sign-in-form"
        >
          <img className="mb-5" src={logo} alt="logo azienda"></img>
          <h1 className="fs-3 fw-normal mb-4">Sign In</h1>
          <MDBInput
            className="mb-2"
            type="text"
            id="username"
            label="Username"
            name="username"
            inputRef={usernameRef}
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required={true}
          />
          <MDBInput
            className="mb-2"
            type="password"
            id="pwd"
            label="Password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            name="pwd"
            required={true}
          />

          <Button variant="info" className="mt-4" size="md" type="submit">
            Sign in
          </Button>
        </form>
      </MDBContainer>
    </>
  );
};
