import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

function Performance({ data }) {
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
        <RadarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey='kind' tickFormatter={valeurs} dy={5} />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar dataKey='value' fill='#FF0101' fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Performance;
