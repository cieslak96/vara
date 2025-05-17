// FloorPlan.tsx
'use client'

import { useState } from 'react'

import ServiceFilter from '@/components/ServiceFilter'
import RoomMap from '@/components/RoomMap'
import MobileRoomList from '@/components/MobileRoomList'

export default function FloorPlan() {
  const [filter, setFilter] = useState('')

  return (
    <div className="w-full max-w-5xl mx-auto">
      <ServiceFilter filter={filter} setFilter={setFilter} />
      <RoomMap filter={filter} />
      <MobileRoomList filter={filter} />
    </div>
  )
}
