export const devicesData = [
  {
    type: 'Desktops',
    number: 133,
    predominantBrands: ['HP', 'Dell'],
    averageConsumption: '75-200 Watts per device',
    image: '/loads/desktops.png',
  },
  {
    type: 'Printers',
    number: 10,
    averageConsumption: '300-500 Watts per device',
    image: '/loads/printers.png',
  },
  {
    type: 'Photocopiers',
    number: 2,
    averageConsumption: '800-1500 Watts per device',
    image: '/loads/photocopiers.png',
  },
  {
    type: 'TV Screens',
    number: 1,
    brand: 'Samsung',
    averageConsumption: '100-200 Watts per hour',
    image: '/loads/TVs.png',
  },
  {
    type: 'Switches',
    number: 14,
    variousPortConfigurations: true,
    averageConsumption: 'Varies between 50-200 Watts per device',
    image: '/loads/switches.png',
  },
];
export const reportData = [
  {
    name: 'Progress Report 1',
    path: '/docs/report1.pdf',
    date: '03-10-2023',
  },
  {
    name: 'Progress Report 2',
    path: '/docs/report2.pdf',
    date: '10-10-2023',
  },
  {
    name: 'Progress Report 3',
    path: '/docs/report3.pdf',
    date: '17-10-2023',
  },
  {
    name: 'Progress Report 4',
    path: '/docs/report4.pdf',
    date: '24-10-2023',
  },
  {
    name: 'Progress Report 5',
    path: '/docs/report5.pdf',
    date: '31-10-2023',
  },
  {
    name: 'Progress Report 6',
    path: '/docs/report6.pdf',
    date: '07-11-2023', // One week after Report 5
  },
  {
    name: 'Progress Report 7',
    path: '/docs/report7.pdf',
    date: '14-11-2023', // One more week after Report 6
  },
];

export const ISDevices = [
  {
    type: 'Desktops',
    number: 80,
    averageConsumption: '24kW',
    image: '/loads/desktops.png',
  },
  {
    type: 'Sockets',
    number: 146,
    image: '/loads/sockets.png',
  },
  {
    type: 'Ethernet Switches',
    number: 12,
    rating: `100-240V 4-8 Amperes`,
    image: '/loads/ethernet.png',
  },
  {
    type: 'Light Bulbs',
    image: '/loads/bulbs.png',
    number: 268,
  },
];

export const monthlyConsumptionData = [
  { name: 'Jan', pv: 17500 },
  { name: 'Feb', pv: 21250 },
  { name: 'Mar', pv: 25000 },
  { name: 'April', pv: 19500 },
  { name: 'May', pv: 19000 },
  { name: 'June', pv: 20412 },
  { name: 'July', pv: 21038 },
  { name: 'Aug', pv: 20000 },
  { name: 'Sep', pv: 18990 },
  { name: 'Oct', pv: 0 },
  { name: 'Nov', pv: 0 },
  { name: 'Dec', pv: 0 },
];

export const monthlyBillingData = monthlyConsumptionData.map((d) => ({
  ...d,
  pv: d.pv * 15,
}));

export const occupancyData = [
  {
    name: 'Jan',
    uv: 850,
    pv: 746,
  },
  {
    name: 'Feb',
    uv: 802,
    pv: 605,
  },
  {
    name: 'Mar',
    uv: 975,
    pv: 752,
  },
  {
    name: 'Apr',
    uv: 988,
    pv: 635,
  },
  {
    name: 'May',
    uv: 521,
    pv: 345,
  },
  {
    name: 'June',
    uv: 638,
    pv: 427,
  },
  {
    name: 'July',
    uv: 662,
    pv: 445,
  },
  {
    name: 'Aug',
    uv: 538,
    pv: 426,
  },
  {
    name: 'Sep',
    uv: 1241,
    pv: 834,
  },
  {
    name: 'Oct',
    uv: 1352,
    pv: 771,
  },
];

export const monthlyConsumptionData2022 = [
  { name: 'Jan', pv: 28212.7455 },
  { name: 'Feb', pv: 28212.7455 },
  { name: 'Mar', pv: 29632.403 },
  { name: 'April', pv: 24423.7 },
  { name: 'May', pv: 26901.45 },
  { name: 'June', pv: 25874.3885 },
  { name: 'July', pv: 24976.8 },
  { name: 'Aug', pv: 24976.8 },
  { name: 'Sep', pv: 32254.0035 },
  { name: 'Oct', pv: 29811.1 },
  { name: 'Nov', pv: 29811.1 },
  { name: 'Dec', pv: 29811.1 },
];

export const monthlyBillingData2022 = [
  { name: 'Jan', pv: 564254.91 },
  { name: 'Feb', pv: 564254.91 },
  { name: 'Mar', pv: 592648.06 },
  { name: 'April', pv: 488474 },
  { name: 'May', pv: 538029 },
  { name: 'June', pv: 517487.77 },
  { name: 'July', pv: 499536 },
  { name: 'Aug', pv: 499536 },
  { name: 'Sep', pv: 645080.07 },
  { name: 'Oct', pv: 596222 },
  { name: 'Nov', pv: 596222 },
  { name: 'Dec', pv: 596222 },
];

export const monthlyConsumptionData2021 = [
  { name: 'Jan', pv: 31114.6 },
  { name: 'Feb', pv: 32070.65 },
  { name: 'Mar', pv: 34215.15 },
  { name: 'April', pv: 16829.35 },
  { name: 'May', pv: 16628.333 },
  { name: 'June', pv: 16678.33 },
  { name: 'July', pv: 16178.3 },
  { name: 'Aug', pv: 15678.333 },
  { name: 'Sep', pv: 15178.3 },
  { name: 'Oct', pv: 15228.3 },
  { name: 'Nov', pv: 15128.3 },
  { name: 'Dec', pv: 15128.3 },
];

export const monthlyBillingData2021 = [
  { name: 'Jan', pv: 622292 },
  { name: 'Feb', pv: 641413 },
  { name: 'Mar', pv: 684303 },
  { name: 'April', pv: 336587 },
  { name: 'May', pv: 332566 },
  { name: 'June', pv: 333566 },
  { name: 'July', pv: 323566 },
  { name: 'Aug', pv: 313566 },
  { name: 'Sep', pv: 303566 },
  { name: 'Oct', pv: 304566 },
  { name: 'Nov', pv: 302566 },
  { name: 'Dec', pv: 302566 },
];
