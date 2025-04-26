import React from 'react';
// import { ThemeContext } from '../context/themeContext';
const Email = () => {
  // const { theme } = React.useContext(ThemeContext);
  // const fill = theme === 'dark' ? 'white' : 'black';
  const fill = 'white';
  return (
    <svg width={32} height={20} viewBox="0 0 155 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.59123 0L81.6922 33.5844L78.1423 41.5228C77.9168 42.0269 77.3253 42.2529 76.8212 42.0274L3.4714 9.22619H0V6.45833C0 4.74548 0.68043 3.10277 1.8916 1.8916C3.10277 0.68043 4.74548 0 6.45833 0V0.297182L6.59123 0Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M148.071 0L73.8217 33.2034L77.3716 41.1418C77.5971 41.6459 78.1886 41.8719 78.6927 41.6464L151.19 9.22619H154.662V6.45833C154.662 4.74548 153.981 3.10277 152.77 1.8916C151.559 0.68043 149.916 0 148.204 0V0.297182L148.071 0Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 0C3.13401 0 0 3.134 0 6.99999V82.494C0 86.36 3.13401 89.494 7 89.494H148C151.866 89.494 155 86.3601 155 82.4941V7C155 3.13401 151.866 0 148 0H7ZM14.381 8.30362C10.515 8.30362 7.38095 11.4376 7.38095 15.3036V74.1905C7.38095 78.0565 10.515 81.1905 14.381 81.1905H141.542C145.408 81.1905 148.542 78.0565 148.542 74.1905V15.3036C148.542 11.4376 145.408 8.30362 141.542 8.30362H14.381Z"
        fill={fill}
      />
    </svg>
  );
};

export default Email;
