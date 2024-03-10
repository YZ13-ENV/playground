import type { Metadata, Viewport } from "next";
import { Geologica, JetBrains_Mono } from "next/font/google";
import { WebVitals } from 'ui';
import "ui/dist/style.css";
import "./globals.css";
const first_font = Geologica({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "500", "400", "300", "200"],
  variable: "--root-font",
});
const second_font = JetBrains_Mono({
  subsets: ["cyrillic", "latin"],
  weight: "variable",
  variable: "--second-font"
})

export const metadata: Metadata = {
  title: "Weecode Play",
  description: "Created by DM Family",
};
export const viewport: Viewport = {
  themeColor: "#000",
  colorScheme: "dark"
}

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html
      lang="en"
      className={`${first_font.className} ${first_font.variable} ${second_font.variable}`}
    >
      <WebVitals appId="darkmaterial-weecode-play" />
      <body className="min-h-screen dark">
        {children}
      </body>
    </html>
  );
}