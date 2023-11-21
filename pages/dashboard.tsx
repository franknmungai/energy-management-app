import Chart1 from '@/components/charts/EnergySummaryChart';
import ChartPanel from '@/components/ChartPanel';
import DataPanel from '@/components/DataPanel';
import PermanentDrawerLeft from '@/components/Drawer';
import Image from 'next/image';
import { FcElectricity } from 'react-icons/fc';
import UsersCharts from '@/components/charts/UsersCharts';
import BillingChart from '@/components/charts/BillingChart';
import { monthlyConsumptionData } from '@/lib/data';

export default function Home() {
  const consumputionData = (
    <DataPanel
      title="Consumption"
      subtitle="Average monthly power consumption (Last 3 months)"
      data="20,146.67 [kWh]"
      icon={
        <Image
          width={40}
          height={40}
          src="/icons/gauge.png"
          alt="gauge"
          className="w-12 h-12"
        />
      }
    />
  );

  const consumptionChart = (
    <ChartPanel title="Monthly power consumption">
      <Chart1 data={monthlyConsumptionData} />
    </ChartPanel>
  );

  const currentUsage = (
    <DataPanel
      title="Current Energy Usage"
      subtitle="Daily consumption average"
      data="223.85 [kW]"
      icon={<FcElectricity size={28} className="w-12 h-12" />}
    />
  );

  const usersData = (
    <DataPanel
      title="Occupancy"
      subtitle="Average Daily Users"
      data="3820 [Users]"
      icon={
        <Image
          width={28}
          height={28}
          src="/icons/users.png"
          alt="users"
          className="w-12 h-12"
        />
      }
    />
  );
  const usersChart = (
    <ChartPanel title="Occupancy">
      <UsersCharts />
    </ChartPanel>
  );

  const peakHours = (
    <DataPanel
      title="Per Capita"
      subtitle="Per Capita Consumption"
      data="6.76 [kwH]"
      icon={
        <Image
          width={28}
          height={28}
          src="/icons/energy2.png"
          alt="users"
          className="w-12 h-12"
        />
      }
    />
  );

  const billing = (
    <DataPanel
      title="Billing"
      subtitle="Average Monthly billing (Last 3 months)"
      data="783,348.81 [Ksh]"
      icon={
        <Image
          width={28}
          height={28}
          src="/icons/payment.png"
          alt="users"
          className="w-12 h-12"
        />
      }
    />
  );

  const highRateConsumption = (
    <DataPanel
      title="High Rate consumption"
      subtitle="Average High Rate consumption (Last 3 months)"
      data="15,870.33 [kWH]"
      icon={
        <Image
          width={28}
          height={28}
          src="/icons/high-rate.png"
          alt="users"
          className="w-12 h-12"
        />
      }
    />
  );

  const lowRateConsumption = (
    <DataPanel
      title="Low Rate consumption"
      subtitle="Average Low Rate consumption (Last 3 months)"
      data="4,276.33 [kWH]"
      icon={
        <Image
          width={28}
          height={28}
          className="w-12 h-12"
          src="/icons/low-rate.png"
          alt="users"
        />
      }
    />
  );

  const billingChart = (
    <ChartPanel title="Billing Statistics">
      <BillingChart
        data={monthlyConsumptionData.map((d) => ({ ...d, pv: d.pv }))}
      />
    </ChartPanel>
  );
  return (
    <main>
      <div className="bg-[#EEF4F6]">
        {/* <Navbar /> */}
        <PermanentDrawerLeft>
          <div className="h-[100vh] p-6 py-4">
            <div className="lg:grid lg:grid-cols-3 items-center gap-8 hidden">
              {/* Container 1: Summary */}
              <div>{consumputionData}</div>
              <div className="flex-1">{highRateConsumption}</div>
              <div className="flex-1">{lowRateConsumption}</div>

              {/* Container 2: Chart */}
              <div className="col-span-2 row-span-2">{consumptionChart}</div>

              <div>{currentUsage}</div>

              <div className="col-span-2 row-span-2">{usersChart}</div>
              <div>{usersData}</div>

              <div>{peakHours}</div>

              <div>{billing}</div>

              <div className="row-span-2 col-span-2">{billingChart}</div>
              <div>{highRateConsumption}</div>
            </div>

            {/* Mobile version of the Dashboard layout */}
            <div className="flex flex-col space-y-8 w-[200vw] p-4 lg:hidden">
              <div className="flex w-[200vw] space-x-6">
                <div className="flex-1">{consumputionData}</div>
                <div className="flex-1">{currentUsage}</div>
              </div>
              <div className="w-[200vw] flex space-x-6">
                <div className="flex-1">{highRateConsumption}</div>
                <div className="flex-1">{lowRateConsumption}</div>
              </div>

              <div>{consumptionChart}</div>

              <div className="w-[200vw] flex justify-between space-x-6">
                <div className="flex-1">{usersData}</div>
                <div className="flex-1">{peakHours}</div>
              </div>

              <div>{usersChart}</div>

              <div className=" w-[200vw] flex space-x-6">
                <div className="flex-1">{billing}</div>

                <div className="flex-1">{highRateConsumption}</div>
              </div>

              <div>{billingChart}</div>
            </div>
          </div>

          {/* <BottomNav /> */}
        </PermanentDrawerLeft>
      </div>
    </main>
  );
}
