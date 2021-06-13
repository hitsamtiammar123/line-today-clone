import React, { useRef, useState } from 'react';
import { Separator } from '@mln-layouts';
import { StarButton } from '@mln-components'; 
import { usePrevious } from '@mln-hooks';
import { getImageSrc, getUrl, checkBookmark } from '@mln-utils';
import './styles.scss';

const transparentStyle = {
  backgroundColor: 'transparent',
  color: 'transparent',
  border: 'none',
};

export default function ListSlide(props){
  const { title, data, bookmarks } = props;

  const slideWrapper = useRef(null);
  const controlFlag = useRef(true);
  const [currScroll, setCurrentScroll] = useState(0);
  const [counter, setCounter] = useState(0);
  const [showNextButton, setShowNextButton] = useState(true); 
  const prevCurrScroll = usePrevious(currScroll);

  function debounceControlFlag(){
    setTimeout(() => {
      controlFlag.current = true;
    },500);
    controlFlag.current = false;
  }

  function startDebounce(callback){
    if(!controlFlag.current){
      return;
    }
    debounceControlFlag();
    callback();
  }

  function onNextClick(){
    if(slideWrapper.current){
      const s = slideWrapper.current.scrollLeft - (-308);
      setCurrentScroll(s);
      slideWrapper.current.scrollLeft = s;
      if(counter !== 10){
        setCounter(counter + 1);
      }
      if(Math.abs(currScroll - prevCurrScroll) <= 0 || counter === data.length - 1){
        setShowNextButton(false);
      }
    }
  }

  function onPrevClick(){
    if(showNextButton === false){
      setShowNextButton(true);
    }
    if(slideWrapper.current){
      let s = slideWrapper.current.scrollLeft - 308;
      if(s < 0){
        s = 0;
      }
      setCurrentScroll(s);
      slideWrapper.current.scrollLeft = s;
      if(counter !== 0){
        setCounter(counter - 1);
      }
    }
  }

  return (
    <Separator withPadding>
      <h2 className="title mb-3">{title}</h2>
      <div ref={slideWrapper} className="d-flex slide-wrapper">
        {data.map((d) => (
          <div key={d.id} className="d-flex flex-column slide-content">
            <div className="slide-img star-img" style={{backgroundImage: `url('${getImageSrc(d)}`}}>
              <StarButton isBookmark={checkBookmark(d, bookmarks)} data={d} />
            </div>
            <a href={getUrl(d)} className="d-flex flex-column slide-text-container">
              <h2>{d.title}</h2>
              <span>{d.publisher}</span>
            </a>
          </div>
        )) }
      </div>
      <div className="d-flex flex-row justify-content-between btn-container-slide">
        <button onClick={() => startDebounce(onPrevClick)} style={currScroll !== 0 ? {} : transparentStyle} className="btn-slide prev">{'<'}</button>
        <button onClick={() => startDebounce(onNextClick)} style={showNextButton ? {} : transparentStyle} className="btn-slide next">{'>'}</button>
      </div>
    </Separator>
  )
}