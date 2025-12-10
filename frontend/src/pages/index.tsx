import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex flex-col items-center justify-center min-h-screen py-2`}
    >
      <h1 className="text-2xl font-bold">Welcome to;</h1>
      <h2 className="text-lg font-semibold">Smart Mess Management</h2>
      {/* write a description here */}
      <p className="mt-4 text-center max-w-md">
        Smart Mess Management is an innovative solution designed to streamline
        and enhance the operations of mess halls and cafeterias. Our platform
        offers efficient meal planning, inventory management, and real-time
        analytics to ensure a seamless dining experience for both staff and
        patrons.
      </p>
    </div>
  );
}
