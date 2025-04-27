
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface SlotAvailabilityDialogProps {
  isOpen: boolean;
  onClose: () => void;
  facilityName: string;
  selectedDate: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
}

const SlotAvailabilityDialog = ({
  isOpen,
  onClose,
  facilityName,
  selectedDate,
  onDateSelect,
}: SlotAvailabilityDialogProps) => {
  // This is mock data - replace with actual data from Supabase
  const mockTimeSlots = [
    { time: "06:00", isBooked: false },
    { time: "07:00", isBooked: true },
    { time: "08:00", isBooked: false },
    { time: "09:00", isBooked: true },
    { time: "10:00", isBooked: false },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {facilityName} - Slot Availability
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8 mt-4">
          <div className="space-y-4">
            <h3 className="font-semibold">Select Date</h3>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={onDateSelect}
              className={cn("rounded-md border shadow pointer-events-auto")}
              disabled={(date) => date < new Date()}
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Available Time Slots</h3>
            {selectedDate ? (
              <div className="grid grid-cols-2 gap-2">
                {mockTimeSlots.map((slot) => (
                  <div
                    key={slot.time}
                    className={cn(
                      "p-3 rounded-md text-center transition-colors",
                      slot.isBooked
                        ? "bg-red-100 text-red-700 cursor-not-allowed"
                        : "bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer"
                    )}
                  >
                    {slot.time}
                    <div className="text-sm">
                      {slot.isBooked ? "Booked" : "Available"}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-muted-foreground">
                Please select a date to view available slots
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SlotAvailabilityDialog;
