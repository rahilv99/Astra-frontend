import Link from 'next/link';
import { CircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-black bg-opacity-10 text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Stay in Touch</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-xl bg-black bg-opacity-10 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <Button type="submit" className="w-full bg-gray-400 hover:bg-gray-500 transition duration-300 text-black rounded-xl">
                Submit
              </Button>
            </form>
          </div>

          
          <div className="space-y-6 md:pl-8">
            <div className="flex items-center">
              <CircleIcon className="h-8 w-8 text-gray-700" />
              <span className="ml-2 text-2xl font-semibold">ASTRA</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/about" className="hover:text-gray-600 transition-colors">About</Link>
              <Link href="/product" className="hover:text-gray-600 transition-colors">Product</Link>
              <Link href="/careers" className="hover:text-gray-600 transition-colors">Careers</Link>
              <Link href="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} ASTRA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

