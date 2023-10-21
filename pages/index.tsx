import PermanentDrawerLeft from '@/components/Drawer';
import { Inter } from 'next/font/google';
import { FcAreaChart, FcElectricity } from 'react-icons/fc';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    // bg-gradient-to-br from-[#cc543310] to-[#23074d10]

    <main className="bg-[#EEF4F6]">
      {/* <Navbar /> */}
      <PermanentDrawerLeft >
      <div className="h-[100vh] w-full p-8">
          <div className="flex gap-8">
            <div className="shadow-md bg-white rounded-md p-6 max-h-64">
              <div className="flex gap-4">
                <div className="p-2 bg-gray-300 rounded-full">
                  <FcElectricity size={28} />
                </div>{' '}
                <p className="text-xl font-semibold">Consumption</p>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                Average Monthly Power Consumption
              </p>
              <p
                className={`${inter.className} text-5xl font-extrabold text-blue-500 py-12`}
              >
                300 kWH
              </p>
            </div>
            <div className="shadow-md bg-white rounded-md p-6 flex-1">
              <p className="text-xl">
                <FcAreaChart size={40} />
              </p>
              {/* <Chart1 /> */}    
            </div>
          </div>
        </div>
      </PermanentDrawerLeft>
    </main>
  );
}
