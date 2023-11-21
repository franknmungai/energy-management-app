import ChartPanel from '@/components/ChartPanel';
import Drawer from '@/components/Drawer';
import EnergyConsumption from '@/components/charts/EnergyConsumption';
import { useMediaQuery } from '@mui/material';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Analytics() {
  const isMobile = useMediaQuery('(max-width:720px)');
  return (
    <main className="bg-[#EEF4F6]">
      <Drawer>
        <div className="h-[100vh] w-full p-8">
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
              <EnergyConsumption data={data} />
            </div>
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
