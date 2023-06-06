'use client';
import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import CarouselItem from './CarouselItem';
import CarouselIndicator from './CarouselIndicator';

export interface CarouselProps {
  width?: number;
  height?: number;
  items: React.ReactNode[];
}

export default function Carousel({ width, height, items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(items.length - 1);

  function handleNextItemBtn() {
    setActiveIndex((prev) => {
      return prev - 1 >= 0 ? prev - 1 : prev;
    });
  }

  function handlePrevItemBtn() {
    setActiveIndex((prev) => {
      return prev + 1 < items.length ? prev + 1 : prev;
    });
  }

  return (
    <div className="carousel-container">
      {activeIndex < items.length - 1 && (
        
        <button
          className="carousel-btn-switch-card-left carousel-btn-switch-card"
          onClick={handlePrevItemBtn}
        >
          <IoIosArrowBack />
        </button>
        
      )}
      {items?.map((item, index) => (
        <CarouselItem
          key={index}
          index={items.length - 1 - index}
          activeIndex={activeIndex}
        >
          {item}
        </CarouselItem>
      ))}
      {activeIndex > 0 && (
        <button
        className="carousel-btn-switch-card-right carousel-btn-switch-card"
        onClick={handleNextItemBtn}
      >
        <IoIosArrowBack
          style={{
            transform: 'rotate(180deg)',
          }}
        />
      </button>
      )}

      <CarouselIndicator
        activeIndex={activeIndex}
        length={items.length}
        onSetActiveIndex={(activeIndex) => {
          setActiveIndex(activeIndex);
        }}
      />
    </div>
  );
}
