import { useEffect, useState } from 'react'
import create from 'zustand'
import { persist } from 'zustand/middleware'

interface BearState {
  selectedChatId: string
  setSelectedChatId: (by: string) => void
}

export const useChatSelected = create<BearState>()(
  persist((set) => ({
    selectedChatId: '',
    setSelectedChatId: (by) => set((state) => ({ selectedChatId: by })),
  }))
)

export const useHydration = () => {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const unsubHydrate = useChatSelected.persist.onHydrate(() =>
      setHydrated(false)
    ) // Note: this is just in case you want to take into account manual rehydrations. You can remove this if you don't need it/don't want it.
    const unsubFinishHydration = useChatSelected.persist.onFinishHydration(() =>
      setHydrated(true)
    )

    setHydrated(useChatSelected.persist.hasHydrated())

    return () => {
      unsubHydrate()
      unsubFinishHydration()
    }
  }, [])

  return hydrated
}
