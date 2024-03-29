import { BASE_URL } from '@/App'
import { BasketIcon } from '@/components/ui/BasketIcon'
import { FavoriteIcon } from '@/components/ui/FavoriteIcon.tsx'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='flex justify-between py-8'>
      <Link to={`${BASE_URL}/`} className='text-2xl font-bold hover:opacity-60'>
        QPICK
      </Link>

      <div className='flex gap-10'>
        <Link to={`${BASE_URL}/favorites`}>
          <FavoriteIcon />
        </Link>

        <Link to={`${BASE_URL}/basket`}>
          <BasketIcon />
        </Link>
      </div>
    </header>
  )
}
