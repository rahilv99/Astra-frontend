"use client";
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react';
import { submitInterests } from '@/lib/actions';


export function Interests() {
  // we store roles right now because we may want to display a more complex page to professionals in the future
    const [keywords, setKeywords] = useState<string>(''); // State to store textarea input

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setKeywords(event.target.value); // Update state when textarea changes
    };

    const handleSubmit = () => {
      // BACKEND - send the keywords to database
      
        console.log("Keywords:", keywords); 
        submitInterests(keywords);
        redirect('/day'); // Perform redirection
    };
    

    return (
        <main>
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div>
                  <h1 className="text-3xl font-bold text-black sm:text-4xl">
                    Tell us about your interests
                  </h1>
                  <p className="mt-4 text-base text-gray-700">
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
                className="w-full h-40 text-black bg-black bg-opacity-10 rounded-xl p-8 backdrop-filter backdrop-blur-lg border-none"
                value={keywords} // Bind textarea value to state
                onChange={handleTextareaChange} // Update state on change
                />
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">


            </div>
            <div className = 'flex justify-end py-5'>
            <Button onClick={handleSubmit} className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-600 transition duration-300">
              Submit
            </Button>
            </div>
        </div>
    
        </main>
    )
}