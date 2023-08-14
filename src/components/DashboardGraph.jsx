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

const data = {
    labels: ["Week-1", "Week-2", "Week-3", "Week-4"],
    datasets: [
        {
            label: "Simple",
            data: [28, 12, 31, 20],
            fill: true,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(75,192,192,1)",
        },
        {
            label: "Humble",
            data: [8, 10, 15, 12],
            fill: false,
            backgroundColor: "green",
            borderColor: "green"
        },
        {
            label: "Elegant",
            data: [2, 8, 5, 6],
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

const DashboardGraph = () => {
    return (
        <Line
            data={data}
            options={config}
        />
    );
};

export default DashboardGraph;