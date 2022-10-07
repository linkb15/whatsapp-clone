import { Lock } from 'react-iconly'

export function Alert() {
  return (
    <div className='text-[#312E40] max-w-[482px] mx-auto text-xs rounded-xl text-[10px] flex items-center gap-[10px] px-6 py-3 bg-[#FEECDC]'>
      <Lock size={24} />
      Messages are end-to-end encrypted. No one outside of this chat, not even
      WhatsApp can read or listen to them click to learn more.
    </div>
  )
}
