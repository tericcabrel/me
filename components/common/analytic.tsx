import { GA_TRACKING_ID } from '@/utils/gtag';
import { isProduction } from '@/utils/helpers';

const LoadAnalytic = () => {
  if (!isProduction() || !GA_TRACKING_ID) {
    return null;
  }

  return (
    <>
      <script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} async />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
        }}
      />
    </>
  );
};

export default LoadAnalytic;
