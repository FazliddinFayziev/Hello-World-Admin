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
    labels: ["Mon", "Tue", "Wen", "Thu", "Friday", "Sat", "Sun"],
    datasets: [
        {
            label: "Simple",
            data: [40, 53, 85, 41, 44, 65, 80],
            fill: true,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(75,192,192,1)",
        },
        {
            label: "Humble",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            backgroundColor: "green",
            borderColor: "green"
        },
        {
            label: "Elegant",
            data: [10, 20, 30, 32, 20, 60],
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

const WeekGraph = () => {
    return (
        <Line
            data={data}
            options={config}
        />
    );
};

export default WeekGraph;