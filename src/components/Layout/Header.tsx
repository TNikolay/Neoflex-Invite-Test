import { BasketIcon } from '@/components/ui/BasketIcon'
import { FavoriteIcon } from '@/components/ui/FavoriteIcon.tsx'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='flex justify-between py-8'>
      <Link to='/' className='text-xl font-bold hover:opacity-60'>
        QPICK
      </Link>

      <div className='flex gap-10'>
        <Link to='/favorites'>
          <FavoriteIcon />
        </Link>

        <Link to='/basket'>
          <BasketIcon />
        </Link>
      </div>
    </header>
  )
}
