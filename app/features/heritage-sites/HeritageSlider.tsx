"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Castle, BookOpen, Users } from "lucide-react";

const HeritageSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Preserve Family Heritage",
      description: "Document ancestral homes, temples, and cultural landmarks for future generations",
      image: "bg-gradient-to-r from-amber-500 to-orange-400",
      icon: <Castle className="h-12 w-12 text-white" />,
    },
    {
      id: 2,
      title: "Digital Legacy Building",
      description: "Create a permanent digital archive of your family's history and traditions",
      image: "bg-gradient-to-r from-blue-500 to-indigo-400",
      icon: <BookOpen className="h-12 w-12 text-white" />,
    },
    {
      id: 3,
      title: "Cultural Connection",
      description: "Connect family members across generations through shared heritage",
      image: "bg-gradient-to-r from-purple-500 to-pink-400",
      icon: <Users className="h-12 w-12 text-white" />,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${slide.image} w-full h-full flex-shrink-0 flex flex-col items-center justify-center text-white p-6`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                {slide.icon}
              </div>
              <h1 className="text-5xl font-bold mb-6">{slide.title}</h1>
              <p className="text-xl opacity-90 mb-8">{slide.description}</p>
              <button className="bg-white text-gray-800 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Start Preserving Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Slider Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
      
      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeritageSlider;