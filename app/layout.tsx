import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BootcampVerify – Track Real Job Placement Rates",
  description: "Scrape-verified LinkedIn data on coding bootcamp job placements and salaries. Make an informed decision before you enroll."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9df12345-6cc8-4a73-b07d-7579f592c9e8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
