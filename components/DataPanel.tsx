import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '500', '700', '800'],
});

interface DataPanelProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  data: string;
}
const DataPanel: React.FC<DataPanelProps> = ({
  icon,
  title,
  subtitle,
  data,
}) => {
  return (
    <div className="shadow-md bg-white rounded-md p-6 max-h-64 text-center">
      <div className="flex gap-4">
        <div className="p-2 bg-gray-300 rounded-full flex items-center justify-center">
          <div>{icon}</div>
        </div>{' '}
        <p className="text-xl font-semibold">{title}</p>
      </div>

      <p className="text-sm text-gray-600 mt-4">{subtitle}</p>

      <p
        className={`${inter.className} text-5xl font-bold text-blue-500 py-12`}
      >
        {data}
      </p>
    </div>
  );
};

export default DataPanel;
