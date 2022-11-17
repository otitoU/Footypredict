import React, { useState } from "react";
import Fixture from "./Fixture";

// homeLogo, homeName, awayLogo, awayName,
const SectionOne = ({ predictions }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [fixtureShow, setFixtureShow] = useState(true);
  const [fixture, setFixture] = useState({});
  const showAndHideColumn = () => {
    setShowInfo(true);
  };

  return (
    <>
      <section className="section-one">
        {predictions.response.slice(1, 30).map((prediction, index) => {
          return (
            <>
              <div className="league-properties" key={index}>
                <img
                  src={prediction.league.flag}
                  alt={prediction.league.name}
                  className="img"
                />
                <div className="nameandcountry">
                  <h6>{prediction.league.name}</h6>
                  <div className="country-name">
                    {prediction.league.country}
                  </div>
                </div>
              </div>
              <Fixture
                key={prediction.fixture.id}
                {...prediction}
                showAndHideColumn={showAndHideColumn}
                setFixture={setFixture}
                setFixtureShow={setFixtureShow}
                fixtureShow={fixtureShow}
              />
            </>
          );
        })}
      </section>
      {showInfo && (
        <div className="right-column">
          <div className="display-prediction-column">
            <div className="display-prediction-column-club-wrapper-header">
              <img
                src={fixture.league.flag}
                className="display-prediction-column-club-wrapper-header-img"
              />

              <div className="nameandcountry">
                <h6>{fixture.league.name}</h6>
                <div className="country-name">{fixture.league.country}</div>
              </div>
            </div>
            <section className="display-prediction-column-club-wrapper-body">
              <div className="display-prediction-home">
                <img
                  src={fixture.teams.home.logo}
                  className="display-prediction-homelogo"
                />
                <p>{fixture.teams.home.name}</p>
              </div>
              <p className="vs">VS</p>
              <div className="display-prediction-away">
                <img
                  src={fixture.teams.away.logo}
                  className="display-prediction-awaylogo"
                />
                <p>{fixture.teams.away.name}</p>
              </div>
            </section>
            <footer>
              <p className="footer-p">{fixture.predictions.advice}</p>
            </footer>
          </div>

          <div
            className="cancel-btn"
            onClick={() => {
              setShowInfo(false);
              setFixtureShow(true);
            }}
          >
            X
          </div>
        </div>
      )}
    </>
  );
};

export default SectionOne;
