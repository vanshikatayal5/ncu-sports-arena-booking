import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import FacilityCard from '@/components/FacilityCard';
import SearchFacilities from '@/components/SearchFacilities';
import DateTimePicker from '@/components/DateTimePicker';

const facilities = [
  {
    id: 1,
    name: "Main Ground",
    description: "Spacious ground for multiple sports activities",
    location: "Central Campus",
    image: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=2674&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Basketball Court",
    description: "Professional basketball court with spectator seating",
    location: "Sports Complex",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=2676&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Volleyball Area",
    description: "Dedicated volleyball courts with sand flooring",
    location: "Sports Complex",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2607&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Badminton Area",
    description: "Indoor badminton courts with proper lighting",
    location: "Indoor Sports Hall",
    image: "https://images.unsplash.com/photo-1617516202907-ff95055b5no9?q=80&w=2676&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Lawn Tennis Area",
    description: "Professional tennis courts with synthetic surface",
    location: "Sports Complex",
    image: "https://images.unsplash.com/photo-1595435742656-5272d0b3fc72?q=80&w=2674&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Amphitheatre",
    description: "Multi-purpose outdoor venue for events",
    location: "Central Campus",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2598&auto=format&fit=crop",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();

  const filteredFacilities = facilities.filter((facility) =>
    facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    facility.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFacilityClick = (facilityId: number) => {
    if (!selectedDate || !selectedTime) {
      console.log("Please select both date and time");
      return;
    }
    // Will implement booking functionality after Supabase integration
    console.log("Selected facility:", facilityId, "Date:", selectedDate, "Time:", selectedTime);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            SportifyNCU
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Book your favorite sports facilities at NCU
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
            onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* Search and DateTimePicker Section */}
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-8">
          <SearchFacilities onSearch={setSearchQuery} />
          <DateTimePicker
            onDateChange={setSelectedDate}
            onTimeChange={setSelectedTime}
          />
        </div>
      </div>

      {/* Facilities Section */}
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
};

export default Index;
