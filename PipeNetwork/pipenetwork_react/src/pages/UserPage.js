import React from "react";
import { useEffect, useState } from "react";
import axios from "../axios/axios";
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
import "../css/UserPage.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const UserPage = () => {
  let [user, setUser] = useState({});
  let [activity, setActivity] = useState([]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  },[]);

  const handleActivity = async () => {
    try {
      await axios
        .get("/Activity", {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        })
        .then((res) => {
          setActivity(res?.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleActivity();
  }, []);

  let [addressUser, setAddressUser] = useState();
  const [deleteId, setDeleteId] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setDeleteId(id);
  };

  useEffect(() => {
    axios
      .get("/Address")
      .then((res) => {
        res?.data.forEach((el) => {
          if (el.user === user.id) {
            setAddressUser(el);
        }});
      })
      .catch((error) => console.log(error));
  },[]);

  const activityDelete = (id, e) => {
    e.stopPropagation();
    axios
      .delete(`/Activity/${id}`)
      .then((result) => {
        setShow(false);
      })
      .catch((err) => console.log(err));
  };

  let cardActivity = activity.map((data, index) => {
    if (data.user === user.id) {
      return (
        <MDBCol lg="6" className="mb-4 mb-lg-0 mt-4" key={data.id}>
          <MDBCard>
            <MDBCardHeader className="text-muted">
              {data.date} {data.time}
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>{data.type}</MDBCardTitle>
              <MDBCardText>{data.description}</MDBCardText>
              <MDBBtn color="danger" onClick={() => handleShow(data.id)}>
                Delete
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      );
    } else {
      return;
    }
  });

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Sei sicuro di voler eliminare quest'attività?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => activityDelete(deleteId, e)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <section className="vh-100 user-detail">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="mt-3">
            {" "}
            <h1 className="text-center">User Page</h1>
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
                      {user.firstName} {user.lastName}
                    </MDBTypography>
                    <MDBCardText>{user.job}</MDBCardText>
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">
                            {user.email}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone Number</MDBTypography>
                          <MDBCardText className="text-muted">
                            {user.phoneNumber}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Fax</MDBTypography>
                          <MDBCardText className="text-muted">
                            {user.fax}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Role</MDBTypography>
                          <MDBCardText className="text-muted">
                            {user.role}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow className="pt-1">
                        <MDBCol size="8" className="mb-3">
                          <MDBTypography tag="h6">CF</MDBTypography>
                          <MDBCardText className="text-muted">
                            {user.cf}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow className="pt-1">
                        <MDBCol size="8" className="mb-3">
                          <MDBTypography tag="h6">Address</MDBTypography>
                          <MDBCardText className="text-muted">
                            {
                            addressUser ? 
                            <>
                            {addressUser.street} {addressUser.houseNumber}{" "}
                            {addressUser.city} {addressUser.state}
                            {addressUser.post_code }
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
          <MDBRow className="mt-5">
            <h1 className="text-center">Activity</h1>
          </MDBRow>
          <MDBRow className=" m-3 mt-5">{cardActivity}</MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};
