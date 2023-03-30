import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import localFont from "@next/font/local";
import { Toaster } from "react-hot-toast";
const myFont = localFont({ src: "../styles/fonts/SmileySans.woff2" });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Toaster position='top-center' />
      <main className={myFont.className}>
        <ThemeProvider attribute='class'>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </SessionProvider>
  );
}
