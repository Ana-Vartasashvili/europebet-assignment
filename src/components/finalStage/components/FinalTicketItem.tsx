import { FinalTicketItemProps } from './types'
import { pokerItemTickerIcon } from '@/assets'

const FinalTicketItem: React.FC<FinalTicketItemProps> = ({
  title,
  children,
  styles,
}) => {
  return (
    <div
      className={`py-[2rem] pl-[2rem] pr-[1.1rem] bg-background_black_shade_4 text-start rounded-[1.2rem] relative md:pt[2.8rem] md:pl-[2.8rem] ${styles}`}
    >
      <img
        src={pokerItemTickerIcon}
        alt='Flight tickets icon'
        className='absolute top-0 right-6 md:w-[7.8rem]'
      />
      <p className='text-[1.5rem] font-bold mb-[0.5rem] md:text-[1.6rem]'>
        {title}
      </p>

      {children}
    </div>
  )
}

export default FinalTicketItem
