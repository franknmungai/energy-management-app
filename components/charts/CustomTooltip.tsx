interface TooltipProps {
  active?: boolean;
  payload?: any;
}
const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
  if (active) {
    // Extract the data you want to display in the tooltip from payload
    const data = payload[0].payload;

    return (
      <div className="p-2 rounded-sm shadow-md bg-white">
        <p className="text-sm">{data.name}</p>
        <p className="text-sm text-gray-600">
          {data?.uv?.toPrecision(5) || data?.pv?.toPrecision(5)}
        </p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
