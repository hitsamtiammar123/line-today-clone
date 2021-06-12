import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Carousel, ListRow, ListGrid, ListSlide } from '@mln-components';
import './styles.scss';

export default function Content({data}){
  const location = useLocation();
  const content = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  },[location.pathname]);

  return (
    <div ref={content} className="content">
      <h1>
        This is main content id = {data.id}
      </h1>
      <Carousel title="This is ListPage" />
      <ListRow title="This is Title"/>
      <ListGrid title="This is Title"/>
      <ListSlide title="This is Slide"/>
      <ListSlide title="This is Slide 2"/>
    </div>
  )
}