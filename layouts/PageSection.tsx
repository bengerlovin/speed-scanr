import React from 'react';

type PageSectionProps = {
  children: React.ReactNode;
  margin?: string;
  fullWidth?: boolean;
  alignment?: string;
}

export default function PageSection({ children, margin, fullWidth, alignment }: PageSectionProps) {


  let marginStying: string = margin ?? 'my-0'
  let widthStyling: string = ''
  let alignmentStyles: string = 'items-start'

  if (fullWidth) {
    widthStyling = 'w-full';
  }
  if (alignment) {
    alignmentStyles = alignment;
  }

  return (
    <>
      <section className={`flex flex-col ${widthStyling} ${alignment} justify-center ${marginStying}`}>
        {children}
      </section>
    </>
  );
}
