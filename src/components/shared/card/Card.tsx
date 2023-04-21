import { CardProps } from './types'

const Card: React.FC<CardProps> = ({
  children,
  title,
  styles,
  childrenStyles,
  headerStyles,
}) => {
  return (
    <div
      className={`w-full bg-background_black_shade_3 rounded-[1.6rem] text-center pb-[1.8rem] md:pb-[2.4rem] md:bg-background_black_shade_2 md:outline md:-outline-offset-4 md:outline-4 md:outline-background_black_shade_3 md:rounded-[2rem] ${styles}`}
    >
      <div
        className={`bg-gray_shade_1 py-[2.3rem] rounded-t-[1.6rem] text-[1.6rem] font-bold text-center relative mb-[1.5rem] md:mb-[2rem] px-[2rem] ${headerStyles}`}
      >
        <div className='orange-line' />

        {title}
      </div>

      <div className={`w-full px-[1.4rem] md:px-[2.4rem] ${childrenStyles}`}>
        {children}
      </div>
    </div>
  )
}

export default Card
