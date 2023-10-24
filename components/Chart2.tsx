import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Chart2() {
  return (
    <LineChart
      xAxis={[{ data: ['Week 1', 'Week 2', 'Week 3', 'Week 4'] }]}
      series={[
        {
          data: [1251, 1088, 967, 1125],
        },
      ]}
      width={300}
      height={300}
    />
  );
}
