import PermanentDrawerLeft from '@/components/Drawer';
import { Typography } from '@mui/material';
import { Inter } from 'next/font/google';
import { FcAreaChart, FcElectricity } from 'react-icons/fc';

const inter = Inter({ subsets: ['latin'] });

export default function Recommendations() {
  return (
    <main className="bg-[#EEF4F6]">
      <PermanentDrawerLeft>
        <div className="h-[100vh] w-full p-8">
          <Typography variant="h5" sx={{ mb: '8px' }}>
            Recommendations
          </Typography>
          <div className="grid grid-cols-3 gap-4">
            <RecommendationPanel
              title="Installation of Solar Panels"
              text={`We recommend a comprehensive renovation of the library
                  infrastructure, including the installation of solar panels on
                  the roof. This renewable energy source can significantly
                  reduce the office's dependence on the grid and lower overall
                  energy costs.`}
            />

            <RecommendationPanel
              title="Installation of new lighting tube fittings"
              text={` Installation of new lighting tube fittings to be used with the
              energy saving / LED tubes.Though it may be costly now in long
              term it will reduce the energy consumption significantly`}
            />

            <RecommendationPanel
              title="Energy-Efficient Equipment"
              text={`Replace old, inefficient office equipment (computers,
                printers, copiers) with ENERGY STAR-rated models that consume
                less energy during operation and have power-saving modes.`}
            />

            <RecommendationPanel
              title="Natural Lighting Optimization"
              text={`Maximize the use of natural light through skylights, large
              windows, or light wells. This reduces the need for artificial
              lighting during the day.`}
            />

            <RecommendationPanel
              title="Power Management"
              text={`Encourage the use of power strips with surge protectors that
              can be easily switched off at the end of the day to prevent
              phantom energy usage from devices in standby mode.`}
            />
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
}
const RecommendationPanel: React.FC<Props> = ({ title, text }) => {
  return (
    <div className="w-full flex-1 h-80">
      <div className="shadow-md bg-white rounded-md p-6">
        <FcElectricity size={48} />
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};
