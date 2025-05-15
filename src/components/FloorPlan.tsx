// components/FloorPlan.tsx
'use client'

import Image from 'next/image'

const rooms = [
  { id: '101', top: '82%', left: '28%', width: '12%', height: '15%' },
  { id: '102', top: '81%', left: '4%', width: '15%', height: '15%' },
  { id: '103', top: '60%', left: '28%', width: '12%', height: '15%' },
  { id: '104', top: '58%', left: '4%', width: '15%', height: '15%' },
  { id: '105', top: '41%', left: '28%', width: '12%', height: '13%' },
  { id: '106', top: '34%', left: '4%', width: '15%', height: '15%' },
  { id: '107', top: '8%', left: '3%', width: '12%', height: '18%' },
  { id: '108', top: '7%', left: '42%', width: '13%', height: '14%' },
  { id: '109', top: '41%', left: '42%', width: '11%', height: '12%' },
  { id: '110', top: '58%', left: '60%', width: '10%', height: '16%' },
  { id: '111', top: '59%', left: '42%', width: '12%', height: '12%' },
  { id: '112', top: '81%', left: '58%', width: '14%', height: '16%' },
  { id: '113', top: '78%', left: '42%', width: '14%', height: '19%' },
  { id: '114', top: '7%', left: '57%', width: '9%', height: '14%' },
  { id: '115', top: '7%', left: '68%', width: '8%', height: '14%' },
  { id: '116', top: '7%', left: '78%', width: '9%', height: '14%' },
  { id: '117', top: '7%', left: '89%', width: '9%', height: '14%' },
  { id: '118', top: '36%', left: '89%', width: '9%', height: '15%' },
  { id: '119', top: '58%', left: '72%', width: '9%', height: '14%' },
  { id: '120', top: '58%', left: '89%', width: '9%', height: '16%' },
  { id: '121', top: '81%', left: '75%', width: '9%', height: '14%' },
  { id: '122', top: '81%', left: '90%', width: '8%', height: '16%' },

]

export default function FloorPlan() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <Image
        src="/layton/layton-fp.jpeg"
        alt="Floor Plan"
        width={1000}
        height={600}
        className="w-full h-auto"
      />
      {rooms.map((room) => (
        <button
          key={room.id}
          className="absolute bg-transparent border-2 border-transparent hover:border-blue-500"
          style={{
            top: room.top,
            left: room.left,
            width: room.width,
            height: room.height,
          }}
          onClick={() => alert(`Clicked room ${room.id}`)}
          title={`Room ${room.id}`}
        />
      ))}
    </div>
  )
}
