import {
  Card,
  Scrollbar,
  PrizeCards,
  Tournaments,
  InfoCard,
} from '@/components'
import { promoLeftImg, promoRightImg, time, mechanicIcon } from '@/assets'

const NewYearSeries = () => {
  return (
    <div>
      <Card
        title='ტურნირები და სატელიტები'
        styles='mb-[2rem] bg-gray_shade_1 md:mb-[2.7rem] md:!pb-0'
        childrenStyles='!px-0 -mt-[1.5rem] md:-mt-[2rem] relative md:!px-0'
      >
        <div className='bg-background_black_shade_2 md:bg-none pt-[1.4rem] rounded-b-[1.6rem]'>
          <p className='text-[1.6rem] font-bold px-[1.7rem]'>
            სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:
          </p>

          <img
            src={time}
            alt='Clock icon with time - 19:00/19:30/20:00'
            className='mx-auto mb-16'
          />

          <div className='flex justify-between -mt-20 xs:-mt-40 md:-mt-16 mb-[1.6rem] lg:-mt-24'>
            <img
              src={promoLeftImg}
              alt='Playing cards'
              className='w-1/4 md:w-[27%]'
            />
            <img
              src={promoRightImg}
              alt='Playing cards'
              className='w-1/4 md:w-[27%]'
            />
          </div>
        </div>

        <div className='text-center px-[1.1rem] md:absolute md:top-44 md:left-1/2 md:-translate-x-1/2 md:w-[45rem]'>
          <p className='text-[1.4rem] mb-[0.9rem] md:opacity-80'>
            * ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.
          </p>
          <p className='text-[1.4rem] mb-[1.5rem] md:opacity-80'>
            ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში
          </p>

          <a
            href='https://www.europebet.com/ka/login?redirect=%2Fka%2Fgames%2Fpoker%2Fcg-poker'
            target='_blank'
            rel='noreferrer'
            className='bg-main_orange hover:bg-orange_hover duration-300 ease-in-out px-[1.8rem] py-[0.65rem] rounded-[5px] font-bold'
          >
            პოკერის ლობი
          </a>
        </div>
      </Card>

      <Card
        title='მოხვდი TOP20 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით'
        styles='mb-[2.4rem]'
      >
        <div className='bg-background_black_shade_4 border-2 border-gray_shade_1 w-fit mx-auto mb-[2.1rem] py-[1.1rem] pl-[2rem] pr-[5.4rem] rounded-full relative'>
          <p className='text-[1.2rem] font-bold'>ქულების დაგროვების მექანიკა</p>

          <img
            src={mechanicIcon}
            alt='Arrow down icon with orange background'
            className='absolute top-0 right-0'
          />
        </div>

        <Scrollbar />
        <PrizeCards />

        <div className='text-[1.3rem] md:text-[1.4rem]'>
          <p className='mb-[1rem] md:mb-[1.2rem]'>
            * ლიდერბორდის შედეგები განახლდება{' '}
            <a
              href='https://www.europebet.com/ka/login?redirect=%2Fka%2Fgames%2Fpoker%2Fcg-poker'
              className='text-main_orange underline'
              target='_blank'
              rel='noreferrer'
            >
              პოკერის ლობიში
            </a>
          </p>

          <p>
            * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და
            სატელიტები
          </p>
        </div>
      </Card>

      <Tournaments />
      <InfoCard />
    </div>
  )
}

export default NewYearSeries
