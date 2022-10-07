import { QRCodeCanvas } from 'qrcode.react'
import { ChevronDown } from 'react-iconly'

const howToLoginSteps = [
  'Open WhatsApp on your phone',
  <p className='flex gap-1.5'>
    Tap Menu{' '}
    <span className='bg-green-50'>
      <ChevronDown set='light' size={'medium'} />
    </span>{' '}
    or Settings and select
    <span className='font-medium'>Linked Devices</span>
  </p>,
  'Point your phone to this screen to capture',
]

function App() {
  return (
    <div className='bg-gray-100 min-h-screen text-[#09132C]'>
      <div className='container mx-auto max-w-6xl flex flex-col items-center justify-center py-24 gap-10'>
        <QRCodeCanvas
          value={'https://picturesofpeoplescanningqrcodes.tumblr.com/'}
          size={266}
          bgColor={'transparent'}
          fgColor={'#09132C'}
          level={'Q'}
          includeMargin={false}
          imageSettings={{
            src: './whatsapp.svg',
            x: undefined,
            y: undefined,
            height: 64,
            width: 64,
            excavate: false,
          }}
        />
        <div className='flex flex-col gap-6'>
          <h1 className='font-medium text-lg text-center'>
            Login in to WhatsApp by QR Code
          </h1>
          <ol className='flex flex-col gap-4 text-sm'>
            {howToLoginSteps.map((step, i) => (
              <li className='flex gap-3 items-center'>
                <span className='font-medium text-xs rounded-full bg-green-100 text-green-500 h-6 w-6 flex items-center justify-center'>
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <label htmlFor='rememberMe' className='flex gap-3 items-center text-lg'>
          <input
            id='rememberMe'
            type='checkbox'
            className='rounded text-green-500 focus:ring-green-500'
          />
          Keep me signed in
        </label>
      </div>
    </div>
  )
}

export default App
