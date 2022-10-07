import { Search } from 'react-iconly'

export function ChatSearch() {
  return (
    <label htmlFor='search' className='relative'>
      <span className='absolute inset-y-0 flex items-center pl-4 text-[#9393C1]'>
        <Search size={20} />
      </span>
      <input
        id='search'
        type='search'
        placeholder='Search or start a new chat'
        className='form-input w-full pl-11 rounded-full focus:ring-0 border-[#D1E4E8] focus:border-[#128C7E] placeholder:text-[#9393C1] py-3 pr-4'
      />
    </label>
  )
}
