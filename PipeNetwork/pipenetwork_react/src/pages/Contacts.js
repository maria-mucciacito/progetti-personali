import React, { useState, useEffect } from "react";
import "../css/Contacts.css";
import { CDBTable, CDBTableHeader, CDBTableBody, CDBBtn } from "cdbreact";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "../axios/axios";
import { NavLink } from "react-router-dom";

export const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("/Contact")
      .then((result) => {
        setContacts(result?.data);
      })
      .catch((error) => console.log(error));
  });

  const [deleteId, setDeleteId] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setDeleteId(id);
  };

  const postDelete = (id, e) => {
    e.stopPropagation();
    axios
      .delete(`/Contact/${id}`)
      .then((result) => {
        setShow(false);
      })
      .catch((err) => console.log(err));
  };

  const arr = contacts
    .filter((data) => {
        if(query.toLowerCase() === ''){
            return data;
        } else{
            return data.lastName.toLowerCase().includes(query);
        }
    })
    .map((data, index) => {
      return (
        <tr key={data.id}>
          <td>
            <NavLink exact="true" to={`/contacts/${data.id}`}>
              {data.id}
            </NavLink>
          </td>

          <td>{data.firstName}</td>
          <td>{data.lastName}</td>
          <td>{data.job}</td>
          <td>{data.email}</td>
          <td>
            <CDBBtn
              size="small"
              color="danger"
              onClick={() => handleShow(data.id)}
            >
              <i className="bi bi-trash"></i>
            </CDBBtn>
            <CDBBtn size="small" color="success">
              <a href={`/contacts/update/${data.id}`}>
                <i className="bi bi-pencil"></i>
              </a>
            </CDBBtn>
          </td>
        </tr>
      );
    });

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Sei sicuro di voler eliminare questo contatto?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => postDelete(deleteId, e)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="container">
        <div className="row mt-5 m-4 ">
          <div className="col-7 mt-3">
            <h2 prefix={<i className="fa fa-bars" />}>Contact List</h2>
          </div>
          <div className="col-3 mt-4">
            <input
              type="text"
              name="search"
              placeholder="Search for last name..."
              onChange={(e) => {
                setQuery(e.target.value.toLowerCase());
              }}
            />
          </div>
          <div className="col-2 mt-3">
            <a href="/contacts/create">
              <CDBBtn color="dark">+ Add</CDBBtn>
            </a>
          </div>
        </div>
        <div className="row m-3 mt-5">
          <CDBTable>
            <CDBTableHeader>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Job</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </CDBTableHeader>
            <CDBTableBody>{arr}</CDBTableBody>
          </CDBTable>
        </div>
      </div>
    </>
  );
};
