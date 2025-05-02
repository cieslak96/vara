// components/LocationDropdown.tsx
'use client'

import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const locations = [
  'St. George / Washington', 'Spanish Fork', 'Orem - Dwell', 'Pleasant Grove',
  'Lehi', 'Sandy', 'Murray', 'West Valley', 'Tooele', 'Salt Lake City',
  'Bountiful', 'Layton', 'Ogden'
]

export default function LocationDropdown({ selected, setSelected }: {
  selected: string, setSelected: (val: string) => void
}) {
  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="w-full rounded-md bg-neutral-50 border border-gray-300 py-2 pl-4 pr-10 text-left shadow-sm focus:outline-none focus:ring focus:border-black text-[#1e1e1e]">
            <span>{selected || 'Choose a location'}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm">
            {locations.map((loc, i) => (
              <Listbox.Option
                key={i}
                value={loc}
                className={({ active }) =>
                  `cursor-pointer select-none px-4 py-2 ${
                    active ? 'bg-gray-50 text-gray-600' : 'text-[#1e1e1e]'
                  }`
                }
              >
                {loc}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}
