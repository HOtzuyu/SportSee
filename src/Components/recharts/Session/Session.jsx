/**
 * Datavisualisation of sessions in a week
 */

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
  CartesianGrid,
} from "recharts";

/**
 * creat a line chart for look the sessions in a week of the user
 * @param {array} data
 * @returns a line chart
 */
function Sessions({ data }) {
  /**
   * add const week with the letter of each day of the week
   * @param {int} num
   * @returns the first letter of the day
   */
  function weekDays(num) {
    const week = ["L", "M", "M", "J", "V", "S", "D"];
    return week[num - 1];
  }

  /**
   * fonction return form and data of tooltip
   * @param {array} payload / array of objects present the custom tooltip
   * @returns a custom tooltip
   */
  function CustomTooltip({ payload }) {
    return (
      <div
        className='custom_tooltip'
        style={{ background: "white", padding: "1px 5px" }}
      >
        <p className='desc'>{payload[0]?.payload?.sessionLength} min</p>
      </div>
    );
  }

  function CustomCursor(props) {
    const { points, width, height } = props;
    const { x, y } = points[0];

    return (
      <Rectangle
        fillOpacity='0.2'
        x={x}
        y={y - 30}
        width={width}
        height={height * 2}
      />
    );
  }

  return (
    <div className='sessions'>
      <div className='sessions__text'>Durée moyenne des sessions</div>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          data={data}
          margin={{
            top: 30,
            right: 0,
            left: 0,
            bottom: 30,
          }}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <Tooltip
            content={<CustomTooltip />}
            animationEasing='easing-out'
            cursor={<CustomCursor />}
          />

          <XAxis
            dataKey='day'
            tickFormatter={weekDays}
            tick={{ fill: "white", opacity: ".6" }}
            tickLine={false}
            tickMargin={20}
            interval='preserveStartEnd'
            axisLine={false}
            dy={10}
          />

          <YAxis hide={true} domain={["dataMin", "dataMax +10"]} />

          <Line
            type='natural'
            dataKey='sessionLength'
            stroke='white'
            strokeWidth={3}
            dot={false}
            activeDot={{
              fill: "white",
              strokeOpacity: ".5",
              strokeWidth: "10",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Sessions;
