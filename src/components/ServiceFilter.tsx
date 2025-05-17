// ServiceFilter.tsx
'use client'

import { services, ServiceIcon } from './services'

interface Props {
  filter: string
  setFilter: (key: string) => void
}

export default function ServiceFilter({ filter, setFilter }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3 px-4 py-4">
      <p className="w-full text-center text-sm font-semibold text-gray-700 mb-2 mt-4">
        Looking for:
      </p>
      {services.map((service) => {
        const isAll = service.key === ''
        const isActive = filter === service.key

        return (
          <button
            key={service.key}
            onClick={() => setFilter(isActive ? '' : service.key)}
            className={`flex flex-col items-center justify-center ${
              isAll
                ? 'px-3 h-8 sm:px-4 sm:h-9 text-xs sm:text-sm mt-4'
                : 'w-14 h-14 sm:w-16 sm:h-16 text-[10px] sm:text-xs'
            } rounded-full border transition duration-200 ${
              isActive
                ? isAll
                  ? 'bg-black text-white border-black'
                  : 'bg-gray-300 text-black border-white'
                : 'bg-white text-black border-gray-200 hover:bg-gray-100'
            }`}
          >
            {!isAll && (
              <div className="flex justify-center items-center w-full mb-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6">
                  <ServiceIcon type={service.key} />
                </div>
              </div>
            )}
            <span className="text-center">{service.label}</span>
          </button>
        )
      })}
    </div>
  )
}
