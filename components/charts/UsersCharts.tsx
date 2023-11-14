import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Week 1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Week 2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Week 3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Week 4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Week 5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Week 6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Week 7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
].map((d) => ({
  ...d,
  pv: d.pv / 10,
  uv: d.uv / 10,
}));

const UsersCharts = () => {
  return (
    <LineChart
      width={700}
      height={400}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};

export default UsersCharts;
