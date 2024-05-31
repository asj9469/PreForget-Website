import React from 'react';

export interface CarouselIndicatorProps {
  activeIndex: number;
  length: number;
  maxIndicatorVisible?: number;
  onSetActiveIndex: (index: number) => void;
}

export default function CarouselIndicator({
  activeIndex,
  length,
  maxIndicatorVisible = 10,
  onSetActiveIndex,
}: CarouselIndicatorProps) {
  const maxIndicator = length > maxIndicatorVisible ? maxIndicatorVisible : length;

  return (
    <div className="carousel-indicator">
      {Array.from(Array(maxIndicator), (_, index) => {
        const reversedIndex = length - 1 - index;
        return (
          <div
            key={reversedIndex}
            className={`carousel-indicator-dots
            ${activeIndex === reversedIndex ? 'w-4 opacity-100' : 'w-2 bg-gray-400'}`}
            onClick={() => {
              onSetActiveIndex(reversedIndex);
            }}
          ></div>
        );
      })}
    </div>
  );
}
