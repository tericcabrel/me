import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { GoogleAnalytics } from '@/components/google-analytics';
import '@/styles/globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const url = process.env.NEXT_PUBLIC_WEB_URL;
const description = [
  "I'm interested in Backend, DX, Observability, DevOps, and Infrastructure as Code.",
  'I enjoy sharing my knowledge and contributing to open-source projects.',
];

export const metadata: Metadata = {
  title: 'Eric Cabrel TIOGO - Software Engineer',
  description: description.join(' '),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Eric Cabrel TIOGO - Software Engineer',
    description: description.join(' '),
    url,
    siteName: 'Eric Cabrel TIOGO',
    images: [
      {
        alt: 'Eric Cabrel TIOGO - Software Engineer',
        height: 720,
        url: `${url}/og.png`,
        width: 1280,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eric Cabrel TIOGO - Software Engineer',
    description: description.join(' '),
    images: [
      {
        alt: 'Eric Cabrel TIOGO - Software Engineer',
        height: 720,
        url: `${url}/og.png`,
        width: 1280,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body className="font-sans">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
