import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import PermanentDrawerLeft from '@/components/Drawer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    // bg-gradient-to-br from-[#cc543310] to-[#23074d10]

    <main className="bg-[#EEF4F6]">
      {/* <Navbar /> */}
      <PermanentDrawerLeft />
    </main>
  );
}
