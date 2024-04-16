import Link from "next/link";
import destinations from '@/app/study/destin.json';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function StudyDestinationsLayout() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Study Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <div key={destination.slug} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="p-6 flex flex-col items-center justify-center">
              <Image
                src={destination.image}
                alt={destination.name}
                width={50}
                height={50}
                className="mb-2"
              />
              <h3 className="text-xl font-bold mb-4">{destination.name}</h3>
              <Link href="/">
                <Button variant="outline" className="w-full">
                  <p className="text-gray-600">Explore Programs</p>
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}