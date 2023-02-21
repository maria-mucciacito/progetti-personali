import React, { useState, useEffect } from "react";
import { CDBCard, CDBCardBody, CDBSelect, CDBContainer } from "cdbreact";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import axios from "../axios/axios";
import "../css/ContactFormCreate.css";
import { NavLink } from "react-router-dom";

export const LeadFormCreate = () => {
  const CREATE_LEAD = "/Lead";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fax, setFax] = useState("");
  const [job, setJob] = useState("");
  const [source, setSource] = useState("");
  const [cf, setCf] = useState("");
  const [interest, setInterest] = useState("");
  const [email,setEmail] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");
  const [msg, setMsg] = useState("");

  const createLead = async (e) => {
    e.preventDefault();
    let json = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      fax: fax,
      job: job,
      source: source,
      cf: cf,
      interest: interest,
      email: email,
      phoneNumber:phoneNumber
    });
    try {
      await axios
        .post(CREATE_LEAD, json, {
          headers: { "Content-Type": "application/json" },
        })
        .then((result) => {
          if (result.status === 201) {
            setMsg("Il nuovo lead è stato inserito con successo!");
          }
        })
        .catch((error) => console.log(error));
        console.log(json)
      setLastName("");
      setFirstName("");
      setSource("");
      setJob("");
      setFax("");
      setCf("");
      setInterest("");
      setEmail("");
      setPhoneNumber("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CDBContainer className="m-5 cards h-100">
      <h3>{msg}</h3>
      <CDBCard style={{ width: "50rem" }}>
        <CDBCardBody className="mx-4">
          <div className="text-center mt-4 mb-4 m-4">
            <p className="h4"> New Lead </p>
          </div>
          <form onSubmit={createLead}>
            <MDBInput
              label="First Name"
              id="firstName"
              type="text"
              name="firstName"
              required
              value={firstName}
              className="my-3"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <MDBInput
              label="Last Name"
              id="lastName"
              type="text"
              name="lastName"
              required
              value={lastName}
              className="my-3"
              onChange={(e) => setLastName(e.target.value)}
            />
            <MDBInput
              label="Email"
              id="email"
              type="email"
              name="email"
              required
              value={email}
              className="my-3"
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              label="Phone Number"
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              required
              value={phoneNumber}
              className="my-3"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <MDBInput
              label="Fax"
              id="fax"
              type="text"
              name="fax"
              required
              value={fax}
              className="my-3"
              onChange={(e) => setFax(e.target.value)}
            />
            <MDBInput
              label="Job"
              id="job"
              type="text"
              name="job"
              required
              className="my-3"
              onChange={(e) => setJob(e.target.value)}
              value={job}
            />
            <MDBInput
              label="Source"
              id="source"
              type="text"
              name="source"
              required
              value={source}
              className="my-3"
              onChange={(e) => setSource(e.target.value)}
            />
            <MDBInput
              label="CF"
              id="cf"
              type="text"
              name="cf"
              required
              onChange={(e) => setCf(e.target.value)}
              value={cf}
              className="my-3"
            />
            <MDBInput
              label="Interest"
              id="interest"
              type="text"
              name="interest"
              required
              onChange={(e) => setInterest(e.target.value)}
              value={interest}
              className="my-3"
            />

            <MDBBtn color="dark" className="btn-block my-3 mx-0" type="submit">
              Create
            </MDBBtn>
          </form>
        </CDBCardBody>
      </CDBCard>
      <NavLink to="/leads" className="text-center my-3">
        {" "}
        Go to Leads
      </NavLink>
    </CDBContainer>
  );
};
