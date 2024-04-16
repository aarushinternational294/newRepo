//creating : https://claude.ai/chat/e942041d-e994-4175-94e4-226e08ef2457

'use client'
import React, { useState } from 'react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FaGraduationCap, FaBookReader, FaGlobe, FaCheck, FaTimes } from 'react-icons/fa';

const consultancies = [
    {
        name: 'Aarush International Education Limited',
        location: 'Koteshwar - 32, Kathmandu',
        services: [
            'Career counseling',
            'University selection',
            'Scholarship guidance',
            'Financial documentation support',
            'Visa application assistance',
            'Test preparation classes (TOEFL, IELTS, SAT, GRE, GMAT)',
            'Study abroad assistance (US, Australia, Canada, UK)',
        ],
    },
    {
        name: 'XYZ Educational Consultants',
        location: 'New Baneshwor, Kathmandu',
        services: [
            'Career counseling',
            'University selection',
            'Scholarship guidance',
            'Visa application assistance',
            'Test preparation classes (IELTS, GRE, GMAT)',
            'Study abroad assistance (US, UK)',
        ],
    },

];

const ComparisonTable = () => {
    const [selectedConsultancy, setSelectedConsultancy] = useState(consultancies[0]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4 text-indigo-600">
                Compare Educational Consultancy Services
            </h1>

            <Popover>
                <PopoverTrigger className="bg-gray-200 px-4 py-2 rounded-md flex items-center">
                    <FaGraduationCap className="mr-2" />
                    {selectedConsultancy.name}
                </PopoverTrigger>
                <PopoverContent className="bg-white shadow-md rounded-md mt-2">
                    <Command>
                        <CommandInput placeholder="Search consultancy..." />
                        <CommandEmpty>No consultancy found.</CommandEmpty>
                        <CommandGroup>
                            {consultancies.map((consultancy) => (
                                <CommandItem
                                    key={consultancy.name}
                                    value={consultancy}
                                    onSelect={() => setSelectedConsultancy(consultancy)}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                >
                                    {consultancy.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center text-indigo-600">
                    <FaBookReader className="mr-2" />
                    Services Offered
                </h2>
                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="w-full table-auto">
                        <thead className="bg-indigo-600 text-white">
                            <tr>
                                <th className="px-4 py-2">Service</th>
                                <th className="px-4 py-2 text-center">{selectedConsultancy.name}</th>
                                <th className="px-4 py-2 text-center">
                                    {consultancies.find((c) => c !== selectedConsultancy).name}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedConsultancy.services.map((service, index) => (
                                <tr key={service} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                    <td className="px-4 py-2 font-medium">{service}</td>
                                    <td className="px-4 py-2 text-center">
                                        <FaCheck className="text-green-500" />
                                    </td>
                                    <td className="px-4 py-2 text-center">
                                        {consultancies.find((c) => c !== selectedConsultancy).services.includes(service) ? (
                                            <FaCheck className="text-green-500" />
                                        ) : (
                                            <FaTimes className="text-red-500" />
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center"
                    onClick={toggleDialog}
                >
                    <FaGlobe className="mr-2" />
                    Learn More
                </button>
            </div>

            <Popover open={isDialogOpen} onOpenChange={toggleDialog}>
                <PopoverContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md p-8 max-w-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-indigo-600">{selectedConsultancy.name}</h2>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={toggleDialog}
                        >
                            <FaGlobe />
                        </button>
                    </div>
                    <p className="mb-2">Location: {selectedConsultancy.location}</p>
                    <p className="mb-4 text-indigo-600 font-bold">Services Offered:</p>
                    <ul className="list-disc pl-4">
                        {selectedConsultancy.services.map((service) => (
                            <li key={service}>{service}</li>
                        ))}
                    </ul>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default ComparisonTable;