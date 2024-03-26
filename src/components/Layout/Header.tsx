import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <Link to='/'>Home</Link> ::
      <Link to='/basket'> Basket</Link> ::
      <Link to='/404'> 404</Link>
    </header>
  )
}
