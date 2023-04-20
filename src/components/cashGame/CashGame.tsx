import { Card, Scrollbar, ScrollbarItem, PrizeCard } from '@/components'
import {
  infoIcon,
  voucherIcon,
  travelIcon,
  ticketIcon,
  prizeIcon,
} from '@/assets'

const CashGame = () => {
  return (
    <Card title='1₾ რეიქი = 1 ქულას'>
      <div className='flex justify-center gap-[0.85rem] mb-[2rem]'>
        <p className='font-semibold text-[1.3rem]'>TOP20 ლიდერბორდი ჰოლდემში</p>
        <img src={infoIcon} alt='Info icon' className='w-[2rem]' />
      </div>

      <div className='flex justify-between mb-[1.6rem] text-gray_shade_2 text-[1.2rem] px-3 pr-12 xs:pr-24'>
        <p>ადგილი</p>
        <div className='flex gap-2 items-center  xs:-ml-20'>
          <img src={voucherIcon} alt='Voucher icon' />
          <p>ვაუჩერი</p>
        </div>
        <p>პრიზი</p>
      </div>

      <Scrollbar styles='mb-[2rem]'>
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
      </Scrollbar>

      <div className='flex flex-col gap-[0.8rem] mb-[1.8rem]'>
        <PrizeCard
          icon={travelIcon}
          altText='Plane icon'
          text='The Festival in Malta-ს საგზური'
        />
        <PrizeCard
          icon={ticketIcon}
          altText='Golden ticket icon'
          text='სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური'
        />
        <PrizeCard
          icon={prizeIcon}
          altText='Prize icon'
          text='„ალტას“ ვაუჩერი'
        />
      </div>

      <div className='flex justify-center gap-[0.85rem] mb-[2rem]'>
        <p className='font-semibold text-[1.3rem]'>TOP20 ლიდერბორდი ჰოლდემში</p>
        <img src={infoIcon} alt='Info icon' className='w-[2rem]' />
      </div>

      <div className='flex justify-between mb-[1.6rem] text-gray_shade_2 text-[1.2rem] px-3 pr-12 xs:pr-24'>
        <p>ადგილი</p>
        <div className='flex gap-2 items-center  xs:-ml-20'>
          <img src={voucherIcon} alt='Voucher icon' />
          <p>ვაუჩერი</p>
        </div>
        <p>პრიზი</p>
      </div>

      <Scrollbar styles='mb-[2rem]'>
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
      </Scrollbar>

      <div className='flex flex-col gap-[0.8rem] mb-[1.6rem]'>
        <PrizeCard
          icon={travelIcon}
          altText='Plane icon'
          text='The Festival in Malta-ს საგზური'
        />
        <PrizeCard
          icon={ticketIcon}
          altText='Golden ticket icon'
          text='სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური'
        />
        <PrizeCard
          icon={prizeIcon}
          altText='Prize icon'
          text='ტექნიკის მაღაზიის ვაუჩერი'
        />
      </div>

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
