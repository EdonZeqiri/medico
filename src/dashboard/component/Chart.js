import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts/umd/Recharts";

const data = [
  { name: "1", uv: 0, pv: 2400, amt: 2400 },
  { name: "2", uv: 100, pv: 1398, amt: 2210 },
  { name: "3", uv: 500, pv: 9800, amt: 2290 },
  { name: "4", uv: 1000, pv: 3908, amt: 2000 },
  { name: "5", uv: 1890, pv: 4800, amt: 2181 },
  { name: "6", uv: 2390, pv: 3800, amt: 2500 },
  { name: "7", uv: 3490, pv: 4300, amt: 2100 },
  { name: "8", uv: 3490, pv: 4300, amt: 2100 },
  { name: "9", uv: 3490, pv: 4300, amt: 2100 },
  { name: "10", uv: 3490, pv: 4300, amt: 2100 },
  { name: "11", uv: 3490, pv: 4300, amt: 2100 },
  { name: "12", uv: 3490, pv: 4300, amt: 2100 },
  { name: "13", uv: 3490, pv: 4300, amt: 2100 },
  { name: "14", uv: 3490, pv: 4300, amt: 2100 },
  { name: "15", uv: 3490, pv: 4300, amt: 2100 },
  { name: "16", uv: 3490, pv: 4300, amt: 2100 },
  { name: "17", uv: 3490, pv: 4300, amt: 2100 },
  { name: "18", uv: 3490, pv: 4300, amt: 2100 },
  { name: "19", uv: 3490, pv: 4300, amt: 2100 },
  { name: "20", uv: 3490, pv: 4300, amt: 2100 },
];

function Chart() {
  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <Line
        type="monotone"
        dataKey="pv"
        fill="#F5A622"
        stroke="#F5A622"
        activeDot={{ r: 8 }}
        strokeWidth={2}
      />
      <Line
        type="monotone"
        dataKey="uv"
        fill="#4777F4"
        stroke="#4777F4"
        strokeWidth={2}
      />
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}

export default Chart;
