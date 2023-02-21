import React, { useEffect, useState } from "react";
import "../css/Dashboard.css";
import { Chart, registerables } from "chart.js";
import { DealByState } from "../components/DealByState";
import { LeadBySource } from "../components/LeadBySource";
import { TasksByState } from "../components/TasksByState";
import axios from "axios";
import { Line,Bar } from "react-chartjs-2";
Chart.register(...registerables);

export const Dashboard = () => {

  let [taskForMonthLine, setTaskForMonthLine] = useState({
    datasets: [],
  });

  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let months = [];

  const handleTasksMonthLine = async () => {
    try {
      await axios
        .get("http://localhost:4567/taskformonth", {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        })
        .then((rsl) => {
          var keys = Object.keys(rsl?.data);
          keys.forEach((element) => {
            months.push(MONTHS[element - 1]);
          });
          setTaskForMonthLine({
            labels: months,
            datasets: [
              {
                label: "Task",
                backgroundColor: "indigo",
                borderColor: "coral",
                data: Object.values(rsl?.data),
              },
            ],
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleTasksMonthLine();
  }, );

  return (
    <div className="main">
      <div className="row m-3">
        <h1 className="text-center">
          <b>Dashboard</b>
        </h1>
      </div>
      <div className="row m-5 text-white">
        <TasksByState/>
      </div>
      <div className="row m-3">
        <div className="col-6">
          <Bar data={taskForMonthLine} options={{ responsive: true }} />
        </div>
        <div className="col-6 ">
          <Line data={taskForMonthLine} options={{ responsive: true }} />
        </div>
      </div>
      <div className="row m-3">
        <div className="col-6">
          <DealByState/>
        </div>
        <div className="col-6 ">
          <LeadBySource/>
        </div>
      </div>
    </div>
  );
};
