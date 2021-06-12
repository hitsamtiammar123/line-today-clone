import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@mln-layouts'
import  './styles.scss';

const items = [
  {
    id: 1,
    src: 'https://obs.line-scdn.net/0hXBYyshuAB21kAC48_tV4Ol5WBAJXbBRuADZWczRuWVkeMkczXm9LWEhTCwoeY0AzCjFKDUAAHFwbNkNoDGBL',
    altText: 'Slide 1',
  },
  {
    id: 2,
    src: 'https://obs.line-scdn.net/0hXBYyshuAB21kAC48_tV4Ol5WBAJXbBRuADZWczRuWVkeMkczXm9LWEhTCwoeY0AzCjFKDUAAHFwbNkNoDGBL',
    altText: 'Slide 2',
  },
  {
    id: 3,
    src: 'https://obs.line-scdn.net/0hXBYyshuAB21kAC48_tV4Ol5WBAJXbBRuADZWczRuWVkeMkczXm9LWEhTCwoeY0AzCjFKDUAAHFwbNkNoDGBL',
    altText: 'Slide 3',
  }
];

export default function MyCarousel(){

  const [numTranslate, setNumTranslate] = useState(0);
  const [currIndex, setCurrIndex] = useState(0);
  const intervalVal = useRef(null);

  useEffect(() => {
    intervalVal.current = setTimeout(() => {
      toNextItem();
    }, 1500);

    return () => {
      clearTimeout(intervalVal.current);
    }
  },[currIndex, numTranslate]);

  function toNextItem(){
    if(numTranslate === -100 * (items.length - 1)){
      setCurrIndex(0);
      return setNumTranslate(0);
    }
    setNumTranslate(numTranslate - 100);
    setCurrIndex(currIndex + 1);
  }

  function toPrevItem(){
    if(numTranslate === 0){
      setCurrIndex(items.length - 1);
      return setNumTranslate((items.length - 1) * -100);
    }
    setNumTranslate(numTranslate + 100);
    setCurrIndex(currIndex - 1);
  }


  function onNextPress(){
    toNextItem();
  }

  function onPrevPress(){
    toPrevItem();
  }

  return (
    <Separator>
      <div className="my-carousel d-flex flex-row">
        {items.map(d => (
          <Link
            to="/"
            key={d.id}
            className="d-flex my-carousel-item flex-column justify-content-end" 
            style={{ backgroundImage: `url(${d.src})`, transform: `translateX(${numTranslate}%)`}}></Link>
        ))}
        {/* <button className="btn-control next">{'>'}</button> */}
      </div>
      <div className="d-flex flex-1 flex-row justify-content-between btn-container">
        <button onClick={onPrevPress} className="btn-control prev">{'<'}</button>
        <button onClick={onNextPress} className="btn-control next">{'>'}</button>
      </div>
      <div className="d-flex title-outer-container">
        <div className="title-container d-flex justify-content-center align-items-center">
          <span className="title-span">{Array.isArray(items) && items.length && items[currIndex].altText}</span>
        </div>
      </div>
    </Separator>
  );
}