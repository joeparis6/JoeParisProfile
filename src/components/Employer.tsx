import React from 'react';

type Props = {
  children?: React.ReactNode;
  employerName: string;
  position: string;
  dates: string;
  location: string;
};

const Employer = (props: Props) => {
  const { children, employerName, position, dates, location } = props;
  return (
    <div className="m-5 rounded-sm p-5 hover:bg-gray-700">
      <h1 className="text-2xl font-bold">{employerName}</h1>
      <div className="flex items-center justify-between">
        {' '}
        <div className="flex gap-2">
          <h2 className="text-xl">{position}</h2>
          <h3 className="text-xl">{' - '}</h3>
          <h3 className="text-xl">{location}</h3>
        </div>
        <h2 className="text-xl">{dates}</h2>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Employer;
