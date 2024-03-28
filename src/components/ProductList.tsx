import { IDatabase } from '@/Database/types'
import { ProductCategory } from '@/components/ProductCategory'

interface IProps {
  readonly db: IDatabase
}

export const ProductList = ({ db }: IProps) => {
  return (
    <div>
      {db.map((category) => (
        <ProductCategory data={category} key={category.title} />
      ))}
    </div>
  )
}
