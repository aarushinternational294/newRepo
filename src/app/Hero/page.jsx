import { Button } from "@/components/ui/button";
import { FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import Image from "next/image";

export default function HeroPage() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center justify-center mb-8 mt-8">
                <h1 className="text-4xl font-bold text-center text-gray-900 sm:text-5xl">
                    Unlock Your Global Education Dreams
                </h1>
                <p className="mt-4 text-lg text-center text-gray-600">
                    Aarush International Education Limited: Your Gateway to World-Class Education
                </p>
            </div>

            <div className="relative w-64 h-64 mb-4">
                <Image
                    src="/arushHero.jpeg"
                    alt="Hero Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <div className="flex items-center justify-center space-x-4">
                <Button variant="default" className="flex items-center space-x-2">
                    <FaGraduationCap className="w-5 h-5" />
                    <span>Explore Services</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                    <FaLaptopCode className="w-5 h-5" />
                    <span>Book Consultation</span>
                </Button>
            </div>
        </section>
    );
}
