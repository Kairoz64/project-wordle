import React from 'react';

function Banner({ type, children }) {
  const className = type ? `${type} banner` : 'banner';
  return <div className={className}>{children}</div>;
}

export default Banner;
