import type { Metadata } from "next";
import Nav from "./components/nav";
import "../globals.css";

export const metadata: Metadata = {
  title: "Enkhtushig's Portfolio",
  description: "Full-Stack Developer",
  icons: {
    icon: '/snowman.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </head>
      <body
        className="antialiased h-screen w-screen overflow-x-hidden"
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
