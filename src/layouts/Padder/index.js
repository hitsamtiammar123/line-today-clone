import React from 'react';
import './styles.scss';

export default function Padder({ children }){
  return (
    <div className="d-flex flex-column h">
      {children}
    </div> 
  )
}