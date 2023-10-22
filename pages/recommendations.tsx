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
          <Typography variant="h4" sx={{mb:"8px"}}>Limitations and Recommendations</Typography>
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="shadow-md bg-white rounded-md p-6">
                <FcAreaChart size={48} />
                <h2 className="text-2xl font-semibold">Limitation 1</h2>
                <p className="text-gray-600">Description of the limitation...</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="shadow-md bg-white rounded-md p-6">
                <FcAreaChart size={48} />
                <h2 className="text-2xl font-semibold">Limitation 2</h2>
                <p className="text-gray-600">Description of the limitation...</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="shadow-md bg-white rounded-md p-6">
                <FcElectricity size={48} />
                <h2 className="text-2xl font-semibold">Recommendation 1</h2>
                <p className="text-gray-600">Description of the recommendation...</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="shadow-md bg-white rounded-md p-6">
                <FcElectricity size={48} />
                <h2 className="text-2xl font-semibold">Recommendation 2</h2>
                <p className="text-gray-600">Description of the recommendation...</p>
              </div>
            </div>
          </div>
        </div>
      </PermanentDrawerLeft>
    </main>
  );
}
