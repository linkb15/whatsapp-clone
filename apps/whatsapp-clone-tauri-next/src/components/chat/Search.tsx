import { Search } from 'react-iconly'

export function ChatSearch() {
  return (
    <label
      htmlFor='search'
      className='bg-white w-full flex rounded-full items-center gap-2.5 border border-[#D1E4E8]'>
      <span className='rounded-l-full border-l pl-4 text-[#9393C1]'>
        <Search size={20} />
      </span>
      <input
        id='search'
        type='search'
        placeholder='Search or start a new chat'
        className='w-full pl-0 rounded-full border-l-0 rounded-l-none focus:ring-0 focus:outline-none border-[#D1E4E8] focus:border-[#D1E4E8]/40 placeholder:text-[#9393C1] py-3 pr-4'
      />
    </label>
  )
}
