'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ReactNode, useRef, useState } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  items: ReactNode[];
  baseWidth?: number;
  aspectRatio?: number;
  effect?: 'slide';
  indicator?: 'dots' | 'none';
  arrows?: boolean;
  frame?: boolean;
  loop?: boolean;
  theme?: 'light' | 'dark';
  label?: string;
}

export default function Carousel({
  items,
  baseWidth = 360,
  aspectRatio = 0.78,
  effect = 'slide',
  indicator = 'dots',
  arrows = true,
  frame = false,
  loop = true,
  theme = 'light',
  label = 'Tours',
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (items.length === 0) return null;

  const selectItem = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const nextIndex = loop
      ? (index + items.length) % items.length
      : Math.max(0, Math.min(index, items.length - 1));

    track.scrollTo({
      left: nextIndex * track.clientWidth,
      behavior: 'smooth',
    });
    setActiveIndex(nextIndex);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    setActiveIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  const themeClass = theme === 'dark' ? styles.dark : styles.light;
  const frameClass = frame ? styles.frame : '';

  return (
    <div
      className={`${styles.carousel} ${themeClass} ${frameClass}`}
      style={{ maxWidth: `${baseWidth}px` }}
      aria-label={label}
    >
      <div
        className={styles.viewport}
        style={{ aspectRatio: `${aspectRatio}` }}
      >
        <div ref={trackRef} className={`${styles.track} ${effect === 'slide' ? styles.slide : ''}`} onScroll={handleScroll}>
          {items.map((item, index) => (
            <div className={styles.slideItem} key={index} aria-label={`${index + 1} of ${items.length}`}>
              <div className={styles.customCard}>{item}</div>
            </div>
          ))}
        </div>
      </div>

      {(arrows || indicator === 'dots') && items.length > 1 && (
        <div className={styles.controls}>
          {arrows ? (
            <button
              type="button"
              className={styles.arrow}
              onClick={() => selectItem(activeIndex - 1)}
              aria-label="Previous tour"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
          ) : (
            <span className={styles.controlSpacer} />
          )}

          {indicator === 'dots' && (
            <div className={styles.dots} aria-label="Choose a tour">
              {items.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${styles.dot} ${activeIndex === index ? styles.activeDot : ''}`}
                  onClick={() => selectItem(index)}
                  aria-label={`Show tour ${index + 1}`}
                  aria-current={activeIndex === index ? 'true' : undefined}
                />
              ))}
            </div>
          )}

          {arrows ? (
            <button
              type="button"
              className={styles.arrow}
              onClick={() => selectItem(activeIndex + 1)}
              aria-label="Next tour"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          ) : (
            <span className={styles.controlSpacer} />
          )}
        </div>
      )}
    </div>
  );
}