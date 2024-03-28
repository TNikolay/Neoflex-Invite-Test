import { ICategory } from '@/Database/types'
import { ProductCard } from './ProductCard'

interface IProps {
  readonly data: ICategory
}

export const ProductCategory = ({ data }: IProps) => {
  const { title, products } = data
  return (
    <div className='py-2 pl-3'>
      <h2 className='py-5 text-xl font-bold text-[#838383]'>{title}</h2>

      <div className='flex flex-wrap gap-6'>
        {products.map((product) => (
          <ProductCard data={product} />
        ))}
      </div>
    </div>
  )
}
