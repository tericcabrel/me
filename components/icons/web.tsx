import { IconProps } from '../../types';

const WebIcon = ({ height = 50, width = 50 }: IconProps) => {
  return (
    <svg
      className="feather feather-folder"
      fill="none"
      height={height}
      role="img"
      stroke="#009efa"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>
  );
};

export default WebIcon;
