import { IBasketItem } from '@/Database/types'
import { create } from 'zustand'
import { StorageValue, persist } from 'zustand/middleware'

type State = {
  basket: IBasketItem
  count: number
}

type Action = {
  addProduct: (id: string) => void
  decrementProduct: (id: string) => void
  deleteProduct: (id: string) => void
}

export const useBasketStore = create<State & Action>()(
  persist(
    (set) => ({
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
    }),
    {
      name: 'TN_NIT_Basket',
      // https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md#how-do-i-use-it-with-map-and-set
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name)
          if (!str) return null
          const { state } = JSON.parse(str)
          return {
            state: {
              ...state,
              basket: new Map(state.basket),
            },
          }
        },
        setItem: (name, newValue: StorageValue<State>) => {
          // functions cannot be JSON encoded
          const str = JSON.stringify({
            state: {
              ...newValue.state,
              basket: Array.from(newValue.state.basket.entries()),
            },
          })
          localStorage.setItem(name, str)
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
)
