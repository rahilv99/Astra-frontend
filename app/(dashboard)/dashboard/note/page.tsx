import { AstraNoteEditor } from './note-editor'

export default function NotesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-white">Astra Note</h1>
      <AstraNoteEditor />
    </div>
  )
}

