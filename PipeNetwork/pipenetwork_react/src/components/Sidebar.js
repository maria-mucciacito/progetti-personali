import React, { useState,useEffect } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "../css/Sidebar.css";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  let [user,setUser] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
      setUser(JSON.parse(localStorage.getItem("user")));
  },[]); 

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  }

  return (
    <CDBSidebar
      textColor="#fff"
      backgroundColor="#333"
      className="side-bar-cdb"
    >
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <a
          href="/"
          className="text-decoration-none"
          style={{ color: "inherit" }}
        >
          PipeNetwork l.t.d.
        </a>
      </CDBSidebarHeader>
      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <NavLink
            exact="true"
            to="/"
            className={(navData) =>
              navData.isActive ? "activeClicked" : "none"
            }
          >
            <CDBSidebarMenuItem icon="chart-line">Dashboard</CDBSidebarMenuItem>
          </NavLink>
          <NavLink
            exact="true"
            to="/contacts"
            className={(navData) =>
              navData.isActive ? "activeClicked" : "none"
            }
          >
            <CDBSidebarMenuItem icon="user">Contacts</CDBSidebarMenuItem>
          </NavLink>
          <NavLink
            exact="true"
            to="/leads"
            className={(navData) =>
              navData.isActive ? "activeClicked" : "none"
            }
          >
            <CDBSidebarMenuItem icon="user">Leads</CDBSidebarMenuItem>
          </NavLink>
          <NavLink
            exact="true"
            to="/analytics"
            className={(navData) =>
              navData.isActive ? "activeClicked" : "none"
            }
          >
            <CDBSidebarMenuItem icon="table">Tasks</CDBSidebarMenuItem>
          </NavLink>
          <NavLink
            exact="true"
            to="/analytics"
            className={(navData) =>
              navData.isActive ? "activeClicked" : "none"
            }
          >
            <CDBSidebarMenuItem icon="table">Ticket</CDBSidebarMenuItem>
          </NavLink>
          <NavLink
            exact="true"
            to="/analytics"
            className={(navData) =>
              navData.isActive ? "activeClicked" : "none"
            }
          >
            <CDBSidebarMenuItem icon="chart-line">Deal</CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>
      <CDBSidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 5px",
          }}
        >
            <Dropdown>
              <Dropdown.Toggle variant="dark">{user?.username}</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};
export default Sidebar;
