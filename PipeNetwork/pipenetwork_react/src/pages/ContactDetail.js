import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios/axios";
import '../css/ContactDetail.css';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBBtn,
  MDBCardHeader,
  MDBCardTitle,
} from "mdb-react-ui-kit";

export const ContactDetail = () => {
  let contactId  = useParams();
  contactId = parseInt(contactId.id);
  const [contact, setContact] = useState({});
  let [address,setAddress] = useState({});

  useEffect(() => {
    axios
      .get("/Contact/" + contactId)
      .then((result) => {
        setContact(result?.data);
      })
      .catch((error) => console.log(error));
  });


  useEffect(() => {
    axios
      .get("/Address")
      .then((res) => {
        res?.data.forEach(element => {
          if(element.contact === contactId){
            setAddress(element);
          }
        });
      })
      .catch((error) => console.log(error));
  });

  return (
    <section className="vh-100 contact-detail">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="mt-3">
          {" "}
          <h1 className="text-center">Contact Page</h1>
        </MDBRow>
        <MDBRow className="justify-content-center align-items-center mt-5">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="gradient-custom text-center"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar"
                    className="my-5"
                    style={{ width: "80px" }}
                    fluid
                  />
                  <MDBTypography tag="h5">{contact.firstName}  {contact.lastName}</MDBTypography>
                  <MDBCardText>{contact.job}</MDBCardText>
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">
                          {contact.email}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone Number</MDBTypography>
                        <MDBCardText className="text-muted">
                          {contact.phoneNumber}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                   
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Fax</MDBTypography>
                        <MDBCardText className="text-muted">
                          {contact.fax}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Company</MDBTypography>
                        <MDBCardText className="text-muted">
                          {contact.company}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                        
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">CF</MDBTypography>
                        <MDBCardText className="text-muted">
                          {contact.cf}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Birthday Date</MDBTypography>
                        <MDBCardText className="text-muted">
                          {contact.birthdayDate}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Address</MDBTypography>
                        <MDBCardText className="text-muted">
                        {
                            address ? 
                            <>
                            {address.street} {address.houseNumber}{" "}
                            {address.city} {address.state}
                            {address.post_code }
                            </>
                            :
                            <></>}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
