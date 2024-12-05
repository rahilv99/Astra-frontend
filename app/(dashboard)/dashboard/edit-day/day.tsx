import Link from 'next/link'

export  function EditDay() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-600 flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-filter backdrop-blur-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-white mb-6">Change Podcast Day</h1>
        <p className="text-blue-200 mb-4">Select the day of the week you'd like to receive your AI-generated podcast.</p>
        {/* Add your day selection UI here */}
        <div className="mt-6">
          <Link 
            href="/"
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
          >
            Save Changes
          </Link>
        </div>
      </div>
    </div>
  )
}

