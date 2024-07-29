'use client'

import Image from "next/image";
import { CustomButton } from "@/components";

const Hero = () => {

    const handleScroll = () => {
        const nextSection = document.getElementById("discover");

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Discover the best electric Scooters!
                </h1>

                <p className="hero__subtitle">
                    Browse through our comprehensive listings and find detailed information about the latest electric scooters and bikes.
                </p>

                <CustomButton
                    title="Explore Scooters"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image 
                        fill 
                        src="/hero.png" 
                        alt="hero" 
                        className="object-contain" 
                    />
                </div>
                <div className="hero__image-overlay" />
            </div>
        </div>
    );
}

export default Hero;
