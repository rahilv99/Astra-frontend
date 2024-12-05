import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from 'lucide-react'

// This would typically come from your backend
const pastPodcasts = [
  {
    id: 1,
    title: "The Future of AI",
    date: "2023-05-01",
    keyPoints: [
      "Advancements in natural language processing",
      "Ethical considerations in AI development",
      "AI's impact on job markets"
    ]
  },
  {
    id: 2,
    title: "Sustainable Energy Solutions",
    date: "2023-04-24",
    keyPoints: [
      "Breakthroughs in solar panel efficiency",
      "The role of hydrogen in clean energy",
      "Challenges in grid modernization"
    ]
  },
  {
    id: 3,
    title: "The Rise of Decentralized Finance",
    date: "2023-04-17",
    keyPoints: [
      "Understanding blockchain technology",
      "DeFi's potential to disrupt traditional banking",
      "Regulatory challenges in the crypto space"
    ]
  }
]

export function Activity() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-600 p-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/"
          className="inline-flex items-center text-white hover:text-blue-200 mb-6"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-white mb-6">Your Podcast Activity</h1>
        <div className="space-y-6">
          {pastPodcasts.map((podcast) => (
            <Card key={podcast.id}>
              <CardHeader>
                <CardTitle>{podcast.title}</CardTitle>
                <CardDescription>{new Date(podcast.date).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Key Points:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {podcast.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

