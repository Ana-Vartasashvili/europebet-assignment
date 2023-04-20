import { Card, Scrollbar, PrizeCards } from '@/components'
import { infoIcon } from '@/assets'

const CashGame = () => {
  return (
    <Card title='1₾ რეიქი = 1 ქულას'>
      <div className='flex justify-center items-center gap-[0.85rem] mb-[2rem]'>
        <p className='font-semibold text-[1.3rem]'>TOP20 ლიდერბორდი ჰოლდემში</p>
        <img src={infoIcon} alt='Info icon' className='w-[2rem]' />
      </div>

      <Scrollbar />

      <PrizeCards text='„ალტას“ ვაუჩერი' />

      <div className='flex justify-center items-center gap-[0.85rem] mb-[2rem]'>
        <p className='font-semibold text-[1.3rem]'>TOP20 ლიდერბორდი ჰოლდემში</p>
        <img src={infoIcon} alt='Info icon' className='w-[2rem]' />
      </div>

      <Scrollbar />

      <PrizeCards />

      <div className='text-[1.3rem]'>
        <p>
          * ლიდერბორდის შედეგები განახლდება{' '}
          <span className='text-main_orange underline'>პოკერის ლობიში</span>
        </p>
        <p></p>
      </div>
    </Card>
  )
}

export default CashGame
