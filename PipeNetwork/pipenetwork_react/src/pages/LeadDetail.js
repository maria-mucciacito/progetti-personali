import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios/axios";
import "../css/ContactDetail.css";
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

export const LeadDetail = () => {
  let leadId = useParams();
  leadId = parseInt(leadId.id);
  const [lead, setLead] = useState({});
  let [addressLead, setAddressLead] = useState({});

  useEffect(() => {
    axios
      .get("/Lead/" + leadId)
      .then((result) => {
        setLead(result?.data);
      })
      .catch((error) => console.log(error));
  });

  useEffect(() => {
    axios
      .get("/Address")
      .then((response) => {
        response?.data.forEach((element) => {
          if (element.lead === lead.id) {
            setAddressLead(element);
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
          <h1 className="text-center">Lead Page</h1>
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
                  <MDBTypography tag="h5">
                    {lead.firstName} {lead.lastName}
                  </MDBTypography>
                  <MDBCardText>{lead.job}</MDBCardText>
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">
                          {lead.email}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone Number</MDBTypography>
                        <MDBCardText className="text-muted">
                          {lead.phoneNumber}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Fax</MDBTypography>
                        <MDBCardText className="text-muted">
                          {lead.fax}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Source</MDBTypography>
                        <MDBCardText className="text-muted">
                          {lead.source}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">CF</MDBTypography>
                        <MDBCardText className="text-muted">
                          {lead.cf}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Interest</MDBTypography>
                        <MDBCardText className="text-muted">
                          {lead.interest}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Address</MDBTypography>
                        <MDBCardText className="text-muted">
                          {addressLead ? (
                            <>
                              {addressLead.street} {addressLead.houseNumber}{" "}
                              {addressLead.city} {addressLead.state}
                              {addressLead.post_code}
                            </>
                          ) : (
                            <></>
                          )}
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
