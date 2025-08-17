'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';
import { isProduction } from '@/utils/helpers';

// Type declarations for Google Analytics
declare global {
  // biome-ignore lint/nursery/useConsistentTypeDefinitions: Global interface extension is standard TypeScript pattern
  interface Window {
    gtag: (command: 'config' | 'event' | 'js' | 'set', targetId: string, config?: Record<string, any>) => void;
  }
}

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageView = (url: string) => {
  if (GA_TRACKING_ID && process.env.NODE_ENV === 'production') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && isProduction()) {
      pageView(pathname);
    }
  }, [pathname]);

  if (!GA_TRACKING_ID || !isProduction()) {
    return null;
  }

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}&l=dataLayer`}
      />
    </>
  );
}
