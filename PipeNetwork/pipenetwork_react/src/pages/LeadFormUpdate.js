import React, { useState, useEffect } from "react";
import { CDBCard, CDBCardBody, CDBSelect, CDBContainer } from "cdbreact";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import axios from "../axios/axios";
import "../css/ContactFormCreate.css";
import { NavLink, useParams } from "react-router-dom";

export const LeadFormUpdate = () => {
  const UPDATE_LEAD = "/Lead/";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fax, setFax] = useState("");
  const [job, setJob] = useState("");
  const [source, setSource] = useState("");
  const [cf, setCf] = useState("");
  const [interest, setInterest] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [msg, setMsg] = useState("");

  let leadId = useParams();
  leadId = parseInt(leadId.id);

  //set values of form at state initial of contact, before update
  useEffect(() => {
    axios
      .get(UPDATE_LEAD + leadId)
      .then((result) => {
        setFirstName(result?.data.firstName);
        setLastName(result?.data.lastName);
        setFax(result?.data.fax);
        setJob(result?.data.job);
        setSource(result?.data.source);
        setCf(result?.data.cf);
        setInterest(result?.data.interest);
        setEmail(result?.data.email);
        setPhoneNumber(result?.data.phoneNumber);
      })
      .catch((error) => console.log(error));
  }, []);

  const updateLead = async (e) => {
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
      id: leadId,
      phoneNumber: phoneNumber,
    });
    try {
      await axios
        .put(UPDATE_LEAD + leadId, json, {
          headers: { "Content-Type": "application/json" },
        })
        .then((result) => {
          if (result.status === 204) {
            setMsg("Il lead è stato aggiornato con successo!");
          }
        })
        .catch((error) => console.log(error));
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
            <p className="h4"> Update Lead </p>
          </div>
          <form onSubmit={updateLead}>
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
              Update
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
