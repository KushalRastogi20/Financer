import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header.jsx";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({substs:["latin"]})
export const metadata = {
  title: "Financer",
  description: "An Ai powered finance tracker",
};

export default function RootLayout({ children }) {
  return (
   <ClerkProvider>
     <html lang="en">
      <body className={`${inter.className}`}>
        {/*Header*/}
        <Header className="bg-gray-200 text-black text-center p-4">
          </Header>
        <main className="min-h-screen bg-black text-white">
          {children}
        </main>
        
        {/*Footer*/}
        <footer className="bg-gray-200 text-black  text-center p-4">
          <p>By CapCoder</p>
        </footer>
      </body>
    </html>
   </ClerkProvider>
  );
}
