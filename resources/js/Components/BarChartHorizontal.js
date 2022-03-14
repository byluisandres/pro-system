import React, { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const BarChartHorizontal = () => {
    const [purchases, setPurchases] = useState();
    var labels = [],
        dataBar = [];
    const url = "http://127.0.0.1:8000/chart/purchases";
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setPurchases(data));
    }, []);

    for (const key in purchases) {
        labels.push(key);
        dataBar.push(purchases[key]);
    }

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    const options = {
        indexAxis: "y",
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Compras mes a mes",
            },
        },
    };
    const data = {
        labels,
        datasets: [
            {
                label: "Cantidad",
                data: dataBar,
                backgroundColor: [
                    "rgba(165, 42, 42,0.2)",
                    "rgba(95, 158, 160,0.2)",
                    "rgba(222, 184, 135,0.2)",
                    "rgba(0, 139, 139,0.2)",
                    "rgba(127, 255, 0,0.2)",
                    "rgba(210, 105, 30,0.2)",
                    "rgba(255, 127, 80,0.2)",
                    "rgba(100, 149, 237,0.2)",
                    "rgba(255, 248, 220,0.2)",
                    "rgba(220, 20, 60,0.2)",
                    "rgba(0, 255, 255,0.2)",
                    "rgba(0, 0, 139,0.2)",
                    "rgba(0, 139, 139,0.2)",
                ],
                borderColor: [
                    "rgba(165, 42, 42,1)",
                    "rgba(95, 158, 160,1)",
                    "rgba(222, 184, 135,1)",
                    "rgba(0, 139, 139,1)",
                    "rgba(127, 255, 0,1)",
                    "rgba(210, 105, 30,1)",
                    "rgba(255, 127, 80,1)",
                    "rgba(100, 149, 237,1)",
                    "rgba(255, 248, 220,1)",
                    "rgba(220, 20, 60,1)",
                    "rgba(0, 255, 255,1)",
                    "rgba(0, 0, 139,1)",
                    "rgba(0, 139, 139,1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    return <Bar options={options} data={data} height={120} />;
};

export default BarChartHorizontal;
