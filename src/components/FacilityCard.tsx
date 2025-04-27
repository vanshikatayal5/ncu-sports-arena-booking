
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface FacilityCardProps {
  name: string;
  description: string;
  location: string;
  image: string;
  onClick: () => void;
}

const FacilityCard = ({ name, description, location, image, onClick }: FacilityCardProps) => {
  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <CardHeader>
        <div className="h-48 overflow-hidden rounded-t-lg">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <CardTitle className="mt-4">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-2" />
          {location}
        </div>
      </CardContent>
    </Card>
  );
};

export default FacilityCard;
