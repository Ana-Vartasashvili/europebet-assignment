import { ScrollbarItem } from '@/components'
import { voucherIcon } from '@/assets'
import { ScrollbarProps } from './types'

const Scrollbar: React.FC<ScrollbarProps> = ({ withHeading = true }) => {
  return (
    <div>
      {withHeading && (
        <div className='flex justify-between mb-[1.6rem] text-gray_shade_2 text-[1.2rem] px-3 pr-12 xs:pr-24'>
          <p>ადგილი</p>
          <div className='flex gap-2 items-center  xs:-ml-20'>
            <img src={voucherIcon} alt='Voucher icon' />
            <p>ვაუჩერი</p>
          </div>
          <p>პრიზი</p>
        </div>
      )}

      <div
        className={`w-full h-[30rem] overflow-y-scroll pr-[0.9rem] scrollbar flex flex-col gap-1 mb-[2rem]`}
      >
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
        <ScrollbarItem />
        <ScrollbarItem />
        <ScrollbarItem />
      </div>
    </div>
  )
}

export default Scrollbar
