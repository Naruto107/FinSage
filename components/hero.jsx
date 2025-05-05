"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement?.classList.add("scrolled");
      } else {
        imageElement?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0 z-0">
        <Image
          src="/banner.jpeg"
          alt="Background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Optional dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Overlay content */}
      <div className="relative z-10 px-4 text-left max-w-4xl w-full mx-auto lg:ml-20 font-serif" >
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 text-gray-100">
          Manage Your Finances <br /> with AI
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl text-left">

          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-start space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 bg-white text-black text-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;