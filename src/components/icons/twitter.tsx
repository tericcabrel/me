import type { IconProps } from '@/types';

export const TwitterIcon = ({ height = 24, width = 24 }: IconProps) => {
  return (
    <svg height={height} viewBox="0 0 24 24" width={width}>
      <title>Twitter</title>
      <path
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
        fill="#ccd6f6"
      />
    </svg>
  );
};

export const TwitterDarkIcon = ({ height = 24, width = 24 }: IconProps) => {
  return (
    <svg height={height} viewBox="0 0 128 128" width={width}>
      <title>Twitter Dark</title>
      <path
        d="M75.916 54.2 122.542 0h-11.05L71.008 47.06 38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303 89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086-39.42-56.386h16.972L65.19 53.824l4.954 7.086 41.353 59.15h-16.97L60.782 71.793Z"
        fill="#000"
        strokeWidth=".104373"
      />
    </svg>
  );
};
