'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const products = [
  {
    id: 'astraResearch',
    name: 'astraResearch',
    tagline: 'The Best Morning Routine Since Coffee',
    description: 'AstraResearch creates a personalized weekly podcast summarizing the latest updates in your field. All content includes citations to academic sources.',
    demo: '/demo/research'
  },
  {
    id: 'astraNews',
    name: 'astraNews',
    tagline: 'The First no Bullshit News Feed',
    description: 'AstraNews creates a personalized weekly podcast tracking your topics, people, or events using your curated user identity.',
    comingSoon: true
  },
  {
    id: 'astraNote',
    name: 'astraNote',
    tagline: 'Fuel your Curiosity',
    description: "Do you have a growing list of things you're curious about? AstraNote transforms your notes app into an end-of-day podcast, researching so you don't have to. All content is sent directly to you, including citations.",
    comingSoon: true
  }
]

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('astraResearch')

  return (
    <div className="min-h-screen text-white flex flex-col">
      <div className="max-w-6xl w-full mx-auto px-4 py-12 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center mb-12">Our Products</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex justify-center items-center w-full mx-auto h-14 rounded-lg bg-cyan-900/20 p-1 text-cyan-100 max-w-lg">
            {products.map((product) => (
              <TabsTrigger
                key={product.id}
                value={product.id}
                className="flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-opacity-10 data-[state=active]:bg-cyan-200 data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                {product.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-12 px-4 text-center"
            >
              {products.map(
                (product) =>
                  product.id === activeTab && (
                    <div key={product.id}>
                      <h2 className="text-4xl font-bold mb-4 text-cyan-200">
                        {product.tagline}
                      </h2>
                      <p className="text-xl mb-8 max-w-2xl mx-auto">
                        {product.description}
                      </p>
                      {product.comingSoon ? (
                        <Button className="bg-cyan-100 font-semibold hover:bg-gray-400 text-black rounded-full text-lg px-8 py-8 inline-flex items-center justify-center">
                        Coming Soon
                      </Button>
                      ) : (
                        <Link href={product.demo || '/product'} passHref>
                          <Button className="bg-cyan-100 font-semibold hover:bg-gray-400 text-black rounded-full text-lg px-8 py-8 inline-flex items-center justify-center">
                            Demo
                          </Button>
                        </Link>
                      )}
                    </div>
                  )
              )}
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </div>
  );
}
