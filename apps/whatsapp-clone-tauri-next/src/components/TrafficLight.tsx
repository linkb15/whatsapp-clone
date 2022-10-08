import { appWindow } from '@tauri-apps/api/window'
import { useEffect } from 'react'
export function TrafficLight() {
  useEffect(() => {
    document
      .getElementById('titlebar-minimize')
      .addEventListener('click', () => appWindow.minimize())
    // document
    //   .getElementById('titlebar-maximize')
    //   .addEventListener('click', () => appWindow.toggleMaximize())
    document
      .getElementById('titlebar-close')
      .addEventListener('click', () => appWindow.close())
  }, [])

  return (
    <svg
      className='cursor-grab active:cursor-grabbing'
      data-tauri-drag-region
      width='52'
      height='12'
      viewBox='0 0 52 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g
        className='cursor-pointer'
        filter='url(#filter0_i_526_2676)'
        id='titlebar-close'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z'
          fill='#ED6A5E'
        />
      </g>
      <path
        d='M11.75 6C11.75 9.17564 9.17564 11.75 6 11.75C2.82436 11.75 0.25 9.17564 0.25 6C0.25 2.82436 2.82436 0.25 6 0.25C9.17564 0.25 11.75 2.82436 11.75 6Z'
        stroke='#CE5347'
        strokeWidth='0.5'
      />
      <g
        className='cursor-pointer'
        filter='url(#filter1_i_526_2676)'
        id='titlebar-minimize'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M26 12C29.3137 12 32 9.31371 32 6C32 2.68629 29.3137 0 26 0C22.6863 0 20 2.68629 20 6C20 9.31371 22.6863 12 26 12Z'
          fill='#F6BE4F'
        />
      </g>
      <path
        d='M31.75 6C31.75 9.17564 29.1756 11.75 26 11.75C22.8244 11.75 20.25 9.17564 20.25 6C20.25 2.82436 22.8244 0.25 26 0.25C29.1756 0.25 31.75 2.82436 31.75 6Z'
        stroke='#D6A243'
        strokeWidth='0.5'
      />
      {/* <g filter='url(#filter2_i_526_2676)' id='titlebar-maximize'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M46 12C49.3137 12 52 9.31371 52 6C52 2.68629 49.3137 0 46 0C42.6863 0 40 2.68629 40 6C40 9.31371 42.6863 12 46 12Z'
          fill='#62C554'
        />
      </g>
      <path
        d='M51.75 6C51.75 9.17564 49.1756 11.75 46 11.75C42.8244 11.75 40.25 9.17564 40.25 6C40.25 2.82436 42.8244 0.25 46 0.25C49.1756 0.25 51.75 2.82436 51.75 6Z'
        stroke='#58A942'
        strokeWidth='0.5'
      /> */}
      <defs>
        <filter
          id='filter0_i_526_2676'
          x='0'
          y='0'
          width='12'
          height='12'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='3' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.92549 0 0 0 0 0.427451 0 0 0 0 0.384314 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect1_innerShadow_526_2676'
          />
        </filter>
        <filter
          id='filter1_i_526_2676'
          x='20'
          y='0'
          width='12'
          height='12'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='3' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.960784 0 0 0 0 0.768627 0 0 0 0 0.317647 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect1_innerShadow_526_2676'
          />
        </filter>
        <filter
          id='filter2_i_526_2676'
          x='40'
          y='0'
          width='12'
          height='12'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='3' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.407843 0 0 0 0 0.8 0 0 0 0 0.345098 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect1_innerShadow_526_2676'
          />
        </filter>
      </defs>
    </svg>
  )
}
