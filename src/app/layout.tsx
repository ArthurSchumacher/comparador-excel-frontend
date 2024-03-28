import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});

export const metadata: Metadata = {
  title: "Comparador de excel",
  description: "Comparador bala ok? para o tio adao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#13152A",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
