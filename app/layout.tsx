import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/utils/ThemeProvider";
import NextTopLoader from 'nextjs-toploader';
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "800", "900"] });


export const metadata: Metadata = {
  title: {
    default: "Kenalin My Socials",
    template: "%s | Kenalin My Socials",
  }, 
  description: "Kenalin My Socials",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head/>
        <body className={poppins.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >  
          <NextTopLoader
                color="#e11d48"
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={false}
                easing="ease"
                speed={200}
                shadow="0 0 0px #e11d48,0 0 0px #e11d48"
                template='<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                zIndex={1600}
                showAtBottom={false}
              />
          <div className="absolute inset-0 -z-10 h-[600px] w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-10 dark:opacity-25 blur-[100px]"></div></div>
            <main className="flex flex-col justify-center items-center py-[22px] px-10 md:px-28 md:py-12">
              {children}
            </main>
          </ThemeProvider>
          </body>
      </html>

    </ClerkProvider>
  );
}
