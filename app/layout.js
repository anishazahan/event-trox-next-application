import { Inter } from "next/font/google";
import { dbConnect } from "./Backend/Services/mongo";
import Navbar from "./Components/Shared/Navbar";
import "./globals.css";
import AuthProvider from "./Providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventrox",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="py-8">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
