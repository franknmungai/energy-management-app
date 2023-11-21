import { FcAreaChart } from 'react-icons/fc';

interface ChartPanelProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}
const ChartPanel: React.FC<ChartPanelProps> = ({
  children,
  title,
  className = '',
}) => {
  return (
    <div
      className={`shadow-md bg-white rounded-md p-6 w-[200vw] md:w-full lg:col-span-2 lg:row-span-2 lg:scale-100 ${className}`}
    >
      <div className="flex space-x-4">
        <FcAreaChart size={28} />

        <p className="text-xl text-gray-600">{title}</p>
      </div>
      <div className="mt-6"> {children}</div>
    </div>
  );
};

export default ChartPanel;
