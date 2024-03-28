import { ProductList } from '@/components/ProductList'
import { db } from '@/Database/mongodb'

export const MainPage = () => {
  return <ProductList db={db} />
}
