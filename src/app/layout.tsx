import "./globals.css";
import { metadata } from "./metadata";
import { NeuroTestProvider } from "../components/NeuroTestPopup/NeuroTestContext";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="" suppressHydrationWarning={true}>
        <NeuroTestProvider>
          {children}
        </NeuroTestProvider>
      </body>
    </html>
  );
}
