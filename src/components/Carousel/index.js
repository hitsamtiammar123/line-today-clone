import React, { useState, useEffect, useRef } from 'react';
import { Separator } from '@mln-layouts'
import { getImageSrc, getUrl } from '@mln-utils';
import  './styles.scss';

export default function MyCarousel({data}){

  const [numTranslate, setNumTranslate] = useState(0);
  const [currIndex, setCurrIndex] = useState(0);
  const intervalVal = useRef(null);

  useEffect(() => {
    intervalVal.current = setTimeout(() => {
      toNextItem();
    }, 2000);

    return () => {
      clearTimeout(intervalVal.current);
    }
  },[currIndex, numTranslate]);

  function toNextItem(){
    if(numTranslate === -100 * (data.length - 1)){
      setCurrIndex(0);
      return setNumTranslate(0);
    }
    setNumTranslate(numTranslate - 100);
    setCurrIndex(currIndex + 1);
  }

  function toPrevItem(){
    if(numTranslate === 0){
      setCurrIndex(data.length - 1);
      return setNumTranslate((data.length - 1) * -100);
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

  if(data.length === 0){
    return null;
  }

  return (
    <Separator>
      <div className="my-carousel d-flex flex-row">
        {data.map(d => (
          <a
            href={getUrl(d)}
            key={d.id}
            className="d-flex my-carousel-item flex-column justify-content-end" 
            style={{ transform: `translateX(${numTranslate}%)`}}>
              <img className="img" src={getImageSrc(d)} alt={d.title} />
            </a>
        ))}
        {/* <button className="btn-control next">{'>'}</button> */}
      </div>
      <div className="d-flex flex-1 flex-row justify-content-between btn-container">
        <button onClick={onPrevPress} className="btn-control prev">{'<'}</button>
        <button onClick={onNextPress} className="btn-control next">{'>'}</button>
      </div>
      <div className="d-flex title-outer-container">
        <div className="title-container d-flex justify-content-center align-items-center">
          <span className="title-span">{Array.isArray(data) && data.length && data[currIndex].title}</span>
        </div>
      </div>
    </Separator>
  );
}