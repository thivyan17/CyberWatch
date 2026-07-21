import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00"],
  datasets: [
    {
      label: "Failed Logins",
      data: [8, 14, 11, 23, 18, 29, 21],
      borderColor: "#39d98a",
      backgroundColor: "rgba(57, 217, 138, 0.12)",
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
    {
      label: "Blocked Events",
      data: [3, 7, 5, 12, 9, 16, 13],
      borderColor: "#ff6b7a",
      backgroundColor: "rgba(255, 107, 122, 0.08)",
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    legend: {
      labels: {
        color: "#cbd8e6",
        usePointStyle: true,
      },
    },
    tooltip: {
      backgroundColor: "#08111f",
      titleColor: "#ffffff",
      bodyColor: "#cbd8e6",
      borderColor: "#2b405b",
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#8091a5",
      },
      grid: {
        color: "rgba(128, 145, 165, 0.08)",
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: "#8091a5",
        stepSize: 5,
      },
      grid: {
        color: "rgba(128, 145, 165, 0.08)",
      },
    },
  },
};

function ThreatChart() {
  return (
    <section className="chart-section">
      <div className="section-heading">
        <div>
          <p className="page-label">Threat analytics</p>
          <h2>Security Activity</h2>
        </div>

        <span className="chart-period">Last 7 hours</span>
      </div>

      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </section>
  );
}

export default ThreatChart;