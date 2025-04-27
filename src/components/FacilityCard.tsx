
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
    <Card className="overflow-hidden group">
      <CardHeader className="p-0">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform group-hover:scale-105" 
          />
        </div>
        <div className="p-6">
          <CardTitle className="text-2xl">{name}</CardTitle>
          <CardDescription className="mt-2">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pb-6">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          {location}
        </div>
        <Button 
          onClick={onClick}
          className="w-full"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Check Availability
        </Button>
      </CardContent>
    </Card>
  );
};

export default FacilityCard;
