import { PrizeCardProps } from './types'

const PrizeCard: React.FC<PrizeCardProps> = ({ icon, text, altText }) => {
  return (
    <div className='flex items-center gap-[0.8rem] w-full bg-gray_shade_1 px-[1.6rem] py-[1.4rem] rounded-[1.4rem] relative md:bg-gray_shade_3 md:gap-[1.6rem] md:px-[1.8rem]'>
      <div className='w-[0.4rem] h-[40%] bg-main_orange shadow-orange-shadow absolute left-0 rounded-r-full md:h-[4.6rem]' />
      <img src={icon} alt={altText} className='md: md:h-[4.8rem]' />
      <p className='text-[1.3rem] text-left md:text-[1.5rem]'>{text}</p>
    </div>
  )
}

export default PrizeCard
