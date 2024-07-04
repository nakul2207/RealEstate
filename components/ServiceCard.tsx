// components/ServicesSection.tsx

import Image from 'next/image';
import { FC } from 'react';

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white py-6 px-10 rounded-lg shadow-md hover:shadow-2xl">
      <Image src={imageSrc} alt={title} width={100} height={100} className="mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center text-sm mb-4">{description}</p>
    </div>
  );
};

const ServicesSection: FC = () => {
  return (
    <section className="py-12 mx-36">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-slate-500">OUR SERVICES</h2>
        <h3 className="text-4xl font-semibold">What We Do?</h3>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard 
          imageSrc="/buy.png" 
          title="Buy A New Home" 
          description="Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience." 
        />
        <ServiceCard 
          imageSrc="/sell.jpg" 
          title="Sell A Home" 
          description="Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale." 
        />
        <ServiceCard 
          imageSrc="/rent.jpg" 
          title="Rent A Home" 
          description="Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs." 
        />
      </div>
    </section>
  );
};

export default ServicesSection;

