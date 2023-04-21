import { logoImg, banner, xIcon } from '@/assets'
import {
  Slider,
  Dropdown,
  NavigationItem,
  CashGame,
  NewYearSeries,
} from '@/components'
import { useState } from 'react'

const ContentLayout = () => {
  const [activeComponent, setActiveComponent] = useState('Cash Games')

  return (
    <>
      <div className='flex justify-between px-[1.6rem] py-[1.2rem] items-center medium:hidden'>
        <img src={logoImg} alt='Europebet logo' className='h-[2.4rem]' />

        <div className='flex gap-[1.6rem] font-semibold'>
          <button>Sign up</button>
          <button className='bg-main_orange py-[0.6rem] px-[1.2rem] rounded-[5px]'>
            Sign in
          </button>
        </div>
      </div>

      <div className='mb-[1.6rem] medium:rounded-t-[2.5re2.5]'>
        <img
          src={banner}
          alt='Europebet poker legends banner'
          className='w-full h-auto object-cover min-h-[21rem] medium:rounded-t-[1.6rem]'
        />
      </div>

      <div className='w-full px-[1.6rem] md:px-[4.3rem]'>
        <div className=''>
          <div className='md:absolute top-28 left-10 medium:top-[1.6rem] medium:left-[1.5rem] flex gap-[0.8rem] md:gap-[1.2rem] mb-[1.6rem] items-center  md:bg-background_black_shade_3 md:rounded-full md:py-[0.6rem] md:pr-[1.6rem] md:pl-[0.7rem] md:mb-0'>
            <p className='text-[1.2rem] px-[1rem] py-[0.4rem] rounded-[15px] bg-background_black_shade_3 md:text-[1.3rem] md:font-semibold md:bg-gray-600'>
              სლოტები
            </p>
            <p className='opacity-90 md:opacity-100 md:font-semibold'>
              10 სექტემბერი - 7 ნოემბერი
            </p>
          </div>

          <div className='hidden absolute medium:block top-[1.6rem] right-[1.6rem]'>
            <img src={xIcon} alt='X icon' />
          </div>
        </div>

        <p className='text-[1.6rem] mb-[1.4rem] font-semibold md:font-bold md:text-[2rem]'>
          მოიპოვე 10 საგზურიდან ერთ-ერთი
        </p>
        <p className='text-[1.4rem] opacity-90 mb-[2rem] md:mb-[3.9rem] md:text-[1.6rem]'>
          მოხვდი პოკერის ფესტივალზე მალტაში
        </p>

        <div className='w-full bg-gray_shade_1 flex items-center justify-evenly  rounded-[0.8rem] mb-[3rem] cursor-pointer'>
          <NavigationItem
            date='28 ოქტ. - 7 ნოემ.'
            title='Cash Games'
            onClick={setActiveComponent}
            activeComponent={activeComponent}
          />
          <NavigationItem
            date='10 - 29 დეკ.'
            title='New Year Series'
            onClick={setActiveComponent}
            activeComponent={activeComponent}
          />
          <NavigationItem
            date='28 ოქტ. - 7 ნოემ.'
            title='Final Stage'
            onClick={setActiveComponent}
            activeComponent={activeComponent}
          />
        </div>

        {activeComponent === 'Cash Games' && <CashGame />}
        {activeComponent === 'New Year Series' && <NewYearSeries />}

        <Dropdown />
        <Slider />
      </div>
    </>
  )
}

export default ContentLayout
