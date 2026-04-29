import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}