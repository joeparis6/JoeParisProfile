import React from 'react';
import Hyperlink from './HyperLink';

type Props = {
  logo: React.ReactNode;
  isEmail?: boolean;
  url: string;
};

const LogoLink = (props: Props) => {
  const { logo, isEmail, url } = props;
  return (
    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
      <a href={isEmail ? `mailto:${url}` : url} target="_blank" rel="noopener noreferrer">
        {logo}
      </a>
    </div>
  );
};

export default LogoLink;
