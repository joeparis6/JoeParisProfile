import React from 'react';

type Props = {
  title: string;
};

const PageHeader = (props: Props) => {
  const { title } = props;
  return (
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
    </div>
  );
};

export default PageHeader;
