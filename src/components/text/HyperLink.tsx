import React from 'react';

type Props = {
  url: string;
  displayText: string;
  isEmail?: boolean;
};

const Hyperlink = (props: Props) => {
  const { url, displayText, isEmail = false } = props;
  return (
    <div className="hyperlink">
      <a href={isEmail ? `mailto:${url}` : url} target="_blank" rel="noopener noreferrer">
        {displayText}{' '}
      </a>
    </div>
  );
};

export default Hyperlink;
