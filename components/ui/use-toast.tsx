'use client';

import { toast as hotToast, Toaster } from 'react-hot-toast';

export const useToast = () => {
  return {
    toast: ({ title, description, variant }: { title: string; description: string; variant?: string }) => {
      const message = `${title}: ${description}`;
      if (variant === 'destructive') {
        hotToast.error(message);
      } else {
        hotToast.success(message);
      }
    },
    Toaster,
  };
};
