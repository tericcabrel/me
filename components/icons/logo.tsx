import { IconProps } from '../../types';

const Logo = ({ height = 50, width = 50 }: IconProps) => {
  return (
    <svg fill="none" height={height} viewBox="0 0 62 72" width={width} xmlns="http://www.w3.org/2000/svg">
      <line stroke="#009EFA" strokeWidth="3" x1="1.05777" x2="31.3687" y1="19.1119" y2="1.61194" />
      <line stroke="#009EFA" strokeWidth="3" x1="29.7781" x2="60.089" y1="69.3787" y2="51.8787" />
      <line stroke="#009EFA" strokeWidth="3" x1="60.264" x2="29.9531" y1="19.3955" y2="1.8955" />
      <line stroke="#009EFA" strokeWidth="3" x1="1.36172" x2="31.6726" y1="52.3383" y2="69.8382" />
      <line stroke="#009EFA" strokeWidth="3" x1="1.5" x2="1.5" y1="18" y2="53" />
      <line stroke="#009EFA" strokeWidth="3" x1="59.5" x2="59.5" y1="18" y2="53" />
      <path d="M22.772 49V23.62H39.656V27.292H27.2V34.276H38.864V37.948H27.2V45.328H39.656V49H22.772Z" fill="#009EFA" />
    </svg>
  );
};

export default Logo;
