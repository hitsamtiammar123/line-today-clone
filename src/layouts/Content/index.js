import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles.scss';

export default function Content({data}){

  return (
    <div className="content">
      This is main content id = {data.id}
    </div>
  )
}