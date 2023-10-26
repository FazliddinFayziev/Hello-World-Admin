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

const WeekGraph = ({ weekOrders }) => {
    const data = {
        labels: ["Mon", "Tue", "Wen", "Thu", "Friday", "Sat", "Sun"],
        datasets: [
            {
                label: "Weekly Orders",
                data: weekOrders,
                fill: true,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",
            },
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

export default WeekGraph;