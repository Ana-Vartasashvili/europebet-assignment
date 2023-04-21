import { FinalTravelItemProps } from './types'

const FinalTravelItem: React.FC<FinalTravelItemProps> = ({ text, iconSrc }) => {
  return (
    <div className='flex items-center gap-[1.2rem] py-[1.2rem] px-[1.5rem] bg-background_black_shade_1 rounded-[1rem] md:px-[0.8rem] text-left'>
      <img src={iconSrc} alt='ticket' />
      <p className='text-[1.3rem]'>{text}</p>
    </div>
  )
}

export default FinalTravelItem
