import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const chartData = {
  labels: ["Streaming", "Productivity", "SaaS", "Cloud Storage", "Gaming", "Other"],
  datasets: [
    {
      label: "Monthly Spending (INR)",
      data: [1200, 800, 1500, 600, 1100, 500],
      backgroundColor: "#4F46E5",
      borderRadius: 10,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false, // Allows custom height
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: { beginAtZero: true },
  },
};

export default function Dashboard() {
  return (
    <div style={{ minHeight: "100vh", width: "100%", background: "#d3d0f5", padding: "2vw", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <header style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: "bold", color: "black" }}>
          Hey John!
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <nav style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <button
              style={{
                padding: "0.5em 1em",
                borderRadius: "9999px",
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
                background: "black",
                color: "white",
              }}
            >
              Dashboard
            </button>
            {["Subscriptions", "History", "Insights"].map((item) => (
              <button
                key={item}
                style={{
                  padding: "0.5em 1em",
                  borderRadius: "9999px",
                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                  fontWeight: "500",
                  border: "none",
                  cursor: "pointer",
                  background: "white",
                  color: "black",
                }}
                onClick={
                  ()=> window.location.href = `/${item.toLowerCase()}`
                }
              >
                {item} {item === "Insights" && <span>↗</span>}
              </button>
            ))}
          </nav>
          <button
            style={{
              marginLeft: "0.5rem",
              width: "2em",
              height: "2em",
              borderRadius: "9999px",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              cursor: "pointer",
              fontSize: "1.3rem",
              padding: "2%"
            }}
          >
            👤
          </button>
        </div>
      </header>

      <div style={{ display: "flex", flexDirection: "row", gap: "2rem", flexWrap: "wrap" }}>
        {/* Left Section: Subscriptions and Chart */}
        <div style={{ flex: "3", minWidth: "300px" }}>
          <div style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: "bold", color: "black" }}>
              Subscriptions
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <button
                style={{
                  marginLeft: "0.5rem",
                  width: "2em",
                  height: "2em",
                  borderRadius: "9999px",
                  background: "white",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                }}
                onClick={()=>window.location.href = '/subscriptions'}
              >
                ↗
              </button>
              <button
                style={{
                  padding: "0.5em 1em",
                  borderRadius: "9999px",
                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                  fontWeight: "500",
                  border: "none",
                  cursor: "pointer",
                  background: "white",
                  color: "black",
                }}
                onClick={()=>window.location.href = '/add'}
              >
                Add Subscription <span style={{ fontSize: "1.25em" }}>+</span>
              </button>
            </div>
          </div>

          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", marginBottom: "1.5rem" }}>
            {[
              { name: "Netflix", icon: "fa-tv", bg: "#dc2626", days: 3 },
              { name: "Spotify", icon: null, bg: "#22c55e", days: 5, isSpotify: true },
              { name: "Gaming", icon: "fa-gamepad", bg: "#808080", days: 13 },
            ].map((service, index) => (
              <div key={index} style={{ background: "white", borderRadius: "0.75rem", padding: "5%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "15%",
                      maxWidth: "3rem",
                      height: "auto",
                      aspectRatio: "1",
                      borderRadius: service.isSpotify ? "9999px" : "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: service.bg,
                    }}
                  >
                    {service.icon ? (
                      <i className={`fa-solid ${service.icon} fa-lg`} style={{ color: "white" }}></i>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" style={{ width: "60%", height: "auto" }}>
                        <path
                          d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.75 16.75C16.5 17 16 17 15.75 16.75C13.25 15.25 10 15 6.75 15.75C6.5 15.75 6 15.5 6 15C6 14.75 6.25 14.25 6.75 14.25C10.5 13.5 14 13.75 16.75 15.5C17 15.75 17 16.5 16.75 16.75ZM18 13.75C17.75 14 17.25 14 17 13.75C14 12 9.5 11.5 6.5 12.5C6.25 12.5 5.75 12.25 5.75 11.75C5.75 11.25 6 11 6.5 10.75C10 9.75 15 10.25 18.25 12.25C18.5 12.25 18.5 13.5 18 13.75ZM19.25 10.5C19 10.75 18.5 10.75 18.25 10.5C14.75 8.5 9.25 8.25 6 9.25C5.75 9.25 5.25 9 5.25 8.5C5.25 8 5.5 7.5 6 7.5C9.75 6.5 15.75 6.75 19.5 9C19.75 9 19.75 10.25 19.25 10.5Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: "500", fontSize: 24, color: "black" }}>{service.name}</h3>
                    <p style={{ color: "#6b7280" }}>Expire in {service.days} days</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "white", borderRadius: "0.75rem", padding: "2%", height: "60vh" }}>
            <h2 style={{ fontSize: "clamp(1.25rem, 3vw, 1.5rem)", fontWeight: "500", marginBottom: "1rem" , color: "black", marginBottom: "5rem"}}>
              Monthly Spending Breakdown
            </h2>
            <div style={{ height: "45vh" }}>
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Right Section: Insights */}
        <div style={{ flex: "1", minWidth: "250px", maxWidth: "350px", color: "black" }}>
          <div style={{ background: "white", borderRadius: "0.75rem", padding: "5%", height: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }} onClick={()=>nav('/insights')}>
              <h2 style={{ fontSize: "clamp(1.25rem, 3vw, 1.5rem)", fontWeight: "500" }}>Top Insights</h2>
              <span>↗</span>
            </div>
            {[
              { name: "Netflix", plan: 199, users: 2 },
              { name: "Spotify", plan: 249, users: 3 },
              { name: "Amazon Prime", plan: 299, users: 4 },
              { name: "Disney+", plan: 349, users: 5 },
            ].map((insight, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "1rem",
                  paddingBottom: index === 3 ? "0" : "1rem",
                  borderBottom: index === 3 ? "none" : "1px solid #e5e7eb",
                }}
              >
                <h3 style={{ fontSize: "clamp(1rem, 2.5vw, 1.125rem)", fontWeight: "500", marginBottom: "0.5rem", fontSize: "clamp(1.5rem, 2.5vw, 1.6rem)" }}>
                  {insight.name}
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.25rem 0.25rem", fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
                  <span style={{ color: "#6b7280" }}>Current Plan</span>
                  <span> {insight.plan} /-month</span>
                  <span style={{ color: "#6b7280" }}>Current Users</span>
                  <span>{insight.users}</span>
                  <span style={{ color: "#6b7280" }}>Insight</span>
                  <span>Cost per user {(insight.plan / insight.users).toFixed(2)} INR</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}