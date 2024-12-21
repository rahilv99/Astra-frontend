'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PenLine, AudioLines, BrainCog, CircleIcon } from 'lucide-react'
import { Pagination } from "@/components/ui/pagination"
import { PodcastPlayer } from "./podcast-player"
import { Citations } from "./citations"
import { AnimatedTopics } from "./animated-topics"

const steps = [
  {
    icon: <PenLine className="w-6 h-6" />,
    title: "Jot Down Topics",
    content: "Write down topics of interest throughout your day.",
    prompt: "AstraNote Editor"
  },
  {
    icon: <BrainCog className="w-6 h-6" />,
    title: "Astra Analysis",
    content: "Astra processes your notes and generates insights.",
    prompt: "Astra is analyzing your topics and preparing content..."
  },
  {
    icon: <AudioLines className="w-6 h-6" />,
    title: "Mini Podcast Generation",
    content: "A personalized mini podcast is created by the end of the day.",
    prompt: "Your podcast is being generated with the latest information and insights."
  },
]

export default function NotesDemo() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className="container mx-auto py-6">
      <Tabs defaultValue="setup" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mx-auto h-14 rounded-lg bg-cyan-900/20 p-1 text-cyan-100">
          <TabsTrigger value="setup" className="flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-opacity-10 data-[state=active]:bg-cyan-200 data-[state=active]:text-white data-[state=active]:shadow-sm">How It Works</TabsTrigger>
          <TabsTrigger value="result" className="flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-opacity-10 data-[state=active]:bg-cyan-200 data-[state=active]:text-white data-[state=active]:shadow-sm">Sample Podcast</TabsTrigger>
        </TabsList>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <TabsContent value="setup">
              <Card className="bg-white bg-opacity-10 text-white mt-6 border-none">
                <CardHeader>
                  <CardTitle>Astra Notes: Your Personal Knowledge Assistant</CardTitle>
                  <CardDescription className="text-gray-200">
                    Discover how Astra Notes transforms your ideas into personalized audio content.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-cyan-200">
                        {steps[currentStep].icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {steps[currentStep].title}
                        </h3>
                        <p className="text-gray-200 font-semibold">
                          {steps[currentStep].content}
                        </p>
                      </div>
                    </div>
                    <Card className="bg-cyan-100 bg-opacity-10 text-white border-none">
                      <CardContent className="pt-6">
                        <p className="mb-4">{steps[currentStep].prompt}</p>
                        {currentStep === 0 && <AnimatedTopics />}
                      </CardContent>
                    </Card>
                    <Pagination className="flex justify-between">
                      <Button
                        className="bg-cyan-200 text-black hover:bg-cyan-600"
                        onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                        disabled={currentStep === 0}
                      >
                        Previous
                      </Button>
                      <Button
                        className="bg-cyan-200 text-black hover:bg-cyan-600"
                        onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
                        disabled={currentStep === steps.length - 1}
                      >
                        Next
                      </Button>
                    </Pagination>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </motion.div>
        </AnimatePresence>
        <TabsContent value="result">
          <PodcastPlayer />
          <Citations />
        </TabsContent>
      </Tabs>
    </div>
  )
}

