import React, { useState } from "react";
import axios from "axios";
import "./Description.css";

function Description() {
  const [description, setDescription] = useState("");
  const [prediction, setPrediction] = useState("");

  const handleSubmit = async () => {
    try {
      // ML Prediction API
      const mlRes = await axios.post("/api/ml/predict/", {
        description: description,
      });

      setPrediction(mlRes.data.prediction);

      // Save Report API
      const reportRes = await axios.post("/api/reports/", {
        description: description,
        predicted: mlRes.data.prediction,
        latitude: 28.7041,
        longitude: 77.1025,
      });

      alert("Report submitted. ID: " + reportRes.data.id);
    } catch (error) {
      alert("Failed to submit report");
      console.log(error);
    }
  };

  return (
    <div className="desc-container">
      <div className="desc-card">
        <h1 className="desc-title">Emergency Description</h1>

        <textarea
          className="desc-textarea"
          placeholder="Type the emergency description here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="desc-submit" onClick={handleSubmit}>
          Submit Alert
        </button>

        <div className="ml-box">
          <h3>ML Prediction:</h3>
          <p className="ml-pred">{prediction || "—"}</p>
        </div>
      </div>
    </div>
  );
}

export default Description;
