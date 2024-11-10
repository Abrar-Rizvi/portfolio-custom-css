"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './curousoul.css';

const testimonials = [
  {
    href: '/link1',
    image: '/tes01.avif',
    text: 'This product is amazing!',
    author: 'John Doe',
  },
  {
    href: '/link2',
    image: '/path/to/image2.jpg',
    text: 'I love this product!',
    author: 'Jane Smith',
  },
  {
    href: '/link3',
    image: '/path/to/image3.jpg',
    text: 'Exceptional service!',
    author: 'Alice Johnson',
  },
  {
    href: '/link4',
    image: '/path/to/image4.jpg',
    text: 'Highly recommend!',
    author: 'Michael Brown',
  },
  {
    href: '/link5',
    image: '/path/to/image5.jpg',
    text: 'Fantastic experience!',
    author: 'Emily Davis',
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1));
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="carouselContainer">
      <div className="carousel">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className={`carouselItem ${idx === currentIndex ? 'active' : ''}`}
          >
            <Link href={testimonial.href}>
              <Image src={testimonial.image} width={200} height={200} alt={`Testimonial ${idx + 1}`} />
            </Link>
            <p className="testimonialText">"{testimonial.text}"</p>
            <p className="testimonialAuthor">- {testimonial.author}</p>
          </div>
        ))}
      </div>
      <button id="prev" onClick={prevItem} className="prevButton">Prev</button>
      <button id="next" onClick={nextItem} className="nextButton">Next</button>
    </div>
  );
};

export default TestimonialCarousel;
