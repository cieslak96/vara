// services.tsx
import {
  RentIcon,
  HairIcon,
  SkinIcon,
  LashesIcon,
  PiercingIcon,
  NailsIcon,
  BarberIcon,
  TattooIcon,
} from '@/components/ServiceIcons'

export const services = [
  { key: 'Rent', label: 'Rent' },
  { key: 'Hair', label: 'Hair' },
  { key: 'Skin', label: 'Skin' },
  { key: 'Lashes', label: 'Lashes' },
  { key: 'Piercing', label: 'Piercing' },
  { key: 'Nails', label: 'Nails' },
  { key: 'Barber', label: 'Barber' },
  { key: 'Tattoo', label: 'Tattoo' },
  { key: '', label: 'All' },
]

export const ServiceIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'Rent':
      return <RentIcon />
    case 'Hair':
      return <HairIcon />
    case 'Skin':
      return <SkinIcon />
    case 'Lashes':
      return <LashesIcon />
    case 'Piercing':
      return <PiercingIcon />
    case 'Nails':
      return <NailsIcon />
    case 'Barber':
      return <BarberIcon />
    case 'Tattoo':
      return <TattooIcon />
    default:
      return null
  }
}
