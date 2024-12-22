'use client'

import { useState } from 'react'
import { X, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

export function EditKeywords() {
  // BACKEND - fetch keywords from backend
  const userName = "Rahil"
  const [keywords, setKeywords] = useState<string[]>(['React', 'Next.js', 'Tailwind'])
  const [newKeyword, setNewKeyword] = useState('')

  const addKeyword = () => {
    if (newKeyword && !keywords.includes(newKeyword)) {
      setKeywords([...keywords, newKeyword])
      setNewKeyword('')
    }
  }

  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter(k => k !== keyword))
  }

  const handleSubmit = () => {
    console.log('Submitting keywords:', keywords)
    // BACKEND - send the keywords to database
    redirect('/dashboard/research')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-lg w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-black tracking-tight sm:text-5xl">
            Hello {userName}
          </h1>
          <p className="mt-3 text-lg text-gray-700">
            Your interests help us personalize your experience.
          </p>
        </div>
      <div className="w-full max-w-lg rounded-lg shadow-md p-6 bg-black bg-opacity-10 rounded-xl p-8 backdrop-filter backdrop-blur-lg">
        <h1 className="text-2xl font-semibold text-black mb-4">Edit Keywords</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {keywords.map((keyword) => (
            <Keyword key={keyword} keyword={keyword} onRemove={removeKeyword} />
          ))}
          <AddKeyword
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
            onAdd={addKeyword}
          />
        </div>
        <Button className="w-full bg-gray-700 text-black hover:bg-gray-400" onClick={handleSubmit}>
          Save Changes
        </Button>
      </div>
    </div>
    </div>
  )
}

function Keyword({ keyword, onRemove }: { keyword: string; onRemove: (keyword: string) => void }) {
  return (
    <div className="bg-black text-black px-3 py-1 rounded-full flex items-center">
      <span className="mr-1">{keyword}</span>
      <button onClick={() => onRemove(keyword)} className="text-gray-500 hover:text-gray-700">
        <X size={14} />
      </button>
    </div>
  )
}

function AddKeyword({ value, onChange, onAdd }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; onAdd: () => void }) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={(e) => e.key === 'Enter' && onAdd()}
        placeholder="Add keyword"
        className="bg-black text-black px-3 py-1 rounded-full pr-8 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      <button
        onClick={onAdd}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
      >
        <Plus size={14} />
      </button>
    </div>
  )
}

