import { db } from '@/Database/mongodb'
import { BasketCard } from '@/components/BasketCard'
import { Button } from '@/components/ui/button'

export const BasketPage = () => {
  const products = db[1].products
  const total = 2927
  return (
    <div className='py-2 pl-3'>
      <h2 className='py-5 text-xl font-[600]'>Корзина</h2>

      <div className='flex justify-between'>
        <div className='flex flex-col gap-6'>
          {products.map((product) => (
            <BasketCard data={product} />
          ))}
        </div>

        <div className='flex h-[114px] w-[348px] flex-shrink-0 flex-col '>
          <div className='flex justify-between rounded-3xl bg-white px-8 pb-10 pt-4 font-[600]'>
            <div>ИТОГО</div>
            <div>₽ {total}</div>
          </div>

          <Button className='mt-[-2rem] w-full rounded-2xl py-8 text-lg font-[600]'>Перейти к оформлению</Button>
        </div>
      </div>
    </div>
  )
}
