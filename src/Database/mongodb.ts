import { IDatabase } from '@/Database/types'

export const db: IDatabase = [
  {
    title: 'Наушники',
    products: [
      {
        id: '00000000-d2b4-4786-8f08-e683e7eac02e',
        img: 'Image-0',
        title: 'Apple BYZ S122',
        price: 2927,
        priceBeforeDiscount: 9999,
        rate: 3.7,
      },
      {
        id: '10000000-d2b4-4786-8f08-e683e7eac02e',
        img: 'Image-1',
        title: 'Apple EarPods v.1',
        price: 99999,
        rate: 100500,
      },
      {
        id: '20000000-d2b4-4786-8f08-e683e7eac02e',
        img: 'Image-2',
        title: 'Apple EarPods v.2',
        price: 2327,
        rate: 4.1,
      },
      {
        id: '30000000-d2b4-4786-8f08-e683e7eac02e',
        img: 'Image-0',
        title: 'Apple BYZ S5687',
        price: 2927,
        rate: 4.7,
      },
      {
        id: '40000000-d2b4-4786-8f08-e683e7eac02e',
        img: 'Image-1',
        title: 'Apple EarPods v.3',
        price: 4345,
        priceBeforeDiscount: 5699,
        rate: 4.2,
      },
      {
        id: '50000000-d2b4-4786-8f08-e683e7eac02e',
        img: 'Image-2',
        title: 'Apple EarPods v.4',
        price: 9327,
        rate: 4.7,
      },
    ],
  },
  {
    title: 'Беспроводные наушники',
    products: [
      {
        id: '60000000-d2b4-4786-8f08-e683e7eac02e',
        img: 'Image-3',
        title: 'Apple EarPods v.5',
        price: 6327,
        rate: 1.4,
      },
      {
        id: '70000000-d2b4-4786-8f08-e683e7eac02e',
        img: 'Image-4',
        title: 'Apple EarPods v.6',
        price: 1327,
        rate: 2.5,
      },
      {
        id: '80000000-d2b4-4786-8f08-e683e7eac02e',
        img: 'Image-5',
        title: 'Apple EarPods v.7',
        price: 9927,
        rate: 4.5,
      },
    ],
  },
]

export function getProduct(id: string) {
  for (const category of db) {
    const res = category.products.find((v) => v.id === id)
    if (res) return res
  }
}
