import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Inter } from 'next/font/google';

import {
  BiSolidDashboard,
  BiMenu,
  BiBarChartSquare,
  BiUser,
} from 'react-icons/bi';
import { RxDashboard, RxRocket } from 'react-icons/rx';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { MdOutlineDevices } from 'react-icons/md';
import { RiSurveyLine } from 'react-icons/ri';
import { FcAreaChart, FcElectricity } from 'react-icons/fc';

import Chart1 from './Chart1';

const drawerWidth = 280;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerItems = [
  [<RxDashboard />, 'Dashboard'],
  [<BiBarChartSquare />, 'Analytics'],
  [<MdOutlineDevices />, 'Loads'],
  [<HiOutlineDocumentReport />, 'Report'],
  [<RxRocket />, 'Recommendations'],
];

const secondaryItems = [
  [<RiSurveyLine />, 'Data entry'],
  [<BiUser />, 'User Account'],
];

const inter = Inter({ subsets: ['latin'] });

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const [active, setActive] = useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="p-1.5">
      {/* Logo */}
      <div className="w-full h-24"></div>
      <List>
        {drawerItems.map(([icon, text], index) => {
          const isActive = index === active;
          return (
            <ListItem
              key={index}
              sx={{
                mb: 2,
              }}
            >
              <ListItemButton
                sx={{
                  pt: 1.5,
                  pb: 1.5,
                  pr: 8,
                  pl: 2.5,
                  borderRadius: 2,
                  bgcolor: isActive ? '#fff' : '',
                  boxShadow: isActive ? 3 : 0,
                }}
                onClick={() => setActive(index)}
              >
                {/* <ListItemIcon sx={{ fontSize: 22, mr: -2, fontWeight: 800 }}>
                  {icon}
                </ListItemIcon> */}
                <div className={`${isActive && 'font-bold'} flex space-x-6`}>
                  <p className="text-2xl">{icon}</p>
                  <p>{text}</p>
                </div>
                {/* <ListItemText
                  primary={text}
                  sx={{ fontSize: active ? '800' : '500' }}
                /> */}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {secondaryItems.map(([icon, text], index) => (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemIcon sx={{ fontSize: 22 }}>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', bgcolor: '#EEF4F6' }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: '#EEF4F6',

          // background: 'linear-gradient(to right, #cc543310, #23074d10);',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <BiMenu />
          </IconButton>
          <h2 className="text-xl text-gray-600">Energy Management App</h2>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },

            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              padding: 12,
              bgcolor: '#EEF4F6',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              bgcolor: '#EEF4F6',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div className="h-[100vh] w-full p-8">
          <div className="flex gap-8">
            <div className="shadow-md bg-white rounded-md p-6 max-h-64">
              <div className="flex gap-4">
                <div className="p-2 bg-gray-300 rounded-full">
                  <FcElectricity size={28} />
                </div>{' '}
                <p className="text-xl font-semibold">Consumption</p>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                Average Monthly Power Consumption
              </p>

              <p
                className={`${inter.className} text-5xl font-extrabold text-blue-500 py-12`}
              >
                300 kWH
              </p>
            </div>
            <div className="shadow-md bg-white rounded-md p-6 flex-1">
              <p className="text-xl">
                <FcAreaChart size={40} />
              </p>

              <Chart1 />
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}
