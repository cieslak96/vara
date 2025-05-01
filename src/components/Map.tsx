// src/components/Map.tsx
'use client'

import { useState } from 'react'
import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow
} from '@react-google-maps/api'

const mapStyles = [
    {
      featureType: 'all',
      elementType: 'all',
      stylers: [{ saturation: -100 }, { gamma: 0.8 }],
    },
  ]

const mapContainerStyle = {
  width: '100%',
  height: '500px',
}

const center = {
  lat: 40.7608,
  lng: -111.8910,
}

type Location = {
  lat: number
  lng: number
  city: string
}

export default function Map({ locations }: { locations: Location[] }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  })

  const [selected, setSelected] = useState<Location | null>(null)

  if (!isLoaded) return <div>Loading Map...</div>

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={center}
      options={{ styles: mapStyles }}

    >
      {locations.map((loc, i) => (
        <Marker
          key={i}
          position={{ lat: loc.lat, lng: loc.lng }}
          onClick={() => {
            console.log('📍 Pin clicked:', loc)
            setSelected(loc)
          }}
        />
      ))}

      {selected && (
      <InfoWindow
      position={{ lat: selected.lat, lng: selected.lng }}
      onCloseClick={() => setSelected(null)}
    >
      <div
        className="text-sm font-semibold cursor-pointer hover:underline"
        onClick={() =>
          window.location.href = `/locations/${encodeURIComponent(
            selected.city.toLowerCase().replace(/\s+/g, '-')
          )}`
        }
      >
        {selected.city}
      </div>
    </InfoWindow>
      )}
    </GoogleMap>
  )
}
