
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
    description: "Spacious ground for multiple sports activities",
    location: "Central Campus",
    image: " https://www.google.com/url?sa=i&url=https%3A%2F%2Fcricketgraph.com%2Fground%2Fthe-ballpark-cricket-ground%2F&psig=AOvVaw0Y2H-DeFQsEdm0GWiXcpVF&ust=1745905549759000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMigxZOD-owDFQAAAAAdAAAAABAJ", // Updated sports field image
  },
  {
    id: 2,
    name: "Basketball Court",
    description: "Professional basketball court with spectator seating",
    location: "Sports Complex",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Fthe_northcap_univ%2Fp%2FDB5qC3oOp2h%2F&psig=AOvVaw1lW8uIMpPDL9omfJh8XLCC&ust=1745906638659000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCs3pqH-owDFQAAAAAdAAAAABAE", // Professional basketball court
  },
  {
    id: 3,
    name: "Volleyball Area",
    description: "Dedicated volleyball courts with sand flooring",
    location: "Sports Complex",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.volleyballusa.com%2Findoor-court-construction%2F&psig=AOvVaw3Dli7EuBBg5lvR4ZY6jwEG&ust=1745906457901000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCWzsSG-owDFQAAAAAdAAAAABAE", // Modern volleyball court
  },
  {
    id: 4,
    name: "Badminton Area",
    description: "Indoor badminton courts with proper lighting",
    location: "Indoor Sports Hall",
    image: "https://images.unsplash.com/photo-1636487658591-95685dd3e64b?q=80&w=2670&auto=format&fit=crop", // Indoor badminton court
  },
  {
    id: 5,
    name: "Lawn Tennis Area",
    description: "Professional tennis courts with synthetic surface",
    location: "Sports Complex",
    image: "https://images.unsplash.com/photo-1622205681796-4f320cd0fb5b?q=80&w=2670&auto=format&fit=crop", // Professional tennis court
  },
  {
    id: 6,
    name: "Amphitheatre",
    description: "Multi-purpose outdoor venue for events",
    location: "Central Campus",
    image: "https://images.unsplash.com/photo-1602070450027-c8cc16c26953?q=80&w=2874&auto=format&fit=crop", // Large amphitheatre with grand stairs
  },
];

const Index = () => {
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
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-700 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            SportifyNCU
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in">
            Book your favorite sports facilities at NCU
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 transition-all duration-300 animate-fade-in shadow-lg hover:shadow-xl"
            onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* Search and DateTimePicker Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <SearchFacilities onSearch={setSearchQuery} />
            <DateTimePicker
              onDateChange={setSelectedDate}
              onTimeChange={setSelectedTime}
            />
          </div>
        </div>

        {/* Facilities Section */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

export default Index;
