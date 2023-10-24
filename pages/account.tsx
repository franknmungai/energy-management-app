import PermanentDrawerLeft from '@/components/Drawer';
import { Inter } from 'next/font/google';
import { FcAreaChart, FcElectricity } from 'react-icons/fc';

const inter = Inter({ subsets: ['latin'] });

export default function Account() {
  return (
    // bg-gradient-to-br from-[#cc543310] to-[#23074d10]

    <main className="bg-[#EEF4F6]">
      {/* <Navbar /> */}
      <PermanentDrawerLeft >
      <div className="h-[100vh] w-full p-8">
          <div className="flex gap-8">
            <div className="shadow-md bg-white rounded-md p-6 max-h-64">
              <div className="flex gap-4">
                <p className="text-xl font-semibold">Consumption</p>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Average Monthly Power Consumption
              </p>
            </div>
          </div>
        </div>
      </PermanentDrawerLeft>
    </main>
  );
}
