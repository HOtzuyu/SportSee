/* eslint-disable react-hooks/exhaustive-deps */
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";
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
        setError("");
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

  const score = user?.score || user?.todayScore;
  const scorePurcent = score * 100;
  return (
    <div className='score'>
      <div className='score__title'>Score</div>
      <div className='score__graphic'>
        {/* <ResponsiveContainer>
          
        </ResponsiveContainer> */}

        <p className='score__graphic--texte'>
          <span className='pourcent'>{scorePurcent + "%"}</span>
          de votre objectif
        </p>
      </div>
    </div>
  );
};

export default Score;
