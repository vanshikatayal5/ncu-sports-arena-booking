
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

interface SearchFacilitiesProps {
  onSearch: (query: string) => void;
}

const SearchFacilities = ({ onSearch }: SearchFacilitiesProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        type="text"
        placeholder="Search facilities..."
        className="pl-10 w-full md:w-[300px]"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchFacilities;
