import React, { useEffect } from "react";
import L from "leaflet";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const map = L.map("map").setView([28.7041, 77.1025], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap",
    }).addTo(map);

    L.marker([28.7041, 77.1025]).addTo(map);
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left Side: MAP */}
      <div id="map" style={{ width: "50%" }}></div>

      {/* Right Side: CONTENT */}
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/463/463612.png"
          width="100"
          alt="alert"
        />

        <h2
          style={{ textAlign: "center", maxWidth: "350px", marginTop: "20px" }}
        >
          This system is designed to send alert notifications and respond to any
          type of emergency.
        </h2>

        <button
          onClick={() => navigate("/description")}
          style={{
            width: "70%",
            padding: "15px",
            background: "#e53935",
            color: "white",
            border: "none",
            borderRadius: "7px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Send Alert
        </button>

        <button
          onClick={() => navigate("/description")}
          style={{
            width: "70%",
            padding: "15px",
            background: "white",
            color: "#e53935",
            border: "2px solid #e53935",
            borderRadius: "7px",
            marginTop: "15px",
            cursor: "pointer",
          }}
        >
          Description
        </button>

        <button
          onClick={() => navigate("/about")}
          style={{
            width: "70%",
            padding: "15px",
            background: "white",
            color: "#1e88e5",
            border: "2px solid #1e88e5",
            borderRadius: "7px",
            marginTop: "15px",
            cursor: "pointer",
          }}
        >
          About System
        </button>
      </div>
    </div>
  );
}

export default Home;
