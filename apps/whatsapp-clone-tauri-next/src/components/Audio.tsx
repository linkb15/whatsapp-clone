import { useEffect, useRef, useState } from 'react'
import { Play } from 'react-iconly'
import WaveSurfer from 'wavesurfer.js'

let url = 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3'

export function Audio() {
  const waveformRef = useRef<HTMLElement>(null)
  const wavesurfer = useRef<WaveSurfer>(null)

  const [play, setPlay] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    setPlay(false)

    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      backend: 'WebAudio',
      progressColor: '#128C7E',
      waveColor: '#128C7E1A',
      height: 20,
      cursorWidth: 1,
      cursorColor: 'transparent',
      barWidth: 1.5,
      barRadius: 3,
      // width: '100%',
      barGap: 3,
      normalize: true,
      responsive: true,
      autoCenter: false,
      fillParent: true,
      hideScrollbar: true,
      partialRender: true,
      closeAudioContext: true,
      xhr: {
        cache: 'default',
        mode: 'cors',
        method: 'GET',
        credentials: 'same-origin',
        // headers: [
        //   { key: 'cache-control', value: 'no-cache' },
        //   { key: 'pragma', value: 'no-cache' },
        // ],
      },
    })

    wavesurfer?.current?.load(url)

    wavesurfer?.current?.on('ready', function (e) {
      if (wavesurfer.current) {
        wavesurfer?.current?.setVolume(1)
        setDuration(wavesurfer?.current?.getDuration() || 0)
      }
    })

    wavesurfer?.current?.on('audioprocess', function (e) {
      if (wavesurfer.current) {
        setCurrentTime(wavesurfer?.current?.getCurrentTime() || 0)
      }
    })

    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => {
      wavesurfer?.current?.destroy()
    }
  }, [])

  return (
    <div className='flex gap-3 items-center text-[10px] text-[#010101]'>
      <button
        onClick={() => {
          if (play) {
            wavesurfer.current?.pause()
            setPlay(false)
          } else {
            wavesurfer.current?.play()
            setPlay(true)
          }
        }}
        className='min-w-[32px] h-8 w-8 flex justify-center items-center rounded-lg bg-[#128C7E]'>
        {!play ? (
          <Play set='light' primaryColor='white' />
        ) : (
          <svg
            width='8'
            height='12'
            viewBox='0 0 8 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M3 2C3 1.17157 2.32843 0.5 1.5 0.5C0.671573 0.5 0 1.17157 0 2V10C0 10.8284 0.671573 11.5 1.5 11.5C2.32843 11.5 3 10.8284 3 10V2Z'
              fill='white'
            />
            <path
              d='M2.5 2C2.5 1.44772 2.05228 1 1.5 1C0.947715 1 0.5 1.44772 0.5 2V10C0.5 10.5523 0.947715 11 1.5 11C2.05228 11 2.5 10.5523 2.5 10V2Z'
              stroke='white'
            />
            <path
              d='M8 2C8 1.17157 7.32843 0.5 6.5 0.5C5.67157 0.5 5 1.17157 5 2V10C5 10.8284 5.67157 11.5 6.5 11.5C7.32843 11.5 8 10.8284 8 10V2Z'
              fill='white'
            />
            <path
              d='M7.5 2C7.5 1.44772 7.05228 1 6.5 1C5.94772 1 5.5 1.44772 5.5 2V10C5.5 10.5523 5.94772 11 6.5 11C7.05228 11 7.5 10.5523 7.5 10V2Z'
              stroke='white'
            />
          </svg>
        )}
      </button>
      <div className='w-full flex gap-2 items-center'>
        <div>
          {new Date(Math.floor(currentTime) * 1000)
            .toISOString()
            .substring(14, 19)}
        </div>
        <div className='w-full'>
          <div id='waveform' ref={waveformRef}></div>
        </div>
        <div>
          {new Date(Math.floor(duration) * 1000)
            .toISOString()
            .substring(14, 19)}
        </div>
      </div>
    </div>
  )
}
