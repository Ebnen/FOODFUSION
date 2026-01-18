
import React, { useState, useEffect } from 'react';
import { CookingEvent } from '../types';

interface CarouselProps {
  events: CookingEvent[];
}

const Carousel: React.FC<CarouselProps> = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [events.length]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-xl group">
      {events.map((event, index) => (
        <div
          key={event.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
            <div className="max-w-2xl">
              <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Upcoming Event
              </span>
              <h3 className="text-4xl font-serif text-white font-bold mb-2">{event.title}</h3>
              <p className="text-gray-200 text-lg mb-4">{event.description}</p>
              <div className="flex items-center text-orange-400 font-semibold">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {event.date}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <div className="absolute bottom-4 right-12 flex space-x-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-orange-600 w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
