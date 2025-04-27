
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

interface SearchFacilitiesProps {
  onSearch: (query: string) => void;
}

const SearchFacilities = ({ onSearch }: SearchFacilitiesProps) => {
  return (
    <div className="relative w-full md:w-[300px]">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        type="text"
        placeholder="Search facilities..."
        className="pl-10 w-full bg-gray-50 border-gray-200 focus:border-blue-500 transition-colors duration-200"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchFacilities;
