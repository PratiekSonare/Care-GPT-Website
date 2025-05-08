import { Raleway } from "next/font/google";
import { Oswald } from "next/font/google";

import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  weight: ["100", "400", "700", "900"], // include the weights you actually use
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["300"], // include the weights you actually use
  subsets: ["latin"],
});

export const metadata = {
  title: "CareGPT",
  description: "Use prompts catiously!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
