import React from 'react';
import { Calendar } from 'lucide-react';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const timeSlots = Array.from({ length: 24 }, (_, i) => 
  `${i.toString().padStart(2, '0')}:00`
);

const WeeklyCalendar = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="text-primary" size={20} />
        <h3 className="font-semibold">Weekly Schedule</h3>
      </div>
      
      <div className="overflow-x-auto">
        <div className="grid grid-cols-8 gap-4 min-w-[800px]">
          {/* Time column */}
          <div className="space-y-6 pt-8">
            {timeSlots.map((time) => (
              <div key={time} className="text-sm text-gray-500 h-8">
                {time}
              </div>
            ))}
          </div>
          
          {/* Days columns */}
          {weekDays.map((day) => (
            <div key={day} className="space-y-2">
              <div className="text-sm font-medium text-center py-2 bg-gray-50 rounded-lg">
                {day}
              </div>
              <div className="space-y-6">
                {timeSlots.map((time) => (
                  <div
                    key={`${day}-${time}`}
                    className="h-8 border border-dashed border-gray-200 rounded hover:bg-blue-50 hover:border-primary cursor-pointer transition-colors"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyCalendar;