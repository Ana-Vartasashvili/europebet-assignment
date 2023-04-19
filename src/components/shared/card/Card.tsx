import { CardProps } from './types'

const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className='w-full bg-background_black_shade_3 rounded-[1.6rem]'>
      <div className='bg-gray_shade_1 py-[2.4rem] rounded-t-[1.6rem] text-[1.6rem] font-bold text-center relative'>
        <div className='absolute top-0 h-[0.4rem] w-[12.5rem] left-1/2 -translate-x-1/2 bg-main_orange rounded-b-full shadow-orange-shadow md:w-[25rem]'></div>
        {title}
      </div>

      {children}
    </div>
  )
}

export default Card
