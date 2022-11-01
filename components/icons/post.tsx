import React from 'react';

import { IconProps } from '../../types';

const PostIcon = ({ height = 64, width = 64 }: IconProps) => {
  return (
    <svg height={height} version="1.1" width={width}>
      <g transform="translate(0 -1028.4)">
        <path
          d="m2 4v13.531 2.469c0 1.105 0.8954 2 2 2h4 8l6-6v-12h-20z"
          fill="#f1c40f"
          transform="translate(0 1028.4)"
        />
        <path d="m22 1044.4-6 6v-4c0-1.1 0.895-2 2-2h4z" fill="#f39c12" />
        <path
          d="m4 2c-1.1046 0-2 0.8954-2 2v1 1h20v-1-1c0-1.1046-0.895-2-2-2h-4-8-4z"
          fill="#f1c40f"
          transform="translate(0 1028.4)"
        />
        <g fill="#f39c12">
          <rect height="2" width="14" x="5" y="1034.4" />
          <rect height="2" width="14" x="5" y="1038.4" />
          <rect height="2" width="9" x="5" y="1042.4" />
        </g>
      </g>
    </svg>
  );
};

export default PostIcon;
