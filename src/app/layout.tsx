import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "@/components/ui/toaster";

import '@radix-ui/themes/styles.css';
import '@/app/layout.css';



export const metadata: Metadata = {
  title: "Agility STK"
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="m-0 p-0 h-screen overflow-hidden box-border">
        <Theme
          appearance="dark"
          accentColor="teal"
          grayColor="slate"
        >
          {children}
          <Toaster />
        </Theme>
      </body>
    </html>
  );
}
