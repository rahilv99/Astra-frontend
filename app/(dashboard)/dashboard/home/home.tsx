import { CalendarDays, Mic2, Settings, Calendar } from 'lucide-react'
import Link from 'next/link'

function ActionLink({ href, icon: Icon, children }: { href: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
    >
      <Icon className="h-5 w-5" />
      <span>{children}</span>
    </Link>
  )
}

export function Home() {
  // In a real application, you would fetch this data from your backend
  const userName = "Rahil"
  const daysUntilNextPodcast = 3

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-600 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Welcome to Astra
          </h1>
          <p className="mt-3 text-xl text-blue-200">
            Hello, {userName}!
          </p>
        </div>

        <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-filter backdrop-blur-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 rounded-full p-3">
                <Mic2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-200">Next Podcast</p>
                <p className="text-2xl font-bold text-white">{daysUntilNextPodcast} days</p>
              </div>
            </div>
            <CalendarDays className="h-10 w-10 text-blue-300" />
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <ActionLink href="/edit-interests" icon={Settings}>
            Edit Interests
          </ActionLink>
          <ActionLink href="/change-podcast-day" icon={Calendar}>
            Change Podcast Day
          </ActionLink>
        </div>
      </div>
    </div>
  )
}