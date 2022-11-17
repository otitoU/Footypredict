import React from "react";

const Fixture = ({
  fixture,
  teams,
  showAndHideColumn,
  setFixture,
  setFixtureShow,
  fixtureShow,
}) => {
  let time = new Date(fixture.timestamp).toLocaleTimeString("en", {
    timeStyle: "short",
    hour12: true,
    timeZone: "UTC",
  });

  const getPrediction = () => {
    fetch(
      `https://api-football-v1.p.rapidapi.com/v3/predictions?fixture=${fixture.id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "b8c9e70753msh5918b828c8a46b1p13241ajsn6701be1cb400",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.response[0]);
        setFixture(response.response[0]);
        setFixtureShow(false);
        showAndHideColumn();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div
      className={fixtureShow ? "fixture" : "noshowfixture"}
      onClick={getPrediction}
    >
      <div className="fixture-time">{time}</div>
      <div className="fixture-clubs">
        <div className="hometeam">
          <img
            src={teams.home.logo}
            className="img teams-img"
            alt={teams.home.name}
          />
          <div>{teams.home.name}</div>
        </div>
        <div className="awayteam">
          <img
            src={teams.away.logo}
            className="img teams-img"
            alt={teams.away.name}
          />
          <div>{teams.away.name}</div>
        </div>
      </div>
    </div>
  );
};

export default Fixture;
