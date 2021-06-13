import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Carousel, ListRow, ListGrid, ListSlide } from '@mln-components';
import './styles.scss';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -100
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.7,
};

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
    <AnimatePresence>
      <motion.div 
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}>
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
      </motion.div>
    </AnimatePresence>
  )
}