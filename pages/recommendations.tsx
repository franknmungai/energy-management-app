import PermanentDrawerLeft from '@/components/Drawer';
import { Typography } from '@mui/material';
import { Inter } from 'next/font/google';
import { FcAreaChart, FcElectricity } from 'react-icons/fc';

export default function Recommendations() {
  return (
    <main className="bg-[#EEF4F6]">
      <PermanentDrawerLeft>
        <div className="h-[100vh] w-full p-8">
          <div className="grid grid-cols-1 space-y-8 lg:grid-cols-3 lg:gap-3">
            {data.map(({ title, content }, i) => (
              <RecommendationPanel
                key={title}
                title={title}
                text={content}
                i={i}
              />
            ))}
          </div>
        </div>
      </PermanentDrawerLeft>
    </main>
  );
}

import React from 'react';

interface Props {
  title: string;
  text: string;
  i: number;
}
const RecommendationPanel: React.FC<Props> = ({ title, text, i }) => {
  const colors1 = [
    'border-l-green-400',
    'border-l-blue-400',
    'border-l-orange-400',
    'border-l-yellow-400',
    'border-l-indigo-400',
  ];
  const colors2 = [
    'bg-green-400',
    'bg-blue-400',
    'bg-orange-400',
    'bg-yellow-400',
    'bg-indigo-400',
  ];
  return (
    <div
      className={`shadow-md bg-white rounded-md p-6 border-l-4 ${colors1[i]}`}
    >
      <div
        className={`w-8 h-8 ${colors2[i]} rounded-full flex justify-center items-center text-white font-bold mb-3`}
      >
        {i + 1}
      </div>
      <div className="">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

const data = [
  {
    title: 'Power Management',
    content: `Encourage the use of power strips with surge protectors that
    can be easily switched off at the end of the day to prevent
    phantom energy usage from devices in standby mode.`,
  },
  {
    title: 'Natural Lighting Optimization',
    content: `Maximize the use of natural light through skylights, large
    windows, or light wells. This reduces the need for artificial
    lighting during the day.`,
  },
  {
    title: 'Energy-Efficient Equipment',
    content: `Replace old, inefficient office equipment (computers,
      printers, copiers) with ENERGY STAR-rated models that consume
      less energy during operation and have power-saving modes.`,
  },
  {
    title: 'Installation of new lighting tube fittings',
    content: `Installation of new lighting tube fittings to be used with the
    energy saving /  tubes.Though it may be costly now in long
    term it will reduce the energy consumption significantly`,
  },
  {
    title: 'Installation of Solar Panels',
    content: `We recommend a comprehensive renovation of the library
    infrastructure, including the installation of solar panels on
    the roof. This renewable energy source can significantly
    reduce the office's dependence on the grid and lower overall
    energy costs.`,
  },
];
