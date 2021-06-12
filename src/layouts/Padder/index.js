import React from 'react';
import './styles.scss';

export default function Padder({ children }){
  return (
    <header className="d-flex flex-column h">
      {children}
    </header> 
  )
}