import { mainBgSm, mainBgLg } from '@/assets'
import { TournamentsItem } from '@/components'

const Tournaments = () => {
  return (
    <div className='text-[1.4rem] text-center flex flex-col justify-center items-center w-full md:bg-background_black_shade_2 md:border-4 md:border-background_black_shade_3 md:px-[2.4rem] md:pt-[2.6rem] md:pb-[2rem] md:rounded-[1.6rem] mb-[2.4rem]'>
      <p className='mb-[1.9rem] font-bold md:text-[1.8rem] md:mb-[2.4rem]'>
        ყოველდღიური ტურნირები და სატელიტები
      </p>

      <div className='flex flex-col justify-center items-center gap-[1.4rem] w-full sm:w-3/4 md:grid md:grid-cols-2 md:w-full mb-[2rem]'>
        <TournamentsItem />
        <TournamentsItem />
        <TournamentsItem
          tournamentName='Main Events'
          prize='150 000₾'
          date='29 აპრილი'
          itemStyles='md:col-span-2'
          textStyles='md:w-1/2 mediumSm:w-[38%] md:left-1/2 md:-translate-x-1/2'
        >
          <img
            src={mainBgSm}
            alt='Tournament background with rings'
            className='w-full md:hidden'
          />

          <img
            src={mainBgLg}
            alt='Tournament background with rings'
            className='hidden md:block w-full'
          />
        </TournamentsItem>
      </div>

      <p className='text-[1.4rem]'>
        * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, The
        Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს საგზურის
        მისაღებად.
      </p>
    </div>
  )
}

export default Tournaments
