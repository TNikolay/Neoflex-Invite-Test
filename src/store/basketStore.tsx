import { IBasketItem } from '@/Database/types'
import { create } from 'zustand'

type State = {
  basket: IBasketItem
  count: number
}

type Action = {
  addProduct: (id: string) => void
  decrementProduct: (id: string) => void
  deleteProduct: (id: string) => void
}

export const useBasketStore = create<State & Action>((set) => ({
  basket: new Map<string, number>(),
  count: 0,

  addProduct: (id) => {
    set((state) => {
      const basket = new Map(state.basket)
      basket.set(id, (basket.get(id) || 0) + 1)
      return { basket, count: state.count + 1 }
    })
  },
  decrementProduct: (id) => {
    set((state) => {
      const basket = new Map(state.basket)
      const count = basket.get(id)

      if (!count) return {}

      if (count > 1) basket.set(id, count - 1)
      else basket.delete(id)

      return { basket, count: state.count - 1 }
    })
  },

  deleteProduct: (id) => {
    set((state) => {
      const basket = new Map(state.basket)
      return basket.delete(id) ? { basket, count: state.count - 1 } : {}
    })
  },
}))
