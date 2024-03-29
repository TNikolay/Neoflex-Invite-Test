import { IProduct } from '@/Database/types'
import { formatPrice } from '@/lib/utils'
import { useBasketStore } from '@/store/basketStore'
import { Button } from './ui/button'

interface IProps {
  readonly data: IProduct
}

export const ProductCard = ({ data }: IProps) => {
  const { id, title, price, rate } = data
  const img = `./ProductsImages/${data.img}.png`

  const addProduct = useBasketStore((state) => state.addProduct)

  return (
    <div className='hover:border-1 flex h-[407px] w-[350px] flex-col items-center rounded-[30px] border bg-white px-5 py-2 text-xl font-bold hover:scale-110 hover:border-black'>
      <img src={img} className='my-auto' alt={title} />

      <div className='my-6 flex w-full justify-between'>
        <h2>{title}</h2>

        <span className='text-[#FFB800]'>{formatPrice(price)}</span>
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
