import { Grid, Typography, Card, CardContent } from "@mui/material";
import PermanentDrawerLeft from "@/components/Drawer";
import Image from "next/image";

const loadsData = [
  { imagePath: "/loads/images.jfif", caption: "Load Type 1" },
  { imagePath: "/loads/images.jfif", caption: "Load Type 2" },
  // Add more image and caption data as needed
];

export default function Loads() {
  return (
    <main className="bg-[#EEF4F6]">
      <PermanentDrawerLeft>
        <div className="h-[100vh] w-full p-8">
          <Typography variant="h5" sx={{mb:"8px"}}>Types of Loads</Typography>
          <Grid container spacing={3}>
            {loadsData.map((load, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <Image
                    src={load.imagePath}
                    alt={load.caption}
                    width={400} // Set your desired width
                    height={300} // Set your desired height
                  />
                  <CardContent>
                    <Typography variant="subtitle1" component="div">
                      {load.caption}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </PermanentDrawerLeft>
    </main>
  );
}
