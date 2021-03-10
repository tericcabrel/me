import React from 'react';

import { IconProps } from '../../types';

const HamburgerIcon = ({ height = 32, width = 32 }: IconProps) => {
  return (
    <svg viewBox="0 0 48 48" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" fill="#009efa" />
      <path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" fill="#009efa" />
      <path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" fill="#009efa" />
    </svg>
  );
};

export default HamburgerIcon;
