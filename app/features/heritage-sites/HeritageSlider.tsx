"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Castle,
  BookOpen,
  Users,
} from "lucide-react";
import bouddhanath from "@/public/assets/images/bouddhanath-stupa.jpg";
import pashupatinath from "@/public/assets/images/pashupatinath-temple.jpg.png";
import swayambhunath from "@/public/assets/images/swayambhunath.jpg";

const HeritageSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Preserve Family Heritage",
      description:
        "Document ancestral homes, temples, and cultural landmarks for future generations",
      bgColor: "bg-[#3d4f6f]",
      accentColor: "bg-[#5d87ff]",
      icon: <Castle className="h-12 w-12 text-white" />,
      image: bouddhanath,
    },
    {
      id: 2,
      title: "Digital Legacy Building",
      description:
        "Create a permanent digital archive of your family's history and traditions",
      bgColor: "bg-[#2d3748]",
      accentColor: "bg-[#5d87ff]",
      icon: <BookOpen className="h-12 w-12 text-white" />,
      image: pashupatinath,
    },
    {
      id: 3,
      title: "Cultural Connection",
      description:
        "Connect family members across generations through shared heritage",
      bgColor: "bg-[#3d4f6f]",
      accentColor: "bg-[#5d87ff]",
      icon: <Users className="h-12 w-12 text-white" />,
      image: swayambhunath,
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[500px] overflow-hidden rounded-b-3xl">
      <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.bgColor} w-full h-full flex-shrink-0 flex flex-col items-center justify-center text-white p-6 relative overflow-hidden`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover opacity-30"
              priority={slide.id === 1}
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-[#5d87ff]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#5d87ff]/10 rounded-full blur-3xl" />

            <div className="text-center max-w-4xl mx-auto relative z-10">
              <div className="flex justify-center mb-6">
                <div
                  className={`${slide.accentColor} p-5 rounded-2xl shadow-lg`}
                >
                  {slide.icon}
                </div>
              </div>
              <span className="inline-block px-4 py-1.5 bg-white/10 text-white/90 text-sm font-medium rounded-full mb-4 border border-white/20">
                Heritage Preservation
              </span>
              <h1 className="text-5xl font-bold mb-6 text-balance">
                {slide.title}
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                {slide.description}
              </p>
              <button className="bg-[#5d87ff] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#4a72e6] transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Preserving Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#5d87ff] w-8"
                : "bg-white/40 hover:bg-white/60 w-2.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeritageSlider;
