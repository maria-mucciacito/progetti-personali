import React, { useState } from "react";
import {
  CDBCard,
  CDBCardBody,
  CDBSelect,
  CDBContainer,
} from "cdbreact";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import axios from "../axios/axios";
import '../css/ContactFormCreate.css';
import { NavLink } from "react-router-dom";

export const ContactFormCreate = () => {
  const CREATE_CONTACT = "/Contact";

  var [option, setOption] = useState([]);
  /*var [dataCompanies,setDataCompanies] = useState([]);
    const obtainCompanies = async (e)=>{ 
      //e.preventDefault(); 
      try {
        await axios.get("/Company",
            {
                headers: {'Content-Type': 'application/json'}
            }).then(result => { 
                setDataCompanies(result.data)
            }).catch(error => console.log(error))
     
      } catch (error) {
          console.log(error)
      } 
    }*/

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fax, setFax] = useState("");
  const [job, setJob] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [cf, setCf] = useState("");
  const [company, setCompany] = useState(null);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [msg, setMsg] = useState("");

  const createContact = async (e) => {
    e.preventDefault();
    let json = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      fax: fax,
      job: job,
      birthdayDate: birthdayDate.toString(),
      cf: cf,
      company: company,
      email: email,
      phoneNumber: phoneNumber,
    });
    try {
      await axios
        .post(CREATE_CONTACT, json, {
          headers: { "Content-Type": "application/json" },
        })
        .then((result) => {
          if (result.status === 201) {
            setMsg("Il nuovo contatto è stato inserito con successo!");
          }
          console.log(msg);
        })
        .catch((error) => console.log(error));

      setLastName("");
      setFirstName("");
      setBirthdayDate("");
      setJob("");
      setFax("");
      setCf("");
      setCompany("");
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
            <p className="h4"> New Contact </p>
          </div>
          <form onSubmit={createContact}>
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
              type="eamil"
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
              label="Birthday Date"
              id="birthdayDate"
              type="date"
              name="birthdayDate"
              required
              value={birthdayDate}
              className="my-3"
              onChange={(e) => setBirthdayDate(e.target.value)}
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
            <p className="m-0">Company</p>
            <CDBSelect options={option} />
            <MDBBtn
              color="dark"
              className="btn-block my-3 mx-0"
              type="submit"
            >
              Create
            </MDBBtn>
          </form>
        </CDBCardBody>
      </CDBCard>
      <NavLink to="/contacts" className="text-center my-3"> Go to Contacts</NavLink>
    </CDBContainer>
  );
};
