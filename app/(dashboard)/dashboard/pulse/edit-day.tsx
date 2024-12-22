"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

interface EditDayProps {
  currentDay: string;
  setCurrentDay: (day: string) => void;
}

export function EditDay({ currentDay, setCurrentDay }: EditDayProps) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(days.indexOf(currentDay));

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.scrollTo(current);

    api.on("select", () => {
      const selectedIndex = api.selectedScrollSnap();
      setCurrent(selectedIndex);
      setCurrentDay(days[selectedIndex]);
    });
  }, [api, current, days, setCurrentDay]);

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <Carousel
        className="max-w-sm"
        opts={{
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent className="-ml-1">
          {days.map((day, index) => (
            <CarouselItem key={index} className="pl-1 basis-1/2">
              <div className="p-1">
                <div className='bg-slate-600/30 rounded-xl backdrop-filter backdrop-blur-lg'>
                  <div className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold text-black">
                      {day}
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-slate-600/30 rounded-3xl backdrop-filter backdrop-blur-lg text-gray-800 border-none hover:bg-slate-600/50 transition duration-300"/>
        <CarouselNext className="bg-slate-600/30 rounded-3xl backdrop-filter backdrop-blur-lg text-gray-800 border-none hover:bg-slate-600/50 transition duration-300"/>
      </Carousel>
    </div>
  );
}

