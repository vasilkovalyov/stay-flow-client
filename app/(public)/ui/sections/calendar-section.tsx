'use client';

import { useState } from 'react';

import { Calendar } from '@/components/ui';

export function CalendarSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-[14px]">
      <h3 className="font-semibold text-muted-foreground">Calendar</h3>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="w-fit rounded-xl border"
      />
    </div>
  );
}
