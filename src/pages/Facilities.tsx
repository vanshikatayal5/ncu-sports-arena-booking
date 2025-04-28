
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import FacilityCard from '@/components/FacilityCard';
import SearchFacilities from '@/components/SearchFacilities';
import DateTimePicker from '@/components/DateTimePicker';
import SlotAvailabilityDialog from '@/components/SlotAvailabilityDialog';

const facilities = [
  {
    id: 1,
    name: "Main Ground",
    description: "Professional cricket ground with well-maintained pitch and outfield",
    location: "Central Campus",
    image: "https://cricketgraph.com/wp-content/uploads/2022/12/The-Ballpark-Cricket-Ground-Aerial-Fantasy-Cricket-Tips.png",
  },
  {
    id: 2,
    name: "Basketball Court",
    description: "State-of-the-art indoor basketball court with professional flooring",
    location: "Sports Complex",
    image: "https://www.ncuindia.edu/wp-content/uploads/2022/07/b-ball.jpg",
  },
  {
    id: 3,
    name: "Volleyball Area",
    description: "Premium indoor volleyball court with specialized flooring",
    location: "Sports Complex",
    image: "https://www.volleyballusa.com/wp-content/uploads/2010/01/High-School-Volleyball-Court-System-1080x675.png",
  },
  {
    id: 4,
    name: "Badminton Area",
    description: "Professional indoor badminton courts with proper lighting",
    location: "Indoor Sports Hall",
    image: "https://turftown.in/wp-content/uploads/2023/09/Untitled-design-5-min.jpg",
  },
  {
    id: 5,
    name: "Lawn Tennis Area",
    description: "Professional synthetic tennis courts with floodlights",
    location: "Sports Complex",
    image: "https://tigerturf.com/in/wp-content/uploads/sites/15/2022/01/Synthetic-Grass-Tennis-Court3.jpg",
  },
  {
    id: 6,
    name: "Amphitheatre",
    description: "Modern amphitheatre perfect for cultural events and gatherings",
    location: "Central Campus",
    image: "https://www.ncuindia.edu/wp-content/uploads/2022/06/Amphitheatre.jpg",
  },
];

const Facilities = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [selectedFacility, setSelectedFacility] = useState<string>('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredFacilities = facilities.filter((facility) =>
    facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    facility.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFacilityClick = (facilityId: number) => {
    const facility = facilities.find(f => f.id === facilityId);
    if (facility) {
      setSelectedFacility(facility.name);
      setIsDialogOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section with Enhanced Design */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            SportifyNCU
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in max-w-2xl mx-auto">
            Book your favorite sports facilities at NCU - Where Champions Train
          </p>
        </div>
      </div>

      {/* Search and DateTimePicker Section with Enhanced UI */}
      <div className="container mx-auto -mt-10 px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <SearchFacilities onSearch={setSearchQuery} />
            <DateTimePicker
              onDateChange={setSelectedDate}
              onTimeChange={setSelectedTime}
            />
          </div>
        </div>

        {/* Facilities Section with Enhanced Grid Layout */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Our Facilities
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover our world-class sports facilities designed for athletes and sports enthusiasts
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {filteredFacilities.map((facility) => (
              <FacilityCard
                key={facility.id}
                name={facility.name}
                description={facility.description}
                location={facility.location}
                image={facility.image}
                onClick={() => handleFacilityClick(facility.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <SlotAvailabilityDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        facilityName={selectedFacility}
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
      />
    </div>
  );
};

export default Facilities;
