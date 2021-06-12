import React from 'react';
import Star from '@mln-svg/star.svg'
import './styles.scss';

export default function StarButton(){
  return (
    <div onClick={() => {
      console.log('bookmark clicked')
    }} className="bookmark-btn">
      <img src={Star} alt="Star"/>
    </div>
  )
}