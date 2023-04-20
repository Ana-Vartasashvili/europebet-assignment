import { Card, Scrollbar, PrizeCards, InfoCard, Dropdown } from '@/components'
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

        <PrizeCards text='„ალტას“ ვაუჩერი' styles='md:mb-[2.6rem]' />

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
        </div>
      </Card>

      <InfoCard />
    </div>
  )
}

export default CashGame
