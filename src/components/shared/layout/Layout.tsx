import { backgroundImg, xIcon } from '@/assets'
import { ContentLayout } from './components'

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

      <div className='h-full bg-background_black_shade_1 max-w-[94rem] medium:h-[97%] medium:fixed medium:bottom-0 medium:rounded-t-[2.5rem] overflow-y-auto scrollbar-hide pb-[12rem] relative md:pb-[14rem]'>
        <div className='hidden absolute medium:block top-[1.6rem] right-[5rem] z-50'>
          <img src={xIcon} alt='X icon' className='fixed' />
        </div>

        <ContentLayout />

        <div className='bg-background_black_shade_2 py-[1.4rem] w-full fixed bottom-0 flex justify-center items-center border-t-[0.35rem] border-t-main_orange max-w-[94rem] z-50'>
          <a
            href='https://www.europebet.com/ka/poker'
            target='_blank'
            className='bg-main_orange hover:bg-orange_hover duration-300 ease-in-out px-[3.5rem] py-[0.7rem] rounded-[5px]'
            rel='noreferrer'
          >
            ითამაშე
          </a>
        </div>
      </div>
    </div>
  )
}

export default Layout
