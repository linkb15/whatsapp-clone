import { EmptyChatBox } from '../components/EmptyChatBox'
import { ChatTab } from '../components/chat/Tab'
import { ChatSearch } from '../components/chat/Search'
import { ChatMenu } from '../components/chat/Menu'
import { ChatFAB } from '../components/chat/FAB'
import { Header } from 'components/Header'
import { ChatBox } from 'components/ChatBox'
import { useChatSelected, useHydration } from 'lib/useChatSelected'
import { ChatInput } from 'components/ChatInput'

const ChatPage = () => {
  const chatSelected = useChatSelected((s) => s.selectedChatId)

  const hasHydrated = useHydration()
  return (
    <div className='container h-screen mx-auto max-w-6xl flex'>
      <div className='relative w-2/5 py-5 px-3 bg-[#F5FAFC] pr-[9px] pl-[15px] flex flex-col gap-6'>
        <div className='px-3'>
          <ChatMenu />
        </div>
        <div className='px-3'>
          <ChatSearch />
        </div>
        <ChatTab />
        <ChatFAB />
      </div>
      <div className='w-3/5 h-screen overflow-auto bg-[#FAFAFA]'>
        {!hasHydrated ? (
          'Loading ...'
        ) : chatSelected ? (
          <>
            <Header />
            <ChatBox />
            <ChatInput />
          </>
        ) : (
          <EmptyChatBox />
        )}
      </div>
    </div>
  )
}

export default ChatPage
