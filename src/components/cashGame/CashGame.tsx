import { Card, Scrollbar, ScrollbarItem } from '@/components'
import { infoIcon, voucherIcon } from '@/assets'

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

      <Scrollbar>
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
    </Card>
  )
}

export default CashGame
