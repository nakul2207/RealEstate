"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import h2 from "@/public/h2.jpg";
import h3 from "@/public/h3.jpg";
import h4 from "@/public/h4.jpg";
import h5 from "@/public/h5.jpg";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const images = [h2, h3, h4, h5];

export const CustomCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="my-28 flex justify-center">
            <Carousel className="w-1/2 h-96 flex items-center relative">
                <button 
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-10 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-xl transition-all duration-300 z-10"
                >
                    &#10094;
                </button>
                <CarouselContent className="flex-1 flex items-center justify-center relative">
                    {images.map((image, index) => (
                        <CarouselItem 
                            key={index} 
                            className={`transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'} ${index === currentIndex ? 'block' : 'hidden'}`}
                        >
                            <Image src={image} alt={`Carousel Image ${index + 1}`} className="rounded-lg w-full h-full object-cover" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <button 
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-10 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-xl transition-all duration-300 z-10"
                >
                    &#10095;
                </button>
            </Carousel>
        </div>
    );
};

export default CustomCarousel;
