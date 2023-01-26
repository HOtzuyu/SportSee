/* eslint-disable react-hooks/exhaustive-deps */
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../mocks/data";

const Score = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    async function init() {
      try {
        let response = await getUser(id);
        setUser(response.data);
      } catch (err) {
        console.log("===== error =====", err);
        setError(true);
      }
    }
    init();
  }, [id]);
  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }

  const scoreValue = user?.score || user?.todayScore;
  const scorePurcent = scoreValue * 100;
  const scoreValueData = [
    { name: scorePurcent + "%", value: scorePurcent, fill: "#FF0101" },
    { name: "100%", value: 100, fill: "#ffffff00" },
  ];

  return (
    <div className='score'>
      <div className='score__title'>Score</div>
      <div className='score__graphic'>
        <ResponsiveContainer>
          <RadialBarChart
            barSize={10}
            startAngle={90}
            endAngle={450}
            data={scoreValueData}
            innerRadius='100%'
          >
            <RadialBar
              minAngle={15}
              clockWise
              dataKey={"value"}
              cornerRadius={30 / 2}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        <p className='score__graphic--texte'>
          <span className='pourcent'>{scoreValueData[0].name}</span>
          de votre objectif
        </p>
      </div>
    </div>
  );
};
export default Score;
