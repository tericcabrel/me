import { PropsWithChildren } from 'react';

type TimelineItemProps = {
  subTitle: string;
  title: string;
  extraTitle?: string;
};

const TimelineItem = ({ children, extraTitle, subTitle, title }: PropsWithChildren<TimelineItemProps>) => {
  return (
    <li className="mb-2">
      <div className="flex items-center mb-1">
        <div className="bg-slate rounded-full h-8 w-8" />
        <div className="flex-1 ml-4 font-bold text-color-white text-xl">
          {title}
          {extraTitle && <span className="text-color-primary">{` - ${extraTitle}`}</span>}
        </div>
      </div>
      <div className="ml-12">{subTitle}</div>
      <div className="ml-12 pt-4 pb-6">{children}</div>
    </li>
  );
};

export default TimelineItem;
