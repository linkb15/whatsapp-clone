import { EmptyChatIllustration } from '../assets/emptyChat'
import { ChatTab } from '../components/chat/Tab'
import { ChatSearch } from '../components/chat/Search'
import { ChatMenu } from '../components/chat/Menu'

const ChatPage = () => {
  return (
    <div className='container min-h-screen mx-auto max-w-6xl flex'>
      <div className='w-2/5 py-5 px-3 bg-[#F5FAFC] pr-[9px] pl-[15px] flex flex-col gap-6'>
        <div className='px-3'>
          <ChatMenu />
        </div>
        <div className='px-3'>
          <ChatSearch />
        </div>
        <ChatTab />
      </div>
      <div className='w-3/5 px-4 bg-[#FAFAFA] text-center flex flex-col items-center justify-center gap-6'>
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
    </div>
  )
}

export default ChatPage
