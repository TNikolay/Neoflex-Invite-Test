import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  favorites: string[]
}

type Action = {
  toggleFavorite: (id: string) => void
}

export const useFavoritesStore = create<State & Action>()(
  persist(
    (set) => ({
      favorites: [],

      toggleFavorite: (id) => {
        set((state) => (state.favorites.includes(id) ? { favorites: state.favorites.filter((v) => v !== id) } : { favorites: [id, ...state.favorites] }))
      },
    }),
    {
      name: 'TN_NIT_favorites',
    }
  )
)
