import React from 'react';
import Hyperlink from './HyperLink';

type Props = {
  logo: React.ReactNode;
};

const LogoLink = (props: Props) => {
  const { logo, ...other } = props;
  return (
    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
      {logo}
      <Hyperlink {...other} />
    </div>
  );
};

export default LogoLink;
