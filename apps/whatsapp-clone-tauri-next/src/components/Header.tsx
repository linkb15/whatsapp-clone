import { Calling, ChevronDown, Heart, Search, Video } from 'react-iconly'

export function Header() {
  const chat = {
    id: '2',
    name: 'Jane Cooper',
    lastMessage: "Haha that's terrifying 😂",
    isPinned: false,
    lastMessageAt: '07:38 am',
    newMessageCount: 0,
    avatarImageUrl:
      'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
  }
  return (
    <div className='sticky top-0 z-50 bg-[#F7F7FC] px-6 py-4 flex items-center gap-4 justify-between w-full'>
      <div className='flex gap-4 items-center'>
        <img
          src={chat.avatarImageUrl}
          width={48}
          height={48}
          className='rounded-lg'
          alt={`Profile Picture of ${chat.name}`}
        />
        <div className='flex flex-col gap-1 items-start'>
          <div className='flex gap-3 font-medium text-base items-center'>
            {chat.name}
            <Heart set='two-tone' secondaryColor='#128C7E' size={20} />
          </div>
          <div
            className={
              chat.newMessageCount === 0
                ? 'text-xs text-[#5A6A9D] flex gap-1 items-center'
                : 'text-xs flex gap-1 items-center'
            }>
            <svg
              width='8'
              height='8'
              viewBox='0 0 8 8'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <circle cx='4' cy='4' r='4' fill='#128C7E' />
            </svg>
            Online
          </div>
        </div>
      </div>

      <div className='flex gap-3 items-center'>
        <span className='p-3'>
          <Calling size={24} set='two-tone' secondaryColor='#128C7E' />
        </span>

        <span className='p-3'>
          <Video size={24} set='two-tone' secondaryColor='#128C7E' />
        </span>

        <span className='p-3'>
          <Search size={24} set='two-tone' />
        </span>

        <span className='p-3'>
          <ChevronDown size={24} />
        </span>
      </div>
    </div>
  )
}
