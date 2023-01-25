import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import { getUserPerformance } from "../../mocks/data";

const Performance = () => {
  const { id } = useParams();
  const [userPerformance, setUserPerformance] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    async function init() {
      try {
        let response = await getUserPerformance(id);
        setUserPerformance(response.data);
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

  function valeurs(num) {
    const perf = [
      "Intensité",
      "Vitesse",
      "Force",
      "Endurance",
      "Energie",
      "Cardio",
    ];
    return perf[+num - 1];
  }
  return (
    <div className='performance'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart data={userPerformance?.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey='kind' tickFormatter={valeurs} dy={5} />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar dataKey='value' fill='#FF0101' fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performance;
