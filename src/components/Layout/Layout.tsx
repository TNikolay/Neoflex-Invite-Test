import { Outlet } from 'react-router-dom'
import { Footer, Header } from '.'

export const Layout = () => {
  return (
    <>
      <div className='flex flex-col min-h-screen w-[90%] mx-auto px-[165px] bg-[#EAEAEA]'>
        <Header />

        <main className='pt-10 mx-auto flex-grow'>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  )
}
