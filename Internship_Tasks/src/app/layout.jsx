import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ConditionalNavbar from "@/components/ConditionalNavbar/page";


const inter = Inter({ subsets: ["latin"] });

// Metadata object remains the same (exported for Next.js)
export const metadata = {
  title: "NexusLabs | Premium AI Systems",
  description: "Next-generation agentic deployment and system intelligence dashboard.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <ConditionalNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}