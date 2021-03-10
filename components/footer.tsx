import React from 'react';

import CustomLink from '@/components/common/customLink';

const Footer = () => {
  return (
    <footer className="text-center py-4 text-color-white">
      <div className="font-bold text-sm">Built by Eric Cabrel TIOGO</div>
      <div className="text-sm">
        Inspired by{' '}
        <CustomLink path="https://brittanychiang.com">
          <span className="text-color-primary">Brittany Chiang</span>
        </CustomLink>
      </div>
      <div className="text-sm mt-2">&copy; Copyright {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
