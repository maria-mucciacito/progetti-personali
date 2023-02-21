import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

export const LeadBySource = () => {

    let [dataLeadBySource, setDataLeadBySource] = useState({
        datasets: [],
    });

    const handleLeads = async () => {

        try {
            await axios
                .get("http://localhost:4567/leadbysource", {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods":
                            "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    },
                })
                .then((rs) => {
                    setDataLeadBySource({
                        labels: Object.keys(rs?.data),
                        datasets: [
                            {
                                label: "Open Leads",
                                backgroundColor: "darkturquoise",
                                borderColor: "grey",
                                data: Object.values(rs?.data),
                            },
                        ],
                    });
                });
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        handleLeads();
    }, );
    
    return (
        <Pie data={dataLeadBySource} options={{ responsive: true }} />
    )
}
