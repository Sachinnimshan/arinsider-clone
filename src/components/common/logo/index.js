import React from 'react';

function Logo({src, className, onClick}) {
  return (
    <img src={src} className={className} onClick={onClick}/>
  )
}

export default Logo;
