import PermanentDrawerLeft from "@/components/Drawer";
import { reportData } from "@/lib/data";
import { Grid } from "@mui/material";
import { Inter } from "next/font/google";
import { FcAreaChart, FcElectricity } from "react-icons/fc";

const inter = Inter({ subsets: ["latin"] });

export default function Loads() {
  return (
    // bg-gradient-to-br from-[#cc543310] to-[#23074d10]

    <main className="bg-[#EEF4F6]">
      {/* <Navbar /> */}
      <PermanentDrawerLeft>
        <Grid container spacing={3}>
          {reportData.map((report, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} spacing={10}>
              <div className="rounded shadow p-6 flex flex-col items-center space-y-2 bg-white">
                <img src={"/icons/file.png"} className="w-16 h-16" />
                <h3 className="text-2xl font-semibold">{report.name}</h3>
                <p className="text-xl font-mono">{report.date}</p>
                <a href={report.path} download>
                  <img src={"/icons/download.png"} className="w-8 h-8" />
                </a>
              </div>
            </Grid>
          ))}
        </Grid>
      </PermanentDrawerLeft>
    </main>
  );
}
