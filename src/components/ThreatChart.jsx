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

function ThreatChart({ logs }) {
  const activityByHour = {};

  logs.forEach((log) => {
    const hour = log.timestamp?.slice(11, 13);

    if (!hour) {
      return;
    }

    const label = `${hour}:00`;

    if (!activityByHour[label]) {
      activityByHour[label] = {
        failedLogins: 0,
        blockedEvents: 0,
      };
    }

    if (log.event === "Failed Login") {
      activityByHour[label].failedLogins += 1;
    }

    if (log.status === "Blocked") {
      activityByHour[label].blockedEvents += 1;
    }
  });

  const labels = Object.keys(activityByHour).sort();

  const data = {
    labels,
    datasets: [
      {
        label: "Failed Logins",
        data: labels.map(
          (label) => activityByHour[label].failedLogins
        ),
        borderColor: "#39d98a",
        backgroundColor: "rgba(57, 217, 138, 0.12)",
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: "Blocked Events",
        data: labels.map(
          (label) => activityByHour[label].blockedEvents
        ),
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
          stepSize: 1,
          precision: 0,
        },
        grid: {
          color: "rgba(128, 145, 165, 0.08)",
        },
      },
    },
  };

  return (
    <section className="chart-section">
      <div className="section-heading">
        <div>
          <p className="page-label">Threat analytics</p>
          <h2>Security Activity</h2>
        </div>

        <span className="chart-period">
          {labels.length} active hour{labels.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="chart-container">
        {labels.length > 0 ? (
          <Line data={data} options={options} />
        ) : (
          <p className="empty-threats">
            No activity data available.
          </p>
        )}
      </div>
    </section>
  );
}

export default ThreatChart;