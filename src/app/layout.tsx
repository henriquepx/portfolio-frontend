import "./globals.css";
import Head from "next/head";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.className}> 
      <Head>
        <title>Henrique Pinheiro</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <body className="bg-neutral-950">
        {children}
      </body>
    </html>
  );
}
