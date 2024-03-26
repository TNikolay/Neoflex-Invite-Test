import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Layout } from './components/Layout'
import * as pages from './pages'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<pages.MainPage />} />
        <Route path='basket' element={<pages.BasketPage />} />
        <Route path='*' element={<pages.NotFoundPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
