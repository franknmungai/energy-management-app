import { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from '@mui/material';
import { RxDashboard, RxRocket } from 'react-icons/rx';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { MdOutlineDevices } from 'react-icons/md';
import { RiSurveyLine } from 'react-icons/ri';
import { BiBarChartSquare } from 'react-icons/bi';
import { useRouter } from 'next/router';

const drawerItems: any[] = [
  [<RxDashboard />, 'Dashboard', '/'],
  [<BiBarChartSquare />, 'Analytics', '/analytics'],
  [<MdOutlineDevices />, 'Loads', '/loads'],
  [<HiOutlineDocumentReport />, 'Report', '/report'],
  [<RxRocket />, 'Recommendations', '/recommendations'],
  [<RiSurveyLine />, 'Data entry', '/data_entry'],
];

const BottomNav = () => {
  const router = useRouter();
  const [value, setValue] = useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div
      className="w-full shadow-2xl rounded-md bg-white flex justify-between p-2 m-2 overflow-x-scroll"
      style={{ scrollbarWidth: 'none' }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {drawerItems.map(([icon, text, link]) => (
          <Tab
            key={text}
            value={text}
            label={<div className="scale-120">{icon}</div>}
            onClick={() => router.push(link)}
          />
        ))}
      </Tabs>
    </div>
  );

  return (
    <div
      className="w-full shadow-2xl rounded-md bg-white flex justify-between p-6 m-4 overflow-x-auto"
      style={{ scrollbarWidth: 'none' }}
    >
      {/* {drawerItems.map(([icon, text, link]) => (
        <div
          className="flex flex-col justify-center items-center space-y-2"
          onClick={() => {
            router.push(link);
          }}
        >
          <div className="scale-150">{icon}</div>
          <p className="text-center text-lg">{text}</p>
        </div>
      ))} */}

      {/* <BottomNavigation
        showLabels
        //value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        {drawerItems.map(([icon, text, link]) => (
          <BottomNavigationAction
            label={text}
            icon={icon}
            onClick={() => {
              router.push(link);
            }}
          />
        ))}
      </BottomNavigation> */}
    </div>
  );
};

export default BottomNav;
