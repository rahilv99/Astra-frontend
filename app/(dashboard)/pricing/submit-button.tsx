'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { redirect } from 'next/navigation';


export function SubmitButton({ freePlan }: { freePlan?: boolean }) {
  const { pending } = useFormStatus();


  const handleClick = () => {
    if (freePlan) {
      // add free plan to user data
      redirect('/dashboard/home');
    }
  };

  return (
    <Button
      type="submit"
      disabled={pending}
      onClick={freePlan ? handleClick : undefined}
      className="w-full bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full flex items-center justify-center"
    >
      {pending ? (
      <>
        <Loader2 className="animate-spin mr-2 h-4 w-4" />
        Loading...
      </>
      ) : (
      <>
        {freePlan ? "Continue" : "Submit"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </>
      )}
    </Button>
  );
}
