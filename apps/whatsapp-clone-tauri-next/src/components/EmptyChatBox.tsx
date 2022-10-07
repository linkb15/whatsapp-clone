import { EmptyChatIllustration } from 'assets/emptyChat'

export function EmptyChatBox() {
  return (
    <div className='px-4 min-h-screen text-center flex flex-col items-center justify-center gap-6'>
      <EmptyChatIllustration />
      <h1 className='font-medium text-4xl text-[#333E5B] mt-1 whitespace-pre-wrap'>
        {'Keep your\nphone connected'}
      </h1>
      <p className='font-medium text-lg text-[#8F94A3] whitespace-pre-wrap'>
        {
          'Whatsapp connects to your phone to sync messages. To reduce\n data usage. connect your phone to Wi-Fi.'
        }
      </p>
    </div>
  )
}
