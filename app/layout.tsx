import '@/app/ui/global.css';
import { inter } from '@/app/ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} antialiased`}>{children}</body>
      {/* <body>{children}</body> */}
      {/* <h1 className="text-blue-500">I'm blue!Cortana. Stop.</h1> */}
    </html>
  );
}
