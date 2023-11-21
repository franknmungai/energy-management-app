import { useState } from 'react';
import ChartPanel from '@/components/ChartPanel';
import Drawer from '@/components/Drawer';
import EnergyConsumption from '@/components/charts/EnergyConsumption';
import { useMediaQuery, Chip, Switch } from '@mui/material';

import Chart1 from '@/components/charts/EnergySummaryChart';
import BillingChart from '@/components/charts/BillingChart';
import {
  monthlyBillingData,
  monthlyBillingData2021,
  monthlyBillingData2022,
  monthlyConsumptionData,
  monthlyConsumptionData2021,
  monthlyConsumptionData2022,
} from '@/lib/data';

type Year = '2021' | '2022' | '2023';

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

  return (
    <main className="bg-[#EEF4F6]">
      <Drawer>
        <div className="h-[100vh] w-full p-8 flex flex-col space-y-12">
          <ChartPanel
            className={isMobile ? 'h-[800px]' : 'h-[70vh]'}
            title="Monthly energy consumption breakdown"
          >
            <div className="flex justify-between flex-col md:flex-row-reverse">
              <div>
                {data.map(({ fill, name }) => (
                  <div className="flex items-center my-4 space-x-2">
                    <div
                      style={{ background: fill }}
                      className={'w-4 h-4 rounded-full'}
                    ></div>
                    <p style={{ color: fill }}>{name}</p>
                  </div>
                ))}
              </div>

              <div className="w-full flex justify-center">
                <EnergyConsumption data={data} />
              </div>
            </div>
          </ChartPanel>

          <div className="flex space-x-24">
            <div className="w-[200vw] flex justify-end space-x-12">
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

const data = [
  {
    name: 'Lighting',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
    label: 'Lighting',
  },
  {
    name: 'Computers and TV',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: 'Pump Motor',
    uv: -15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: 'Switches',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: 'Printers and Photocopiers',
    uv: -8.63,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: 'Security Lights',
    uv: -2.63,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: 'Miscellaneous',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658',
  },
];
