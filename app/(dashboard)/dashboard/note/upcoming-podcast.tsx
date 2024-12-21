import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Podcast } from 'lucide-react'

interface Note {
  id: string;
  content: string;
  isComplete: boolean;
  isSelected: boolean;
}

interface UpcomingPodcastProps {
  topics: Note[]
}

export function UpcomingPodcast({ topics }: UpcomingPodcastProps) {
  return (
    <Card className="bg-opacity-10 bg-white text-white">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Podcast className="mr-2 h-5 w-5" />
          Upcoming Podcast
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Topics ({topics.length}/3)</p>
        <div className="space-y-2">
          {topics.map((topic) => (
            <div key={topic.id} className="flex items-center justify-between bg-opacity-20 bg-white p-2 rounded">
              <Badge variant="secondary" className="text-sm">
                {topic.content.length > 30 ? topic.content.substring(0, 30) + '...' : topic.content}
              </Badge>
            </div>
          ))}
          {topics.length === 0 && (
            <p className="text-sm text-gray-400">No topics selected for the upcoming podcast.</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

