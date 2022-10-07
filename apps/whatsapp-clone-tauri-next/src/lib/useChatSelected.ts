import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BearState {
  selectedChatId: string
  setSelectedChatId: (by: string) => void
}

export const useChatSelected = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        selectedChatId: '',
        setSelectedChatId: (by) => set((state) => ({ selectedChatId: by })),
      }),
      {
        name: 'bear-storage',
      }
    )
  )
)
