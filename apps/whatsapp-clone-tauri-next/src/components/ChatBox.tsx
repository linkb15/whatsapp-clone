import { Alert } from './Alert'

import dynamic from 'next/dynamic'

const Audio = dynamic(() => import('./Audio').then((mod) => mod.Audio), {
  ssr: false,
})

export function ChatBox() {
  return (
    <div className='bg-[#FAFAFA] flex flex-col gap-4 px-10 py-6'>
      <Alert />

      <div className='grid grid-cols-2 max-w-max gap-1'>
        <img
          className='rounded-2xl rounded-bl-none'
          width={104}
          height={104}
          src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
          alt=''
        />
        <img
          className='rounded-2xl rounded-bl-none'
          width={104}
          height={104}
          src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
          alt=''
        />
        <img
          className='rounded-2xl rounded-bl-none'
          width={104}
          height={104}
          src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
          alt=''
        />
        <div className='relative'>
          <img
            className='rounded-2xl rounded-bl-none'
            width={104}
            height={104}
            src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
            alt=''
          />
          <div className='absolute top-0 text-white font-bold rounded-2xl rounded-bl-none bg-[#010101]/50 w-full h-full flex justify-center items-center'>
            +15
          </div>
        </div>
      </div>

      <ChatBubble>
        {'Here are some photos. you were asking about. 😄'}
      </ChatBubble>
      <div className='flex flex-col gap-2'>
        <ChatBubble>
          <Audio />
        </ChatBubble>
        <div className='text-xs text-[#0B3048]'>3 days ago</div>
      </div>

      <ChatBubble isUser>
        Thanks a lot man! btw love the pictures. 😁
      </ChatBubble>
    </div>
  )
}

function ChatBubble({ children, isUser }) {
  return (
    <div
      className={
        'max-w-sm rounded-2xl px-6 py-4 text-[#010101] bg-white' +
        (isUser ? ' bg-[#D7F8F4] rounded-br-none ' : ' rounded-bl-none ')
      }>
      {children}
    </div>
  )
}
