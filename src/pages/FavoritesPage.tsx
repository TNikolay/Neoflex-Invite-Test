import { ProductCard } from '@/components/ProductCard'
import { getProduct } from '@/Database/mongodb'
import { useFavoritesStore } from '@/store/favoritesStore'

export const FavoritesPage = () => {
  const favorites = useFavoritesStore((state) => state.favorites)
  const products = []
  for (const id of favorites) {
    const product = getProduct(id)
    if (product) products.push(product)
  }

  return (
    <>
      <h2 className='py-5 text-xl font-bold text-[#838383]'>Избранное</h2>
      <div className='flex flex-wrap gap-6'>{products.length > 0 ? products.map((product) => <ProductCard data={product} isFavorite={true} key={product.id} />) : <p>Вам у нас еще ничего не нравится :(</p>}</div>
    </>
  )
}
