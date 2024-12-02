
"use client";
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { redirect } from 'next/navigation';


export  function Roles() {
  const designations = ["Student", "Researcher", "Clinician", "Educator", "Hobbyist", "Other"];
  const [selected, setSelected] = useState<string[]>([]);

  interface ToggleSelectionProps {
    designation: string;
  }

  const toggleSelection = ({ designation }: ToggleSelectionProps) => {
    setSelected((prev: string[]) =>
      prev.includes(designation)
        ? prev.filter((item) => item !== designation) // Remove if already selected
        : [...prev, designation] // Add if not selected
    );
  };

  const handleSubmit = () => {
    console.log("Selected designations:", selected);
    // You can replace this with an API call or other logic

    // change based on identity (research vs student)
    redirect('/keywords');
  };

  return (
    <main>
    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                What brings you to Astra?
              </h1>
              <p className="mt-4 text-base text-gray-500">
                Select as many as apply.
              </p>
            </div>
          </div>
        </div>
    </section>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
            {designations.map((designation) => (
            <Button
                className={`${selected.includes(designation) ? 'bg-gray-200 hover:bg-white border border-gray-500' : 'bg-white hover:bg-gray-200'} text-black rounded-full text-xl px-10 py-5 inline-flex items-center justify-center`}
                key={designation}
                onClick={() => toggleSelection({ designation })}
                variant={selected.includes(designation) ? "default" : "outline"}
            >
                {designation}
            </Button>
            ))}
        </div>
        <div className = 'flex justify-end py-5'>
        <Button 
        onClick={handleSubmit} className="mt-4">
            Submit
        </Button>
        </div>
    </div>

    </main>
  );
}