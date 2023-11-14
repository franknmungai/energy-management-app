import CustomDatePicker from '@/components/CustomDatePicker';
import PermanentDrawerLeft from '@/components/Drawer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { Inter } from 'next/font/google';
import { FormEvent, useReducer, useRef, useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import LoadEntryForm from '@/components/forms/LoadEntryForm';
import MeterReadingForm from '@/components/forms/MeterReadingForm';

const inter = Inter({ subsets: ['latin'] });

export default function DataEntry() {
  const [tab, setTab] = useState('meter');
  const isActive = (name: string) => name === tab;

  return (
    // bg-gradient-to-br from-[#cc543310] to-[#23074d10]

    <main className="bg-[#EEF4F6]">
      {/* <Navbar /> */}
      <PermanentDrawerLeft>
        <div
          className="h-[100vh] w-full p-8
        ."
        >
          <div className="shadow-md rounded-md mx-auto max-w-4xl bg-white flex space-x-6 items-center  p-8">
            <img
              src={`/icons/${isActive('load') ? 'load.png' : 'meter.avif'}`}
              // src="/icons/load.png"
              alt=""
              className="flex-1"
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
          </div>
        </div>
      </PermanentDrawerLeft>
    </main>
  );
}
