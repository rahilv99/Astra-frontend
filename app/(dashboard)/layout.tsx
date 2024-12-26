'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CircleIcon, Gem, LayoutDashboard} from 'lucide-react';
import { useUser } from '@/lib/auth';
import { signOut } from '@/lib/actions';
import { useRouter } from 'next/navigation';
import { ActionLink } from '@/components/ui/action-link';
import { Footer } from '@/components/ui/Footer';
import { Toaster } from '@/components/ui/toaster';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useUser();
  const router = useRouter();

  async function handleSignOut() {
    setUser(null);
    await signOut();
    router.push('/');
  }

  return (
    <header >
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <CircleIcon className="h-8 w-8 text-gray-700" />
          <span className="ml-2 text-3xl font-semibold text-black">ASTRA</span>
        </Link>
        <div className="flex items-center space-x-4 ">
        <ActionLink href="/pricing" icon={Gem}>
            Plans
          </ActionLink>
          {user ? (
            <Button
            asChild
            className="bg-gray-800 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded-full transition duration-300"
          >
            <ActionLink href="/dashboard/pulse" icon={LayoutDashboard}>Dashboard</ActionLink>
          </Button>
          ) : (
            <Button
              asChild
              className="bg-gray-800 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded-full transition duration-300"
            >
              <ActionLink href="/sign-up">Sign Up</ActionLink>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-amber-100/40">
      <Header />
      <main className="flex-grow">
        {children}
        <Toaster />
      </main>
      <Footer />
    </div>
  );
}

