import { FcAreaChart } from 'react-icons/fc';

interface ChartPanelProps {
  children: React.ReactNode;
  title?: string;
}
const ChartPanel: React.FC<ChartPanelProps> = ({ children, title }) => {
  return (
    <div className="shadow-md bg-white rounded-md p-6 scale-50 lg:col-span-2 lg:row-span-2 lg:scale-100 ">
      <div className="flex space-x-4">
        <FcAreaChart size={28} />

        <p>{title}</p>
      </div>
      {children}
    </div>
  );
};

export default ChartPanel;
