import "./globals.css";
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Henrique Pinheiro',
  description: 'Desenvolvedor Front-end com expertise em aplicações web e mobile. Graduado em Análise e Desenvolvimento de Sistemas.',
  icons: {
    icon: '/logo.jpeg'
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.className}> 
      <body className="bg-neutral-950 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
