import Image from "next/image";
import img from "../public/img1.jpg"; // Replace with your actual image path
import { Nav } from "@/components/Nav";
import CustomCarousal from "@/components/CustomCarousal";
import { About } from "@/components/About";
import { Section } from "@/components/Section";
import ServicesSection from "@/components/ServiceCard";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <div className="relative w-full" style={{ height: '82vh' }}>
        <Image
          src={img}
          alt="Rad Apartments"
          priority={true}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-7xl font-bold">FutureNest</h1>
          <p className="text-lg">Find Your Dream Home</p>
        </div>
      </div>
      <About />
      <CustomCarousal />
      <Section />
      <ServicesSection />
    </div>
  );
}