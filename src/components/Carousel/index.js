import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
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

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <Link to="/">
          <img src={item.src} className="img" alt={item.altText} />
        </Link>
        <CarouselCaption captionText="" captionHeader={item.altText}>
          This is caption
        </CarouselCaption>
      </CarouselItem>
    );
  });

  return (
    <Separator>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="<" onClickHandler={previous} />
        <CarouselControl direction="next" directionText=">" onClickHandler={next} />
      </Carousel>
    </Separator>
  );
}