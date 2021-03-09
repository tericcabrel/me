import React, { PropsWithChildren } from 'react';

type StackItemProps = {
  title: string;
};

const StackItem = ({ children, title }: PropsWithChildren<StackItemProps>) => {
  return (
    <div className="cursor-default">
      <div className="flex items-center justify-center flex-col bg-white shadow-xl rounded-xl p-4">
        <div className="flex items-center justify-center flex-shrink-0 h-20 w-20 rounded-xl">{children}</div>
        <div className="text-lg font-bold mt-3">{title}</div>
      </div>
    </div>
  );
};

export default StackItem;
