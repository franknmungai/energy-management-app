import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { RxDashboard, RxRocket } from 'react-icons/rx';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { MdOutlineDevices } from 'react-icons/md';
import { RiSurveyLine } from 'react-icons/ri';
import { BiBarChartSquare } from 'react-icons/bi';
import { Router, useRouter } from 'next/router';

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

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
      className="hidden lg:block"
    >
      <BottomNavigation showLabels onChange={(event, newValue) => {}}>
        {drawerItems.map(([icon, text, link]) => (
          <BottomNavigationAction
            key={text}
            label={text}
            icon={icon}
            onClick={() => {
              // router.push(link);
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
