import Link from 'next/link'

export function ActionLink({ href, icon: Icon, children }: { href: string; icon?: React.ElementType; children: React.ReactNode }) {
    return (
      <Link 
        href={href} 
        className="flex items-center space-x-2 bg-gray-300 hover:bg-gray-400 transition duration-300 text-black px-4 py-2 rounded-full"
      >
        {Icon && <Icon className="h-5 w-5" />}
        <span>{children}</span>
      </Link>
    )
  }