import { ICategory } from '@/Database/types'
import { ProductCard } from './ProductCard'
import { useFavoritesStore } from '@/store/favoritesStore'

interface IProps {
  readonly data: ICategory
}

export const ProductCategory = ({ data }: IProps) => {
  const { title, products } = data
  const favorites = useFavoritesStore((state) => state.favorites)

  return (
    <div className='py-2 pl-3'>
      <h2 className='py-5 text-xl font-bold text-[#838383]'>{title}</h2>

      <div className='flex flex-wrap gap-6'>
        {products.map((product) => (
          <ProductCard data={product} isFavorite={favorites.includes(product.id)} key={product.id} />
        ))}
      </div>
    </div>
  )
}
