import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Activity({ data }) {
  const activity__legend = (value) => {
    return <span className='activity__legend'>{value}</span>;
  };

  const tooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className='activity__tooltip'>
          <p className='activity__tooltip--num'>{payload[0].value}kg</p>
          <p className='activity__tooltip--num'>{payload[1].value}Kcal</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='activity'>
      <p className='activity__Title'>Activité quotidienne</p>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray='2 2' vertical={false} />
          <XAxis dataKey='day' axisLine={false} tickLine={false} dy={15} />
          <YAxis
            tickCount={3}
            orientation='right'
            tickLine={false}
            axisLine={false}
            dx={15}
          />
          <Tooltip content={tooltip} />
          <Legend
            verticalAlign='top'
            align='right'
            iconType='circle'
            iconSize={8}
            wrapperStyle={{
              paddingBottom: 60,
            }}
            formatter={activity__legend}
          />
          <Bar
            dataKey='kilogram'
            fill='#282D30'
            barSize={7}
            name='Poids (kg)'
            radius={[20, 20, 0, 0]}
          />
          <Bar
            dataKey='calories'
            fill='#FF0101'
            barSize={7}
            name='Calories brûlées (kCal)'
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Activity;
