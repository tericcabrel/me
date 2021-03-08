import React, { PropsWithChildren } from 'react';

type SectionProps = {
  title: string;
  id: string;
};

const Section = ({ children, id, title }: PropsWithChildren<SectionProps>) => {
  return (
    <section id={id} className="section">
      <div className="flex items-center mb-5">
        <div className="text-color-white font-bold pr-6 text-4xl flex-initial">{title}</div>
        <div className="border flex-auto mt-3" />
      </div>
      {children}
    </section>
  );
};

export default Section;