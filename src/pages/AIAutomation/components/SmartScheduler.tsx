import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const timeSlots = Array.from({ length: 24 }, (_, i) => 
  `${i.toString().padStart(2, '0')}:00`
);

const SmartScheduler = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="text-primary" size={20} />
          <h3 className="font-semibold">Smart Scheduling</h3>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-gray-500" />
          <select className="text-sm border border-gray-200 rounded-lg px-2 py-1">
            <option>UTC+00:00</option>
            <option>UTC-05:00</option>
            <option>UTC+01:00</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-8 gap-4 overflow-x-auto pb-4">
        <div className="sticky left-0 bg-white z-10">
          <div className="h-8" /> {/* Header spacer */}
          {timeSlots.map((time) => (
            <div key={time} className="h-8 text-sm text-gray-500 flex items-center">
              {time}
            </div>
          ))}
        </div>
        
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className="min-w-[100px]">
            <div className="h-8 font-medium text-sm text-center">{day}</div>
            {timeSlots.map((time) => (
              <div
                key={`${day}-${time}`}
                className="h-8 border border-dashed border-gray-200 rounded hover:bg-blue-50 hover:border-primary cursor-pointer transition-all group relative"
              >
                <div className="hidden group-hover:block absolute -top-1 -right-1">
                  <div className="bg-primary text-white text-xs px-2 py-1 rounded">
                    Add Post
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartScheduler;