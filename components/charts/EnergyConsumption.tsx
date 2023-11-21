import { Legend, RadialBar, RadialBarChart, Tooltip } from 'recharts';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CustomTooltip from './CustomTooltip';

interface EnergyConsumptionProps {
  data: any[];
}
const EnergyConsumption: React.FC<EnergyConsumptionProps> = ({ data }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <RadialBarChart
      width={matches ? 750 : 350}
      height={500}
      innerRadius="50%"
      outerRadius="110%"
      data={data}
      startAngle={180}
      endAngle={0}
      barCategoryGap="20%"
      barSize={10}
      barGap="20%"
      // className="relative"
    >
      <RadialBar
        // label={{ fill: '#666', position: 'insideStart' }}
        background
        dataKey="uv"
      />
      {/* <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle" // bottom for mobile
        align="right"
      /> */}
      <Tooltip content={<CustomTooltip />} />
    </RadialBarChart>
  );
};

export default EnergyConsumption;
