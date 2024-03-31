import { create } from 'zustand'

type State = {
  favorites: string[]
}

type Action = {
  toggleFavorite: (id: string) => void
}

export const useFavoritesStore = create<State & Action>((set) => ({
  favorites: [],

  toggleFavorite: (id) => {
    set((state) => (state.favorites.includes(id) ? { favorites: state.favorites.filter((v) => v !== id) } : { favorites: [id, ...state.favorites] }))
  },
}))
