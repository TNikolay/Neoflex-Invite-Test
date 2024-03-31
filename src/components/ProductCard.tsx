import { IProduct } from '@/Database/types'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'
import { useBasketStore } from '@/store/basketStore'
import { useFavoritesStore } from '@/store/favoritesStore'
import { Heart } from 'lucide-react'

interface IProps {
  readonly data: IProduct
  readonly isFavorite: boolean
}

export const ProductCard = ({ data, isFavorite }: IProps) => {
  const { id, title, price, rate, priceBeforeDiscount } = data
  const img = `./ProductsImages/${data.img}.png`

  const addProduct = useBasketStore((state) => state.addProduct)
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite)

  return (
    <div className='hover:border-1 flex h-[407px] w-[350px] flex-col items-center rounded-[30px] border bg-white px-5 py-2 text-xl font-bold hover:scale-110 hover:border-[#FFB800]'>
      <div className='absolute mt-4 self-end' onClick={() => toggleFavorite(id)}>
        <Heart color={isFavorite ? '#FFB800' : '#838383'} size={24} className='hover:opacity-60' fill={isFavorite ? '#FFB800' : 'none'} />
      </div>

      <img src={img} className='my-auto' alt={title} />

      <div className='mt-6 flex w-full justify-between'>
        <h2 className='mb-6'>{title}</h2>
        <div className='flex flex-col'>
          <div className='text-[#FFB800]'>{formatPrice(price)}</div>
          {priceBeforeDiscount && <div className='self-center text-[13px] text-[#FFB800] line-through'>{formatPrice(price)}</div>}
        </div>
      </div>

      <div className='mb-6 flex w-full justify-between'>
        <div className='flex items-center gap-2'>
          <svg width='25' height='23' viewBox='0 0 25 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M12.627 18.0143L5.41636 22.3656L7.37665 14.2449L0.960938 8.81491L9.38233 8.14829L12.627 0.439671L15.8716 8.14829L24.2943 8.81491L17.8773 14.2449L19.8376 22.3656L12.627 18.0143Z' fill='#FFCE7F' />
          </svg>
          {rate}
        </div>

        <Button variant={'ghost'} onClick={() => addProduct(id)} className='text-lg font-[600] active:bg-orange-400'>
          Купить
        </Button>
      </div>
    </div>
  )
}
