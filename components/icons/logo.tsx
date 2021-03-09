import { IconProps } from '../../types';

const Logo = ({ height = 50, width = 50 }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 62 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="1.05777" y1="19.1119" x2="31.3687" y2="1.61194" stroke="#009EFA" strokeWidth="3" />
      <line x1="29.7781" y1="69.3787" x2="60.089" y2="51.8787" stroke="#009EFA" strokeWidth="3" />
      <line x1="60.264" y1="19.3955" x2="29.9531" y2="1.8955" stroke="#009EFA" strokeWidth="3" />
      <line x1="1.36172" y1="52.3383" x2="31.6726" y2="69.8382" stroke="#009EFA" strokeWidth="3" />
      <line x1="1.5" y1="18" x2="1.5" y2="53" stroke="#009EFA" strokeWidth="3" />
      <line x1="59.5" y1="18" x2="59.5" y2="53" stroke="#009EFA" strokeWidth="3" />
      <path d="M22.772 49V23.62H39.656V27.292H27.2V34.276H38.864V37.948H27.2V45.328H39.656V49H22.772Z" fill="#009EFA" />
    </svg>
  );
};

export default Logo;
