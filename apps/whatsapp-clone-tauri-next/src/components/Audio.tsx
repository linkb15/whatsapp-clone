import { useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'

export function Audio() {
  let url = 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3'
  const waveformRef = useRef(null)
  const [wavesurfer, setWave] = useState(null)
  const [play, setPlay] = useState(false)

  useEffect(() => {
    setPlay(false)

    setWave(
      WaveSurfer.create({
        container: waveformRef.current,
        backend: 'WebAudio',
        waveColor: '#9c9c9c',
        progressColor: '#4e4e4e',
        height: 25,
        cursorWidth: 1,
        cursorColor: 'transparent',
        barWidth: 2,
        barRadius: 3,
        // width: '100%',
        barGap: 4,
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
    )
  }, [])

  useEffect(() => {
    if (wavesurfer) {
      wavesurfer.load(url)

      wavesurfer.on('ready', function () {
        // https://wavesurfer-js.org/docs/methods.html

        // make sure object stillavailable when file loaded
        if (wavesurfer) {
          wavesurfer.setVolume(1)
          setPlay(true)
        }
      })
    }

    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => {
      wavesurfer?.destroy()
    }
  }, [wavesurfer])

  return (
    <div>
      <div className='animate-pulse flex space-x-4'>
        <div className='rounded-full bg-slate-700 h-10 w-10'></div>
      </div>
      <div id='waveform' ref={waveformRef}></div>
    </div>
  )
}
