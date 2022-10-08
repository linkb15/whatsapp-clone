import { Plus, Voice } from 'react-iconly'

export function ChatInput() {
  return (
    <div className='sticky rounded-3xl rounded-l-none gap-6 bottom-0 flex items-center w-full bg-[#F6F6F6] px-6 py-4'>
      <img src='/emote.png' />
      <Plus set='two-tone' secondaryColor='#128C7E' />
      <label htmlFor='' className='flex grow'>
        <input
          type='text'
          placeholder='Say something ...'
          className='w-full border-none px-6 py-3 focus:outline-none focus:border-[#128C7E] rounded-full placeholder:text-[#8F8F8F] placeholder:text-sm'
        />
      </label>
      <Voice set='two-tone' secondaryColor='#128C7E' />
    </div>
  )
}
