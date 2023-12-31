import CustomDatePicker from '@/components/CustomDatePicker';
import PermanentDrawerLeft from '@/components/Drawer';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { Inter } from 'next/font/google';
import { useState } from 'react';

import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

const LoadEntryForm = dynamic(
  () => import('@/components/forms/LoadEntryForm'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

const MeterReadingForm = dynamic(
  () => import('@/components/forms/MeterReadingForm'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

const DataEntry = () => {
  const [tab, setTab] = useState('meter');
  const isActive = (name: string) => name === tab;

  return (
    // bg-gradient-to-br from-[#cc543310] to-[#23074d10]

    <main className="bg-[#EEF4F6]">
      {/* <Navbar /> */}
      <PermanentDrawerLeft>
        <div
          className="h-[100vh] w-full lg:p-8
        ."
        >
          <Box
            sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            className="shadow-md rounded-md mx-auto max-w-4xl bg-white flex space-x-6 items-center  p-8"
          >
            <img
              src={`/icons/${isActive('load') ? 'load.png' : 'meter.avif'}`}
              // src="/icons/load.png"
              alt=""
              className="hidden lg:flex-1 lg:block"
              width={250}
              // height={}
            />

            <div className="flex-1">
              {/* <h3 className="text-xl mb-4">Data Entry</h3> */}

              <div className="flex gap-4 mb-8">
                <Chip
                  label="Meter Reading"
                  clickable
                  variant={isActive('meter') ? 'filled' : 'outlined'}
                  onClick={() => setTab('meter')}
                />
                <Chip
                  label="Load"
                  clickable
                  variant={isActive('load') ? 'filled' : 'outlined'}
                  onClick={() => setTab('load')}
                />
              </div>
              {tab === 'meter' ? <MeterReadingForm /> : <LoadEntryForm />}
            </div>
          </Box>
        </div>
      </PermanentDrawerLeft>
    </main>
  );
};

export default DataEntry;
