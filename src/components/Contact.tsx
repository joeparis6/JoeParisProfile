import Email from '@/svgs/Email';
import LinkedIn from '@/svgs/LinkedIn';
import React from 'react';
import LogoLink from './text/LogoLink';
import Github from '@/svgs/Github';

const Contact = () => {
  return (
    <div className="fixed right-8 bottom-4 z-50">
      <div className="flex gap-[15px]">
        <LogoLink url={'josephparis6@gmail.com'} displayText={'Email'} logo={<Email />} isEmail />
        <LogoLink
          url={'https://www.linkedin.com/in/joe-paris-1891a1229/'}
          displayText={'LinkedIn'}
          logo={<LinkedIn />}
        />
        <LogoLink url={'https://github.com/joeparis6'} displayText={'Github'} logo={<Github />} />
      </div>
    </div>
  );
};

export default Contact;
