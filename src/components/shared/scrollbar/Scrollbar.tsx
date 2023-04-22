import { ScrollbarItem } from '@/components'
import { voucherIcon } from '@/assets'
import { ScrollbarProps } from './types'
import { leaderBoardData } from '@/data'

const Scrollbar: React.FC<ScrollbarProps> = ({
  withHeading = true,
  listData = leaderBoardData,
  styles,
  scrollbarListStyles,
}) => {
  return (
    <div
      className={`md:bg-background_black_shade_3 md:pt-[3.2rem] md:pl-[3.2rem] md:pr-[1.2rem] md:pb-[2rem] md:rounded-[1.2rem] md:mb-[2.4rem] ${styles}`}
    >
      {withHeading && (
        <div className='flex items-center mb-[1.6rem] text-gray_shade_2 text-[1.2rem] px-3 pr-12 xs:pr-24 md:text-[1.3rem] md:pr-36'>
          <p className='w-full text-start'>ადგილი</p>
          <div className='flex gap-2 items-center w-full justify-center xs:pl-16'>
            <img src={voucherIcon} alt='Voucher icon' />
            <p>ვაუჩერი</p>
          </div>
          <p className='w-full text-end'>პრიზი</p>
        </div>
      )}

      <div
        className={`w-full h-[30rem] overflow-y-scroll pr-[0.9rem] scrollbar flex flex-col gap-1 mb-[2rem] md:mb-0 md:h-[32.2rem] ${scrollbarListStyles}`}
      >
        {listData.map((item) => {
          return (
            <ScrollbarItem
              place={item.place}
              voucher={item.voucher}
              prize={item.prize}
              description={item.description}
              key={item.place}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Scrollbar
