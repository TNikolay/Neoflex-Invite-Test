import { Outlet } from 'react-router-dom'
import { Footer, Header } from '.'

export const Layout = () => {
  return (
    <>
      <div className='mx-auto flex min-h-screen w-[1110px] flex-col '>
        <Header />

        <main className='w-full flex-grow py-10'>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  )
}
