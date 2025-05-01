// components/SearchBar.tsx
'use client'

type SearchBarProps = {
  value: string
  onChange: (val: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Enter city or zip code..."
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-black"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
