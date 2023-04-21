import { Card } from '@/components'
import { promoLeftImg, promoRightImg, time } from '@/assets'

const SpringSeries = () => {
  return (
    <Card
      title='ტურნირები და სატელიტები'
      styles='mb-[2rem] bg-gray_shade_1 md:pb-0 '
      childrenStyles='px-0 -mt-[1.5rem] md:-mt-[2rem] relative md:px-0'
    >
      <div className='bg-background_black_shade_2 pt-[1.4rem]  rounded-b-[1.6rem]'>
        <p className='text-[1.6rem] font-bold px-[1.7rem]'>
          სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:
        </p>

        <img
          src={time}
          alt='Clock icon with time - 19:00/19:30/20:00'
          className='mx-auto mb-16'
        />

        <div className='flex justify-between -mt-20 xs:-mt-40 md:-mt-12 mb-[1.6rem]'>
          <img
            src={promoLeftImg}
            alt='Playing cards'
            className='w-1/4 md:w-[21rem]'
          />
          <img
            src={promoRightImg}
            alt='Playing cards'
            className='w-1/4 md:w-[21rem]'
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

        <button className='bg-main_orange px-[1.8rem] py-[0.65rem] rounded-[5px] font-bold'>
          პოკერის ლობი
        </button>
      </div>
    </Card>
  )
}

export default SpringSeries
