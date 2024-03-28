export interface IProduct {
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
