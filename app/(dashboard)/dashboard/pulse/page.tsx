"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PenIcon, Check } from 'lucide-react'
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { EditDay } from "./edit-day"
import { Separator } from "@/components/ui/separator"

// Mock data
const mockPodcastData = {
  interests: ["Artificial Intelligence", "Quantum Computing", "Neuroscience"],
  currentDay: "Monday"
}

export default function UpdatesPage() {
  const [currentDay, setCurrentDay] = useState(mockPodcastData.currentDay)
  const { toast } = useToast()

  const handleSaveChanges = () => {
    // Mock API call
    console.log("Saving changes:", { currentDay })
    toast({
      title: "Settings Saved",
      description: "Your podcast settings have been updated.",
    })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-black">Pulse</h1>
      <p className="text-black">A personalized weekly podcast summarizing the latest updates in your field. All content includes citations to academic sources.</p>
      <Separator className="my-6" />
      <Card className="bg-black bg-opacity-10 border-none">
        <CardHeader>
          <CardTitle className="text-black">Podcast Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-medium text-black">Current Interests</h3>
              <div className="flex flex-wrap gap-2">
                {mockPodcastData.interests.map((interest) => (
                  <span key={interest} className="rounded-full bg-slate-600/30 px-2 py-1 text-sm text-black">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-medium text-black">Delivery Day</h3>
              <EditDay currentDay={currentDay} setCurrentDay={setCurrentDay} />
            </div>
            <div className="flex space-x-2">
              <Link href="/dashboard/edit-keywords">
                <Button variant="outline" className="bg-slate-600/30 text-black hover:bg-gray-200">
                  <PenIcon className="mr-2 h-4 w-4" /> Edit Interests
                </Button>
              </Link>
              <Button onClick={handleSaveChanges} className="bg-gray-700 text-gray-100 hover:bg-gray-400">
                <Check className="mr-2 h-4 w-4" /> Save Changes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

