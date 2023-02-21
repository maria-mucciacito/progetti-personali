import React,{useState,useEffect} from "react";
import { CDBCard, CDBCardBody } from "cdbreact";
import axios from "axios";

export const TasksByState = () => {
  let [tasks, setTasks] = useState({});
  const handleTasks = async () => {
    try {
      await axios
        .get("http://localhost:4567/taskbystate", {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        })
        .then((response) => {
          setTasks(response?.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleTasks();
  }, );

  return (
    <>
      <div className="col-3 m-3 ">
        <CDBCard
          style={{ width: "15rem", backgroundColor: "#d63939" }}
          className="bordi"
        >
          <CDBCardBody className="m-2">
            <h1 className="lead">WAITING TASK</h1>
            <h2>{tasks.waiting ? tasks.waiting : 0} task</h2>
          </CDBCardBody>
        </CDBCard>
      </div>
      <div className="col-3 m-3">
        <CDBCard
          style={{ width: "15rem", backgroundColor: "#fde937" }}
          className="bordi"
        >
          <CDBCardBody className="m-2">
            <h1 className="lead">IN PROGRESS TASK</h1>
            <h2>{tasks.in_progress ? tasks.in_progress : 0} task</h2>
          </CDBCardBody>
        </CDBCard>
      </div>
      <div className="col-3 m-3">
        <CDBCard
          style={{ width: "15rem", backgroundColor: "#27c239" }}
          className="bordi"
        >
          <CDBCardBody className="m-2">
            <h1 className="lead">COMPLETED TASK</h1>
            <h2>{tasks.completed ? tasks.completed : 0} task</h2>
          </CDBCardBody>
        </CDBCard>
      </div>
    </>
  );
};
