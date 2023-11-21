import Chart1 from '@/components/charts/EnergySummaryChart';
import ChartPanel from '@/components/ChartPanel';
import DataPanel from '@/components/DataPanel';
import PermanentDrawerLeft from '@/components/Drawer';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { FcElectricity } from 'react-icons/fc';
import UsersCharts from '@/components/charts/UsersCharts';
import { Box } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const consumputionData = (
    <DataPanel
      title="Consumption"
      subtitle="Average monthly power consumption"
      data="321.6 [kW]"
      icon={<Image width={40} height={40} src="/icons/gauge.png" alt="gauge" />}
    />
  );

  const consumptionChart = (
    <ChartPanel title="Monthly power consumption">
      <Chart1 />
    </ChartPanel>
  );

  const currentUsage = (
    <DataPanel
      title="Current Energy Usage"
      subtitle="Daily consumption average"
      data="22 [kW]"
      icon={<FcElectricity size={28} />}
    />
  );

  const usersData = (
    <DataPanel
      title="Users"
      subtitle="Average Daily Users"
      data="850 [Users]"
      icon={<Image width={28} height={28} src="/icons/users.png" alt="users" />}
    />
  );
  const usersChart = (
    <ChartPanel title="Daily user statistics">
      <UsersCharts />
    </ChartPanel>
  );

  const peakHours = (
    <DataPanel
      title="Peak"
      subtitle="Peak Hours"
      data="0900 - 1700 [Hrs]"
      icon={
        <Image width={28} height={28} src="/icons/energy2.png" alt="users" />
      }
    />
  );

  return (
    <main>
      <div className="bg-[#EEF4F6]">
        {/* <Navbar /> */}
        <PermanentDrawerLeft>
          <div className="h-[100vh] w-full p-6 py-4">
            <div className="lg:grid grid-cols-1 items-center lg:grid-cols-3 gap-8 hidden">
              {/* Container 1: Summary */}
              <div>{consumputionData}</div>

              {/* Container 2: Chart */}
              <div>{consumptionChart}</div>

              <div>{currentUsage}</div>

              <div>{usersChart}</div>
              <div>{usersData}</div>

              <div>{peakHours}</div>
            </div>

            <div className="flex flex-col space-y-8 lg:hidden">
              <div className="flex space-x-6">
                <div className="flex-1">{consumputionData}</div>
                <div className="flex-1">{currentUsage}</div>
              </div>

              <div>{consumptionChart}</div>

              <div className="flex justify-between space-x-6">
                <div className="flex-1">{usersData}</div>
                <div className="flex-1">{peakHours}</div>
              </div>

              <div>{usersChart}</div>
            </div>
          </div>

          {/* <BottomNav /> */}
        </PermanentDrawerLeft>
      </div>
    </main>
  );
}
