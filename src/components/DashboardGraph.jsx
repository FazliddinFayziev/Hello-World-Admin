import React from "react";
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardGraph = ({ monthOrders }) => {
    const data = {
        labels: ["Week-1", "Week-2", "Week-3", "Week-4"],
        datasets: [
            {
                label: "Monthly Orders",
                data: monthOrders,
                fill: false,
                backgroundColor: "orange",
                borderColor: "orange"
            }
        ]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Line Chart'
                }
            }
        },
    };
    return (
        <Line
            data={data}
            options={config}
        />
    );
};

export default DashboardGraph;