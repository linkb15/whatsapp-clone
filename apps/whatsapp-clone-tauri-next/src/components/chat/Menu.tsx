import { ChevronDown } from 'react-iconly'

import dynamic from 'next/dynamic'

const TrafficLight = dynamic(
  () => import('../TrafficLight').then((mod) => mod.TrafficLight),
  {
    ssr: false,
  }
)

export function ChatMenu() {
  return (
    <div className='flex gap-6 items-center'>
      <TrafficLight />

      <div className='flex grow justify-between items-center'>
        <div className='flex gap-6 items-center'>
          <img
            width={40}
            height={40}
            className='rounded-full'
            src='https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
            alt='user'
          />
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <circle
              cx='11.52'
              cy='12.48'
              r='10.77'
              stroke='#09132C'
              strokeWidth='1.5'
              strokeDasharray='14 4.94'
            />
            <circle cx='19.1999' cy='4.8' r='4.8' fill='#128C7E' />
          </svg>
        </div>
        <span>
          <ChevronDown />
        </span>
      </div>
    </div>
  )
}
