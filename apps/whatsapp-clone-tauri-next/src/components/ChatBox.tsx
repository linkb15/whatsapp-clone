import { Alert } from './Alert'

import dynamic from 'next/dynamic'
import { Fragment } from 'react'

const Audio = dynamic(() => import('./Audio').then((mod) => mod.Audio), {
  ssr: false,
})

const chatBoxesData = [
  {
    data: 'Here are some photos. you were asking about. 😄',
    time: '5 days ago',
    type: 'text',
  },
  {
    data: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
    time: '5 days ago',
    type: 'image',
  },
  {
    data: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
    time: '5 days ago',
    type: 'image',
  },
  {
    data: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y',
    time: '5 days ago',
    type: 'image',
  },
  {
    data: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    time: '5 days ago',
    type: 'image',
  },
  {
    data: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    time: '5 days ago',
    type: 'image',
  },
  {
    data: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    time: '5 days ago',
    type: 'image',
    props: {
      isUser: true,
    },
  },
  {
    data: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    time: '5 days ago',
    type: 'image',
    props: {
      isUser: true,
    },
  },
  {
    data: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    time: '5 days ago',
    type: 'image',
    props: {
      isUser: true,
    },
  },
  {
    data: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    time: '5 days ago',
    type: 'image',
    props: {
      isUser: true,
    },
  },
  {
    data: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    time: '5 days ago',
    type: 'image',
  },
  {
    data: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=wavatar&f=y',
    time: '5 days ago',
    type: 'image',
  },
  {
    data: 'Thanks a lot man! btw love the pictures. 😁',
    time: '4 days ago',
    type: 'text',
    props: {
      isUser: true,
    },
  },
  {
    data: 'Here are some photos. you were asking about. 😄',
    time: '3 days ago',
    type: 'text',
  },
  {
    data: 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3',
    time: '3 days ago',
    type: 'audio',
  },
  {
    data: 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3',
    time: '3 days ago',
    type: 'audio',
    props: {
      isUser: true,
    },
  },
  {
    data: 'Thanks a lot man! btw love the pictures. 😁',
    time: 'Now',
    type: 'text',
    props: {
      isUser: true,
    },
  },
]

type ChatBoxesData = typeof chatBoxesData[number]

export function ChatBox() {
  const imageSequence = []

  const child = (
    chatData: ChatBoxesData,
    i: number,
    array: ChatBoxesData[]
  ) => {
    let images: JSX.Element
    if (
      array?.[i]?.type === 'image' &&
      array?.[i + 1]?.type === 'image' &&
      array?.[i]?.props?.isUser === array?.[i + 1]?.props?.isUser
    ) {
      imageSequence.push(array?.[i])
    } else {
      if (chatData.type === 'image') {
        imageSequence.push(array?.[i])
        images = (
          <div className='grid grid-cols-2 max-w-max gap-1'>
            {imageSequence.map((chatImage, j, arr) =>
              j > 3 ? null : j === 3 && arr.length - j - 1 > 0 ? (
                <div className='relative'>
                  <img
                    className='rounded-2xl rounded-bl-none'
                    width={104}
                    height={104}
                    src={chatImage.data}
                    alt=''
                  />
                  <div className='absolute top-0 text-white font-bold rounded-2xl rounded-bl-none bg-[#010101]/50 w-full h-full flex justify-center items-center'>
                    +{arr.length - j - 1}
                  </div>
                </div>
              ) : (
                <img
                  key={j}
                  className={
                    chatImage?.props?.isUser
                      ? 'rounded-2xl rounded-br-none'
                      : 'rounded-2xl rounded-bl-none'
                  }
                  width={104}
                  height={104}
                  src={chatImage.data}
                  alt=''
                />
              )
            )}
          </div>
        )
        imageSequence = []
      }
    }
    return images ? (
      images
    ) : chatData.type === 'audio' ? (
      <ChatBubble {...chatData.props}>
        <Audio data={chatData.data} />
      </ChatBubble>
    ) : chatData.type === 'text' ? (
      <ChatBubble {...chatData.props}>{chatData.data}</ChatBubble>
    ) : null
  }

  return (
    <div className='bg-[#FAFAFA] flex flex-col gap-4 px-10 py-6'>
      <Alert />

      {chatBoxesData.map((chatData, i, array) => {
        return (
          <Fragment key={i}>
            {!chatData?.props?.isUser &&
            chatBoxesData?.[i + 1]?.props?.isUser ? (
              <div className={'flex flex-col gap-2'}>
                {child(chatData, i, array)}
                <div className='text-xs text-[#0B3048]'>{chatData.time}</div>
              </div>
            ) : chatData?.props?.isUser &&
              !chatBoxesData?.[i + 1]?.props?.isUser ? (
              <div className={'flex flex-col text-right gap-2 self-end'}>
                {child(chatData, i, array)}
                <div className='text-xs text-[#0B3048]'>{chatData.time}</div>
              </div>
            ) : (
              child(chatData, i, array)
            )}
          </Fragment>
        )
      })}
    </div>
  )
}

function ChatBubble({ children, isUser }) {
  return (
    <div
      className={
        'max-w-sm w-full rounded-2xl px-6 py-4 text-[#010101] bg-white' +
        (isUser
          ? ' bg-[#D7F8F4] rounded-br-none self-end'
          : ' rounded-bl-none ')
      }>
      {children}
    </div>
  )
}
