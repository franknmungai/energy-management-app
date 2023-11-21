import BottomNav from '@/components/BottomNav';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <div className="fixed z-10 bottom-0 left-0 right-0 w-full lg:hidden ">
        <BottomNav />
      </div>
    </div>
  );
}
