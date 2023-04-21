import { TournamentsItemProps } from './types'
import { tournamentBg2 } from '@/assets'

const TournamentsItem: React.FC<TournamentsItemProps> = ({
  imgSrc = tournamentBg2,
  altText = 'Tournament background with rings',
  tournamentName = 'Holdem Highrollers',
  price = 'ბაი-ინი - 550₾',
  prize = '50 000 ₾',
  date = '27 აპრილი',
  children,
  itemStyles,
  textStyles,
}) => {
  return (
    <div
      className={`w-full h-[8.5rem] md:h-[10.4rem] flex justify-center relative ${itemStyles}`}
    >
      {!children && (
        <img
          src={imgSrc}
          alt={altText}
          className='w-full xs:w-full md:w-full'
        />
      )}

      {children}

      <div
        className={`absolute top-1/2 -translate-y-1/2 left-8 w-[90%] xxs:w-[75%] ${textStyles}`}
      >
        <div className='text-[1.2rem] font-bold flex items-center justify-between mb-[0.5rem]'>
          <span
            className={` ${
              tournamentName === 'Main Events'
                ? 'md:text-[2.2rem]'
                : 'md:text-[1.5rem]'
            }`}
          >
            {tournamentName}
          </span>
          <span className='md:text-[1.3rem]'>{price}</span>
        </div>

        <div className='flex items-center justify-between'>
          <span
            className={`text-[2.2rem] text-yellow_shade_1 font-bold ${
              tournamentName === 'Main Events' ? 'md:text-[2.6rem]' : ''
            }`}
          >
            {prize}
          </span>
          <p
            className={`py-[0.4rem] px-[1.2rem] rounded-t-full rounded-l-full font-bold ${
              tournamentName === 'Main Events'
                ? 'bg-yellow_shade_2 text-green_shade_1 md:text-[1.6rem]'
                : 'bg-brown_shade_1'
            }`}
          >
            {date}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TournamentsItem
