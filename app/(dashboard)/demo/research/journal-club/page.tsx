import JournalClubPodcastWalkthrough from "./journal-club"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-black">
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Journal Club</h1>
      <p className="text-xl text-center mb-12">Get expert analyses of your content.</p>
        <JournalClubPodcastWalkthrough />
      </div>
    </main>
  )
}

