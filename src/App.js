import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./header.css";
import "bootstrap/dist/css/bootstrap.css";
import SectionOne from "./components/SectionOne";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Triangle } from "react-loader-spinner";

// import video from "./video.mp4";

function App() {
  const [prediction, setPrediction] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchPredictions = () => {
    return fetch("https://api-football-v1.p.rapidapi.com/v3/fixtures?next=50", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "b8c9e70753msh5918b828c8a46b1p13241ajsn6701be1cb400",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setTimeout(function () {
          setPrediction(response);
          setLoading(false);
        }, 2000);

        // setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchPredictions();
  }, []);

  if (loading) {
    return (
      <div className="loading-page">
        <Triangle
          height="100"
          width="100"
          color="#f5054f"
          ariaLabel="loading"
        />
        <p className="loadingpagetext">Otito's Soccer Prediction</p>
      </div>
    );
  }
  return (
    <>
      <Header />
      <main>
        <SectionOne predictions={prediction} />
      </main>
    </>
  );
}

export default App;
