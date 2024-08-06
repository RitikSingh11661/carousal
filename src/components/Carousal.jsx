import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaRupeeSign, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import one from '../assets/M3M Altitude.webp';
import two from '../assets/M3M Mansion.webp';
import three from '../assets/Smartworld One DXP.webp';
import four from '../assets/Whiteland Urban Resort.webp';

const carouselItems = [
  { image: one, title: 'Whiteland Urban Resort', location: 'Sector 103, Gurgaon', price: 'On Request' },
  { image: two, title: 'M3M Alltitude', location: 'Sector 65, Gurgaon', price: 'On Request' },
  { image: three, title: 'M3M Mansion', location: 'Sector 113, Gurgaon', price: 'On Request' },
  { image: four, title: 'DLF The Arbour', location: 'Sector 113, Gurgaon', price: 'On Request' },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  const getCardClass = (index) => {
    if (index === currentIndex) return 'carousel-item active';
    else if (index === (currentIndex - 1 + carouselItems.length) % carouselItems.length) return 'carousel-item left';
    else if (index === (currentIndex + 1) % carouselItems.length) return 'carousel-item right';
    else return 'carousel-item hidden';
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') prevSlide();
    else if (event.key === 'ArrowRight') nextSlide();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={prevSlide}><FaChevronLeft /></button>
      <div className="carousel">
        {carouselItems.map((item, index) => (
          <div key={index} className={getCardClass(index)}>
            <div className="card">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p><FaMapMarkerAlt /> {item.location}</p> {/* Location icon */}
                <p><FaRupeeSign /> {item.price}</p> {/* Rupee icon */}
                <button className="view-more">View More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button right" onClick={nextSlide}><FaChevronRight /></button>
    </div>
  );
}