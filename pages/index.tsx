import Chart1 from '@/components/charts/EnergySummaryChart';
import ChartPanel from '@/components/ChartPanel';
import DataPanel from '@/components/DataPanel';
import PermanentDrawerLeft from '@/components/Drawer';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { FcElectricity } from 'react-icons/fc';
import UsersCharts from '@/components/charts/UsersCharts';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    // bg-gradient-to-br from-[#cc543310] to-[#23074d10]

    <main className="bg-[#EEF4F6]">
      {/* <Navbar /> */}
      <PermanentDrawerLeft>
        <div className="h-[100vh] w-full p-6 py-4">
          <div className="grid grid-cols-1 items-center lg:grid-cols-3 gap-8">
            {/* Container 1: Summary */}
            <DataPanel
              title="Consumption"
              subtitle="Average monthly power consumption"
              data="700 [kWH]"
              icon={
                <Image
                  width={40}
                  height={40}
                  src="/icons/gauge.png"
                  alt="gauge"
                />
              }
            />

            {/* Container 2: Chart */}
            <ChartPanel title="Monthly power consumption">
              <Chart1 />
            </ChartPanel>

            <DataPanel
              title="Current Energy Usage"
              subtitle="Daily consumption average"
              data="48 [kWH]"
              icon={<FcElectricity size={28} />}
            />

            <ChartPanel title="Daily user statistics">
              <UsersCharts />
            </ChartPanel>

            <DataPanel
              title="Users"
              subtitle="Average Daily Users"
              data="850 [Users]"
              icon={
                <Image
                  width={28}
                  height={28}
                  src="/icons/users.png"
                  alt="users"
                />
              }
            />

            <DataPanel
              title="Peak"
              subtitle="Peak Hours"
              data="0900 - 1700 [Hrs]"
              icon={
                <Image
                  width={28}
                  height={28}
                  src="/icons/energy2.png"
                  alt="users"
                />
              }
            />
          </div>
        </div>
      </PermanentDrawerLeft>
    </main>
  );
}
