import { SliderItemProps } from './types'

const SliderItem: React.FC<SliderItemProps> = ({ imgSrc, altText, styles }) => {
  return (
    <div className='w-[15rem] h-[18rem] relative md:w-[23rem] md:h-[27rem] cursor-grab'>
      <img src={imgSrc} alt={altText} />

      <div
        className={`h-[9rem] w-full absolute bottom-0 rounded-b-[0.5rem] px-[1.4rem] leading-5 pb-[1.6rem] pt-[2.8rem] md:h-[13rem] flex flex-col justify-end md:pb-[2.4rem] ${styles}`}
      >
        <p className='mb-[0.8rem] text-[1.2rem] line-clamp-1 md:text-[1.4rem] md:font-bold'>
          Get 300% Cashback
        </p>
        <p className='text-[1.1rem] line-clamp-2 md:text-[1.4rem]'>
          retrieve 300% bet amount as real money only here
        </p>
      </div>
    </div>
  )
}

export default SliderItem
