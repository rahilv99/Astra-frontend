'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { redirect } from 'next/navigation';


export function SubmitButton({ currentPlan }: { currentPlan?: boolean }) {
  const { pending } = useFormStatus();


  const handleClick = () => {
    if (currentPlan) {

      redirect('/dashboard/pulse');
    }
  };

  return (
    <Button
      type="submit"
      disabled={pending}
      onClick={currentPlan ? handleClick : undefined}
      className="w-full bg-gray-800 hover:bg-gray-600 text-white border border-gray-200 rounded-full flex items-center justify-center transition duration-300"
    >
      {pending ? (
      <>
        <Loader2 className="animate-spin mr-2 h-4 w-4" />
        Loading...
      </>
      ) : (
      <>
        {currentPlan ? "Continue" : "Upgrade"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </>
      )}
    </Button>
  );
}
