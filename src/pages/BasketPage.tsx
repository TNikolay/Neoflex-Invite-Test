import { getProduct } from '@/Database/mongodb'
import { BasketCard } from '@/components/BasketCard'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'
import { useBasketStore } from '@/store/basketStore'

export const BasketPage = () => {
  const products = useBasketStore((state) => state.basket)
  const productCards = []
  let total = 0

  for (const [id, count] of products) {
    const data = getProduct(id)
    if (data) {
      total += data.price * count
      productCards.push(<BasketCard data={data} count={count} key={id} />)
    }
  }

  return (
    <div className='py-2 pl-3'>
      <h2 className='py-5 text-xl font-[600]'>Корзина</h2>

      <div className='flex justify-between'>
        <div className='flex flex-col gap-6'>{productCards.length > 0 ? productCards : <p>Вы у нас еще ничего не выбрали, просто ходите тут, смотрите... :(</p>}</div>

        <div className='flex h-[114px] w-[348px] flex-shrink-0 flex-col '>
          <div className='flex justify-between rounded-3xl bg-white px-8 pb-10 pt-4 font-[600]'>
            <div>ИТОГО</div>
            <div>₽ {formatPrice(total).slice(0, -2)}</div>
          </div>

          <Button className='mt-[-2rem] w-full rounded-2xl py-8 text-lg font-[600] active:bg-orange-400'>Перейти к оформлению</Button>
        </div>
      </div>
    </div>
  )
}
