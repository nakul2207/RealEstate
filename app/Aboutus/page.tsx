import { Nav } from "@/components/Navbar";
import React from "react";
import Ai from "@/public/Ai.png";
import Image, { StaticImageData } from "next/image";

const Aboutus: React.FC = () => {
    return (
        <div>
            <Nav />
            <div className="px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">About us</h1>
                    <div className="text-left max-w-4xl mx-auto">
                        <h2 className="text-2xl font-semibold text-gray-600 mb-2">Who we are</h2>
                        <p className="text-lg text-gray-700">
                            We are passionate about helping our clients find their dream homes. 
                            Whether you are looking for a cozy apartment in the city or a sprawling estate in the countryside, 
                            we are here to guide you every step of the way. We pride ourselves on our commitment to excellence 
                            and our personalized approach to client service. When you work with us, you can trust that we will go 
                            above and beyond to make sure you are completely satisfied with your real estate experience.
                        </p>
                    </div>
                </div>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold mb-6">Team</h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
                        Our team of experienced agents is dedicated to helping you navigate the complex world of real estate.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <TeamMember
                            name="John Doe"
                            position="CEO"
                            imageUrl={Ai}
                            bio="John has over 30 years of experience in the real estate industry and is the driving force behind our company's success."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

interface TeamMemberProps {
    name: string;
    position: string;
    imageUrl: StaticImageData;
    bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, imageUrl, bio }) => (
    <div className="max-w-xs text-center">
        <Image src={imageUrl} alt={`${name} photo`} className="w-full h-60 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 mb-2">{position}</p>
        <p className="text-gray-700">{bio}</p>
    </div>
);

export default Aboutus;
