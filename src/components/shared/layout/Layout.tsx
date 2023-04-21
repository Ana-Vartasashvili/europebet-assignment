import { backgroundImg } from '@/assets'
import { LayoutHeader } from './components'

const Layout = () => {
  return (
    <div
      className={
        'h-screen w-screen text-white flex justify-center bg-background_black_shade_1 text-[1.5rem]'
      }
    >
      <img
        src={backgroundImg}
        className='hidden w-screen h-screen medium:block absolute top-0 left-0 object-cover'
        alt='Europebet website screenshot'
      />
      <div className='hidden w-screen h-screen medium:block absolute top-0 left-0 bg-black opacity-60' />

      <div className='h-full bg-background_black_shade_1 max-w-[94rem] medium:h-[97%] medium:fixed medium:bottom-0 medium:rounded-t-[2.5rem] overflow-y-auto scrollbar-hide pb-[22rem] relative md:pb-[10rem]'>
        <LayoutHeader />

        <div className='bg-background_black_shade_2 py-[1.4rem] w-full fixed bottom-0 flex justify-center items-center border-t-[0.35rem] border-t-main_orange max-w-[94rem] z-50'>
          <button className='bg-main_orange px-[3.5rem] py-[0.7rem] rounded-[5px]'>
            ითამაშე
          </button>
        </div>
      </div>
    </div>
  )
}

export default Layout
