import { ScrollbarItemProps } from './types'

const ScrollbarItem: React.FC<ScrollbarItemProps> = ({
  place = '1',
  prize = 'A კატეგორიის საგზური',
  voucher,
  styles,
  description,
}) => {
  return (
    <div
      className={`rounded-full bg-background_black_shade_4 py-[1rem] pl-[1.3rem] pr-[1rem] flex items-center border-[2px] min-h-[4.5rem] border-gray_shade_1 text-[0.9rem] xs:text-[1rem] font-bold md:text-[1.3rem] md:py-[1.4rem] md:pl-[2rem] md:pr-[3.6rem] ${styles}`}
    >
      <div className='w-full text-start'>
        <span className='px-[0.9rem] py-[0.4rem] bg-gray_shade_1 rounded-full shadow-gray-shadow md:px-[1rem]'>
          {place}
        </span>
      </div>

      {voucher && <span className='text-center w-full '>{voucher}</span>}

      {prize && (
        <div>
          <span className='inline-block w-full text-end leading-tight'>
            {prize}
          </span>
        </div>
      )}

      {description && (
        <span className='inline-block w-32 xs:w-fit'>{description}</span>
      )}
    </div>
  )
}

export default ScrollbarItem
