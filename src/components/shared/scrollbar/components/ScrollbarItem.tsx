import { ScrollbarItemProps } from './types'
import { ticketIconSm, planeIcon } from '@/assets'

const ScrollbarItem: React.FC<ScrollbarItemProps> = ({
  place,
  prize,
  voucher,
  description,
}) => {
  return (
    <div
      className={`rounded-full bg-background_black_shade_4 py-[1rem] pl-[1.3rem] pr-[1rem] flex items-center border-[2px] min-h-[4.5rem] md:min-h-fit border-gray_shade_1 text-[0.9rem] xs:text-[1rem] font-bold md:text-[1.3rem] md:pt-[1.4rem] md:pb-[1.4rem] md:pl-[2rem] md:pr-[3.6rem] ${
        !voucher && 'gap-[1.2rem] md:gap-[2rem] font-normal'
      }`}
    >
      <div className={`text-start ${!voucher ? 'w-auto' : 'w-full'}`}>
        <span className='text-[0.9rem] md:text-[1.2rem] w-[2.4rem] h-[2.4rem] md:w-[3rem] md:h-[3rem] bg-gray_shade_1 rounded-full shadow-gray-shadow flex justify-center items-center leading-tight'>
          {place}
        </span>
      </div>

      {voucher && <span className='text-center w-full '>{voucher}</span>}

      {prize && (
        <div className='w-full flex items-center gap-2 justify-end'>
          <img
            src={prize.includes('საგზური') ? planeIcon : ticketIconSm}
            alt=''
            className='w-[1.4rem] md:w-[1.6rem]'
          />
          <span className='text-center xs:text-end leading-tight'>{prize}</span>
        </div>
      )}

      {description && <span className='text-start'>{description}</span>}
    </div>
  )
}

export default ScrollbarItem
