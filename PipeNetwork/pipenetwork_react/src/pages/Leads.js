import React,{useState,useEffect} from "react";
import { CDBTable, CDBTableHeader, CDBTableBody, CDBBtn } from "cdbreact";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "../axios/axios";
import { NavLink } from "react-router-dom";
import '../css/Leads.css';

export const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [queryLead, setQueryLead] = useState("");

  useEffect(() => {
    axios
      .get("/Lead")
      .then((result) => {
        setLeads(result?.data);
      })
      .catch((error) => console.log(error));
  });

  const [deleteIdLead, setDeleteIdLead] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setDeleteIdLead(id);
  };

  const leadDelete = (id, e) => {
    e.stopPropagation();
    axios
      .delete(`/Lead/${id}`)
      .then((result) => {
        setShow(false);
      })
      .catch((err) => console.log(err));
  };

  const arrLead = leads
    .filter((data) => {
      if (queryLead.toLowerCase() === "") {
        return data;
      } else {
        return data.lastName.toLowerCase().includes(queryLead);
      }
    })
    .map((data, index) => {
      return (
        <tr key={data.id}>
          <td>
            <NavLink exact="true" to={`/leads/${data.id}`}>
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
              <a href={`/leads/update/${data.id}`}>
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
            Sei sicuro di voler eliminare questo lead?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => leadDelete(deleteIdLead, e)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="container">
        <div className="row mt-5 m-4 ">
          <div className="col-7 mt-3">
            <h2 prefix={<i className="fa fa-bars" />}>Lead List</h2>
          </div>
          <div className="col-3 mt-4">
            <input
              type="text"
              name="search"
              placeholder="Search for last name..."
              onChange={(e) => {
                setQueryLead(e.target.value.toLowerCase());
              }}
            />
          </div>
          <div className="col-2 mt-3">
            <a href="/leads/create">
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
            <CDBTableBody>{arrLead}</CDBTableBody>
          </CDBTable>
        </div>
      </div>
    </>
  );
};
