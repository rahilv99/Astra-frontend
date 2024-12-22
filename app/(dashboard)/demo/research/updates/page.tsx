import AIPodcastWalkthrough from "./updates"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-black">
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Updates</h1>
      <p className="text-xl text-center mb-12">Stay up to date on developments you're interested in.</p>
              <AIPodcastWalkthrough />
            </div>
    </main>
  )
}

