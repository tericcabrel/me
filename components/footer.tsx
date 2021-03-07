import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-4">
      <div className="font-bold">Designed & Built by Eric Cabrel TIOGO</div>
      <div className="text-sm mt-2">Copyright {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
