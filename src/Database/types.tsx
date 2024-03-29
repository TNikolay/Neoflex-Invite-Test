export interface IProduct {
  id: string
  img: string
  title: string
  price: number
  rate: number
}

export interface ICategory {
  title: string
  products: IProduct[]
}

export type IDatabase = ICategory[]

export type IBasketItem = Map<string, number>
