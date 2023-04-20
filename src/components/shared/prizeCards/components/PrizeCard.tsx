import { PrizeCardProps } from './types'

const PrizeCard: React.FC<PrizeCardProps> = ({ icon, text, altText }) => {
  return (
    <div className='flex items-center gap-[0.8rem] w-full bg-gray_shade_1 px-[1.6rem] py-[1.4rem] rounded-[1.4rem] relative'>
      <div className='w-[0.4rem] h-[2.8rem] bg-main_orange shadow-orange-shadow absolute left-0 rounded-r-full' />
      <img src={icon} alt={altText} />
      <p className='text-[1.3rem] text-left'>{text}</p>
    </div>
  )
}

export default PrizeCard
