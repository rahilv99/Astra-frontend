'use client'

import React, { useState, useEffect } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PlusCircle, X, Edit2 } from 'lucide-react'
import { UpcomingPodcast } from './upcoming-podcast'

interface Note {
  id: string;
  content: string;
  isComplete: boolean;
  isSelected: boolean;
}

export function AstraNoteEditor() {
  const [notes, setNotes] = useState<Note[]>([])
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null)

  const handleNoteChange = (id: string, value: string) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, content: value } : note
    ))
  }

  const addNewNote = () => {
    const newNote = { id: Date.now().toString(), content: '', isComplete: false, isSelected: false }
    setNotes([...notes, newNote])
    setEditingNoteId(newNote.id)
  }

  const completeNote = (id: string) => {
    setNotes(prevNotes => prevNotes.map(note =>
      note.id === id ? { ...note, isComplete: true } : note
    ).filter(note => note.id !== id || note.content.trim() !== ''))
    setEditingNoteId(null)
  }

  const removeNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const toggleNoteSelection = (id: string) => {
    const selectedCount = notes.filter(note => note.isSelected).length
    setNotes(notes.map(note => {
      if (note.id === id) {
        if (!note.isSelected && selectedCount >= 3) {
          return note; // Don't select if already 3 are selected
        }
        return { ...note, isSelected: !note.isSelected };
      }
      return note;
    }))
  }

  const selectedNotes = notes.filter(note => note.isSelected)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="col-span-1 md:col-span-2 bg-opacity-10 bg-white">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-white">
            <span>Your Notes</span>
            <Button onClick={addNewNote} variant="ghost" size="icon">
              <PlusCircle className="h-5 w-5" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[50vh]">
            {notes.map((note) => (
              <div key={note.id} className="mb-4 group relative">
                <div
                  className={`p-3 pl-4 rounded-md transition-all duration-200 flex items-center ${
                    note.isComplete
                      ? 'bg-opacity-20 bg-white'
                      : 'bg-opacity-10 bg-white'
                  }`}
                >
                    {note.isComplete && (
                  <div className="mr-3">
                    <Checkbox
                      checked={note.isSelected}
                      onCheckedChange={() => toggleNoteSelection(note.id)}
                      className="mr-2 bg-gray-300"
                    />
                  </div>
                )}
                  {editingNoteId === note.id ? (
                    <Textarea
                      placeholder="Start typing your note..."
                      value={note.content}
                      onChange={(e) => handleNoteChange(note.id, e.target.value)}
                      className="min-h-[70px] bg-transparent text-white border-none focus:ring-0"
                      onBlur={() => completeNote(note.id)}
                      autoFocus
                    />
                  ) : (
                    <p className="text-white">{note.content}</p>
                  )}
                </div>
                {editingNoteId === note.id  && ( <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeNote(note.id)}
                >
                  <X className="h-4 w-4" />
                </Button>)}
                {note.isComplete && editingNoteId !== note.id && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => setEditingNoteId(note.id)}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
      <div className="space-y-6">
        <UpcomingPodcast topics={selectedNotes} />
      </div>
    </div>
  )
}

