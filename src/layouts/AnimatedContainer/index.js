import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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

export default function AnimetedContainer({ children }){
  return (
    <AnimatePresence>
      <motion.div 
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}