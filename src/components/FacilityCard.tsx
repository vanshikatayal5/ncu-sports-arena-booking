
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";

interface FacilityCardProps {
  name: string;
  description: string;
  location: string;
  image: string;
  onClick: () => void;
}

const FacilityCard = ({ name, description, location, image, onClick }: FacilityCardProps) => {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <CardTitle className="text-2xl font-bold text-gray-800">{name}</CardTitle>
          <CardDescription className="mt-2 text-gray-600">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pb-6">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-2 text-blue-500" />
          {location}
        </div>
        <Button 
          onClick={onClick}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Check Availability
        </Button>
      </CardContent>
    </Card>
  );
};

export default FacilityCard;
