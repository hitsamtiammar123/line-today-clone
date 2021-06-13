import React, { useState } from 'react';
import Star2 from '@mln-svg/star-2.svg'
import StarYellow from '@mln-svg/star-yellow.svg'
import './styles.scss';

export default function StarButton(){

  const [isBookmark, setIsBookmark] = useState(false);

  return (
    <div onClick={() => {
     setIsBookmark(!isBookmark);
    }} className="bookmark-btn">
      <img src={isBookmark ? StarYellow : Star2} alt="Star"/>
    </div>
  )
}