import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Star2 from '@mln-svg/star-2.svg'
import StarYellow from '@mln-svg/star-yellow.svg'
import {
  setBookmark as setBookmarkProps,
  removeBookmark as removeBookmarkProps
} from '@mln-redux/actions';
import './styles.scss';

export default function StarButton({ data, isBookmark: isBookmarkProps }){

  const [isBookmark, setIsBookmark] = useState(isBookmarkProps);
  const dispatch = useDispatch();

  function onBookmarkClick(){
    if(isBookmark){
      dispatch(removeBookmarkProps(data));
    }
    else{
      dispatch(setBookmarkProps(data));
    }
    setIsBookmark(!isBookmark);
  }

  return (
    <div onClick={onBookmarkClick} className="bookmark-btn">
      <img src={isBookmark ? StarYellow : Star2} alt="Star"/>
    </div>
  )
}
