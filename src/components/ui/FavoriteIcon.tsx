import { Badge } from '@/components/ui/badge'
import { useFavoritesStore } from '@/store/favoritesStore'
import { Heart } from 'lucide-react'

export const FavoriteIcon = () => {
  const countItemsInFavorites = useFavoritesStore((state) => state.favorites.length)

  return (
    <div className='flex hover:opacity-60'>
      <Heart color='#838383' size={24} className='hover:opacity-60' fill='none' />
      <Badge variant='destructive' className='ml-[-0.5rem] mt-[-0.6rem] h-4 bg-[#FFB800] p-2 hover:bg-[#FFB800]'>
        {countItemsInFavorites}
      </Badge>
    </div>
  )
}
