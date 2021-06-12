import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@mln-layouts';
import { StarButton } from '@mln-components'; 
import { usePrevious } from '@mln-hooks';
import './styles.scss';

export default function ListSlide(props){
  const { title } = props;

  const slideWrapper = useRef(null);
  const [currScroll, setCurrentScroll] = useState(0);
  const prevCurrScroll = usePrevious(currScroll);
  const [counter, setCounter] = useState(0); 

  function onNextClick(){
    if(slideWrapper.current){
      const s = slideWrapper.current.scrollLeft - (-308);
      setCurrentScroll(s);
      slideWrapper.current.scrollLeft = s;
      if(counter !== 10){
        setCounter(counter + 1);
      }
    }
  }

  function onPrevClick(){
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
        {Array.from(Array(10)).map((i,index) => (
          <div key={index} className="d-flex flex-column slide-content">
            <div className="slide-img star-img" style={{backgroundImage: `url('https://obs.line-scdn.net/0hXBYyshuAB21kAC48_tV4Ol5WBAJXbBRuADZWczRuWVkeMkczXm9LWEhTCwoeY0AzCjFKDUAAHFwbNkNoDGBL')`}}>
              <StarButton />
            </div>
            <Link to="/" className="d-flex flex-column slide-text-container">
              <h2>This is Title {index + 1}</h2>
              <span>This is SubTitle</span>
            </Link>
          </div>
        )) }
      </div>
      <div>
        <button onClick={onNextClick} className="btn-slide next">{'>'}</button>
        {currScroll !== 0 && <button onClick={onPrevClick} className="btn-slide prev">{'<'}</button>}
      </div>
    </Separator>
  )
}