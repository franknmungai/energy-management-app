import PermanentDrawerLeft from '@/components/Drawer';
import { ISDevices, devicesData } from '@/lib/data';
import { Grid } from '@mui/material';

export default function Loads() {
  return (
    <main className="bg-[#EEF4F6]">
      <PermanentDrawerLeft>
        <div className="h-[100vh] w-full p-8">
          <h1 className="text-2xl mb-4">MTL</h1>
          <Grid container spacing={3}>
            {devicesData.map((load, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} spacing={10}>
                <div className="rounded shadow p-6 flex flex-col items-center space-y-2 bg-white">
                  <img src={load.image} className="w-16 h-16" />
                  <h3 className="text-2xl font-semibold">{load.type}</h3>
                  <p className="text-xl font-mono">{load.number}</p>

                  <div className="space-y-2">
                    <p className="mt-2">{load.averageConsumption}</p>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>

          <section className="my-6">
            <h1 className="text-2xl mb-4">School of IS</h1>
            <Grid container spacing={3}>
              {ISDevices.map((load, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} spacing={10}>
                  <div className="rounded shadow p-6 flex flex-col items-center space-y-2 bg-white">
                    <img src={load.image} className="w-16 h-16" />
                    <h3 className="text-2xl font-semibold">{load.type}</h3>

                    <p className="text-xl font-mono">{load.number}</p>

                    <div className="space-y-2">
                      <p className="mt-2">{load.averageConsumption}</p>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </section>
        </div>
      </PermanentDrawerLeft>
    </main>
  );
}
