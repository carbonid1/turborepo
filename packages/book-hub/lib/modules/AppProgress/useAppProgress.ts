import create from 'zustand'

interface AppProgressState {
  key: number
  isAnimating: boolean
  updateKey: () => void
  setIsAnimating: (isAnimating: boolean) => void
}

export const useAppProgress = create<AppProgressState>(set => ({
  key: 0,
  isAnimating: false,
  updateKey: () => set(prev => ({ key: prev.key ^ 1 })),
  setIsAnimating: isAnimating => set(() => ({ isAnimating })),
}))
