import React, { useState, useEffect } from "react";
import axios from "axios";
import { Radar } from "react-chartjs-2";

export const DealByState = () => {
  let [dealByState, setDealByState] = useState({
    datasets: [],
  });
  const handleDeals = async () => {
    try {
      await axios
        .get("http://localhost:4567/dealbystate", {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        })
        .then((res) => {
          setDealByState({
            labels: Object.keys(res?.data),
            datasets: [
              {
                label: "PipeLine Deals",
                backgroundColor: "darkgrey",
                borderColor: "rgb(194, 116, 161)",
                data: Object.values(res?.data),
              },
            ],
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleDeals();
  }, );
  return <Radar data={dealByState} options={{ responsive: true }} />;
};
