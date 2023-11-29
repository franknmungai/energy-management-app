import { useState } from 'react';
import ChartPanel from '@/components/ChartPanel';
import Drawer from '@/components/Drawer';
import EnergyConsumption from '@/components/charts/EnergyConsumption';
import { useMediaQuery, Chip, Switch } from '@mui/material';

import Chart1 from '@/components/charts/EnergySummaryChart';
import BillingChart from '@/components/charts/BillingChart';
import {
  loadAnalyticsData,
  monthlyBillingData,
  monthlyBillingData2019,
  monthlyBillingData2021,
  monthlyBillingData2022,
  monthlyConsumptionData,
  monthlyConsumptionData2019,
  monthlyConsumptionData2021,
  monthlyConsumptionData2022,
} from '@/lib/data';

type Year = '2019' | '2021' | '2022' | '2023';

export default function Analytics() {
  const isMobile = useMediaQuery('(max-width:720px)');
  const [year, setYear] = useState('2022');
  const [compareData, setCompareData] = useState<Year[]>(['2021', '2022']);
  const [isCompareMode, setCompareMode] = useState(false);

  function displayData(year: string) {
    switch (year) {
      case '2022':
        return {
          energy: monthlyConsumptionData2022,
          billing: monthlyBillingData2022,
        };

      case '2021':
        return {
          energy: monthlyConsumptionData2021,
          billing: monthlyBillingData2021,
        };
      case '2019':
        return {
          energy: monthlyConsumptionData2019,
          billing: monthlyBillingData2019,
        };
      default: // 2023
        return {
          energy: monthlyConsumptionData,
          billing: monthlyConsumptionData,
        };
    }
  }

  const handleCompare = (year: Year) => {
    const queue = [...compareData];
    queue.shift();
    queue.push(year);

    setCompareData(queue);
  };

  const generateComparisonData = (yearA: Year, yearB: Year) => {
    const data = {
      '2019': {
        energy: monthlyConsumptionData2019,
        billing: monthlyBillingData2019,
      },
      '2021': {
        energy: monthlyConsumptionData2021,
        billing: monthlyBillingData2021,
      },
      '2022': {
        energy: monthlyConsumptionData2022,
        billing: monthlyBillingData2022,
      },
      '2023': {
        energy: monthlyConsumptionData,
        billing: monthlyBillingData,
      },
    };

    data[yearA].energy = data[yearA].energy.map((d, i) => ({
      ...d,
      pv: d.pv,
      uv: data[yearB].energy[i].pv,
    }));

    data[yearA].billing = data[yearA].billing.map((d, i) => ({
      ...d,
      pv: d.pv,
      uv: data[yearB].billing[i].pv,
    }));

    console.log({ comparison: data[yearA] });
    return data[yearA];
  };

  const handleChipClick = (year: Year) => {
    if (isCompareMode) {
      handleCompare(year);
    } else {
      setYear(year);
    }
  };

  const controllers = (
    <div className="flex space-x-24">
      <div className="w-[200vw] flex justify-end space-x-12">
        <Chip
          label="2019"
          variant={year === '2019' ? 'filled' : 'outlined'}
          onClick={() => {
            handleChipClick('2019');
          }}
          className="scale-150"
        />
        <Chip
          label="2021"
          variant={year === '2021' ? 'filled' : 'outlined'}
          onClick={() => {
            handleChipClick('2021');
          }}
          className="scale-150"
        />
        <Chip
          label="2022"
          variant={year === '2022' ? 'filled' : 'outlined'}
          onClick={() => handleChipClick('2022')}
          className="scale-150"
        />
        <Chip
          label="2023"
          variant={year === '2023' ? 'filled' : 'outlined'}
          onClick={() => handleChipClick('2023')}
          className="scale-150"
        />
      </div>

      <div className="flex space-x-4">
        <p className="text-2xl font-semibold">Compare</p>

        <Switch
          checked={isCompareMode}
          onChange={() => setCompareMode((value) => !value)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
    </div>
  );
  return (
    <main className="bg-[#EEF4F6]">
      <Drawer>
        <div className="h-[100vh] w-full p-8 flex flex-col space-y-12">
          <ChartPanel
            className={isMobile ? 'h-[800px]' : 'h-[70vh]'}
            title="Monthly energy consumption breakdown"
          >
            <div className="flex justify-between flex-col-reverse md:flex-row-reverse pt-8">
              <div>
                {loadAnalyticsData
                  .map(({ fill, name }) => (
                    <div className="flex items-center my-4 space-x-2">
                      <div
                        style={{ background: fill }}
                        className={'w-4 h-4 rounded-full'}
                      ></div>
                      <p style={{ color: fill }}>{name}</p>
                    </div>
                  ))
                  .reverse()}
              </div>

              <div className="w-full flex justify-center">
                <EnergyConsumption data={loadAnalyticsData} />
              </div>
            </div>
          </ChartPanel>

          {controllers}

          <ChartPanel
            title={`Energy Consumption in ${
              isCompareMode ? `${compareData[0]} vs ${compareData[1]}` : year
            }`}
          >
            {/* <Chart1 data={displayData(year).energy} /> */}
            <Chart1
              data={
                isCompareMode
                  ? generateComparisonData(compareData[0], compareData[1])
                      .energy
                  : displayData(year).energy
              }
            />
          </ChartPanel>

          {controllers}
          <ChartPanel
            title={`Energy Billing in ${
              isCompareMode ? `${compareData[0]} vs ${compareData[1]}` : year
            }`}
          >
            <BillingChart
              data={
                isCompareMode
                  ? generateComparisonData(compareData[0], compareData[1])
                      .billing
                  : displayData(year).billing
              }
            />
          </ChartPanel>
        </div>
      </Drawer>
    </main>
  );
}
