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

import { BiMenu, BiBarChartSquare, BiUser } from 'react-icons/bi';
import { RxDashboard, RxRocket } from 'react-icons/rx';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { MdOutlineDevices } from 'react-icons/md';
import { RiSurveyLine } from 'react-icons/ri';
import { FcAreaChart, FcElectricity } from 'react-icons/fc';

import Chart1 from './Chart1';
import { useMediaQuery } from '@mui/material';
import DataPanel from './DataPanel';
import Image from 'next/image';
import Chart2 from './Chart2';
import ChartPanel from './ChartPanel';

const drawerWidth = 280;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactNode;
}

const drawerItems = [
  [<RxDashboard />, "Dashboard", "/"],
  [<BiBarChartSquare />, "Analytics", "/analytics"],
  [<MdOutlineDevices />, "Loads", "/loads"],
  [<HiOutlineDocumentReport />, "Report", "/report"],
  [<RxRocket />, "Recommendations", "/recommendations"],
];

const secondaryItems = [
  [<RiSurveyLine />, "Data entry", "/data_entry"],
  [<BiUser />, "User Account", "/account"],
];

export default function ResponsiveDrawer(props: Props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width:600px)');

  console.log({ isMobile });

  const [active, setActive] = useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="p-1.5">
      {/* Logo */}
      <div className="w-full h-24"></div>
      <List>
        {drawerItems.map(([icon, text, link], index) => {
          const isActive = index === active;
          return (
            <NextLink href={link}>
              <ListItem key={index}>
                <ListItemButton>
                  <ListItemIcon sx={{ fontSize: 22 }}>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </NextLink>
          );
        })}
      </List>
      <Divider />
      <List>
        {secondaryItems.map(([icon, text, link], index) => (
          <NextLink href={link}>
            <ListItem key={index}>
              <ListItemButton>
                <ListItemIcon sx={{ fontSize: 22 }}>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </NextLink>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", bgcolor: "#EEF4F6" }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "#EEF4F6",

          // background: 'linear-gradient(to right, #cc543310, #23074d10);',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
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
            display: { xs: "block", sm: "none" },

            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              padding: 12,
              bgcolor: "#EEF4F6",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#EEF4F6",
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Container 1: Summary */}
            <DataPanel
              title="Consumption"
              subtitle="Average monthly power consumption"
              data="700 [kWH]"
              icon={
                <Image
                  width={40}
                  height={40}
                  src="/icons/gauge.png"
                  alt="gauge"
                />
              }
            />

            {/* Container 2: Chart */}
            <ChartPanel title="Monthly power consumption">
              <Chart1 />
            </ChartPanel>

            <DataPanel
              title="Current Energy Usage"
              subtitle="Daily consumption average"
              data="48 [kWH]"
              icon={<FcElectricity size={28} />}
            />

            <ChartPanel title="Daily user statistics">
              {/* <Chart2 /> */}
            </ChartPanel>
          </div>
        </div>
      </Box>
    </Box>
  );
}
