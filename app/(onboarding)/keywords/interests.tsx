"use client";
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react';


export function Interests({ role = 'researcher' }: { role? : 'researcher' | 'student' | 'clinician' | 'other' }) {
    const [keywords, setKeywords] = useState<string>(''); // State to store textarea input

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setKeywords(event.target.value); // Update state when textarea changes
    };

    const handleSubmit = () => {
        console.log("Keywords:", keywords); // Access the textarea value
        redirect('/day'); // Perform redirection
    };
    

    return (
        <main>
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Tell us about your interests
                  </h1>
                  <p className="mt-4 text-base text-gray-500">
                    Enter a few keywords that describe your research, projects, or work.
                  </p>
                </div>
              </div>
            </div>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
                <Textarea
                placeholder="Examples: Orbital Dynamics, Drug-Resistant Epilepsy, Game Theory, Combinatorics, Generative Image Models, etc."
                className="w-full h-20"
                value={keywords} // Bind textarea value to state
                onChange={handleTextareaChange} // Update state on change
                />
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">


            </div>
            <div className = 'flex justify-end py-5'>
            <Button 
            onClick={handleSubmit} className="mt-4">
                Submit
            </Button>
            </div>
        </div>
    
        </main>
    )
}