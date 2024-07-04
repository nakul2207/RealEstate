import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white pt-8 pb-6">
            <div className="max-w-7xl mx-40 px-4 flex flex-col md:flex-row justify-between">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-3xl font-bold">Estate</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col">
                        <Link href="/" className="mb-2">Home</Link>
                        <Link href="/apartments" className="mb-2">Gallery</Link>
                        <Link href="/aboutus" className="mb-2">About us</Link>
                        <Link href="/blog" className="mb-2">FAQ</Link>
                    </div>
                    <div className="flex flex-col">
                        <a href="https://www.facebook.com" className="mb-2" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.instagram.com" className="mb-2" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.twitter.com" className="mb-2" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://www.linkedin.com" className="mb-2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                    <div className="flex flex-col">
                        <Link href="/terms" className="mb-2">Terms Of Service</Link>
                        <Link href="/privacy" className="mb-2">Privacy Policy</Link>
                    </div>
                </div>
            </div>
            <div className="h-[0.1rem] bg-white mt-6 mx-40"></div>
            <div className="border-t border-white mt-2  text-center">
                <p>&copy; {new Date().getFullYear()} Estate. All rights reserved.</p>
            </div>
        </footer>
    );
};
