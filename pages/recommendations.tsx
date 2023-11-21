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
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="shadow-md bg-white rounded-md p-6">
                <FcElectricity size={48} />
                <h2 className="text-2xl font-semibold">
                  Installation of Solar Panels
                </h2>
                <p className="text-gray-600">
                  We recommend a comprehensive renovation of the library
                  infrastructure, including the installation of solar panels on
                  the roof. This renewable energy source can significantly
                  reduce the office's dependence on the grid and lower overall
                  energy costs.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="shadow-md bg-white rounded-md p-6">
                <FcElectricity size={48} />
                <h2 className="text-2xl font-semibold">
                  Installation of new lighting tube fittings
                </h2>
                <p className="text-gray-600">
                  Installation of new lighting tube fittings to be used with the
                  energy saving / LED tubes.Though it may be costly now in long
                  term it will reduce the energy consumption significantly
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="shadow-md bg-white rounded-md p-6">
                <FcElectricity size={48} />
                <h2 className="text-2xl font-semibold">
                  Energy-Efficient Equipment
                </h2>
                <p className="text-gray-600">
                  Replace old, inefficient office equipment (computers,
                  printers, copiers) with ENERGY STAR-rated models that consume
                  less energy during operation and have power-saving modes.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="shadow-md bg-white rounded-md p-6">
                <FcElectricity size={48} />
                <h2 className="text-2xl font-semibold">
                  Natural Lighting Optimization
                </h2>
                <p className="text-gray-600">
                  Maximize the use of natural light through skylights, large
                  windows, or light wells. This reduces the need for artificial
                  lighting during the day.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="shadow-md bg-white rounded-md p-6">
                <FcElectricity size={48} />
                <h2 className="text-2xl font-semibold">Power Management</h2>
                <p className="text-gray-600">
                  Encourage the use of power strips with surge protectors that
                  can be easily switched off at the end of the day to prevent
                  phantom energy usage from devices in standby mode.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PermanentDrawerLeft>
    </main>
  );
}
