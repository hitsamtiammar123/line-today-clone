import React from 'react';
import './styles.scss';

export default function Separator({ children, withPadding }){
  return (
    <div className={`mb-5 ${withPadding === true && 'with-padding'}`}>
      {children}
    </div>
  )
}