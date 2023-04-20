import { Card, Scrollbar, PrizeCards } from '@/components'
import { infoIcon } from '@/assets'

const CashGame = () => {
  return (
    <div>
      <Card title='1₾ რეიქი = 1 ქულას' styles='mb-[2.4rem]'>
        <div className='flex justify-center items-center gap-[0.85rem] mb-[2rem] md:mb-[2.2rem]'>
          <p className='font-semibold text-[1.3rem] md:text-[1.6rem]'>
            TOP20 ლიდერბორდი ჰოლდემში
          </p>
          <img
            src={infoIcon}
            alt='Info icon'
            className='w-[2rem] md:w-[2.4rem]'
          />
        </div>

        <Scrollbar />

        <PrizeCards text='„ალტას“ ვაუჩერი' />

        <div className='flex justify-center items-center gap-[0.85rem] mb-[2rem] md:mb-[2.2rem]'>
          <p className='font-semibold text-[1.3rem] md:text-[1.6rem]'>
            TOP20 ლიდერბორდი ჰოლდემში
          </p>
          <img
            src={infoIcon}
            alt='Info icon'
            className='w-[2rem] md:w-[2.4rem]'
          />
        </div>

        <Scrollbar />

        <PrizeCards styles='md:mb-[1.6rem]' />

        <div className='text-[1.3rem] md:text-[1.4rem]'>
          <p>
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
          <p></p>
        </div>
      </Card>

      <div className='bg-gray_shade_1 pt-[2.4rem] pb-[1.6rem] px-[2.4rem] rounded-[1.6rem] text-center relative'>
        <div className='orange-line' />

        <p className='text-[1.6rem] font-bold mb-[1rem] md:text-[1.8rem] uppercase'>
          დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 Side
          ლიდერბორდი
        </p>

        <p className='text-[1.2rem] md:text-[1.5rem]'>
          * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის
          ლობიში.
        </p>
      </div>
    </div>
  )
}

export default CashGame
