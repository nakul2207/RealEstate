import { Nav } from "@/components/Navbar";
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const FAQ: React.FC = () => {
    const faqs = [
        {
            question: "What services does Surya Real Estate offer?",
            answer: "Surya Real Estate offers a range of services including property buying, selling, renting, and property management. We also provide consultation services for real estate investments."
        },
        {
            question: "How can I contact Surya Real Estate?",
            answer: "You can contact us through our website's contact form, by email at contact@suryarealestate.com, or by phone at (123) 456-7890."
        },
        {
            question: "What areas do you serve?",
            answer: "We serve various regions across the country, including metropolitan areas, suburban neighborhoods, and rural communities. Please visit our website to see a full list of areas we cover."
        },
        {
            question: "How do I list my property with Surya Real Estate?",
            answer: "To list your property with us, you can fill out the property listing form on our website or contact our office directly. Our team will guide you through the process and help you get your property listed quickly."
        },
        {
            question: "What are the benefits of using a real estate agent?",
            answer: "Using a real estate agent can provide you with expert knowledge of the market, help you navigate complex transactions, negotiate better deals, and save you time and effort. Our agents are experienced professionals dedicated to helping you achieve your real estate goals."
        }
    ];

    return (
        <div>
            <Nav />
            <div className="max-w-7xl mx-auto px-8 py-32">
                <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
                <div className="space-y-8 mx-40">
                    {faqs.map((faq,index) => (
                       <Accordion key={index} type="single" collapsible>
                       <AccordionItem value="item-1">
                         <AccordionTrigger>{faq.question}</AccordionTrigger>
                         <AccordionContent>
                          {faq.answer}
                         </AccordionContent>
                       </AccordionItem>
                     </Accordion>
                     
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
