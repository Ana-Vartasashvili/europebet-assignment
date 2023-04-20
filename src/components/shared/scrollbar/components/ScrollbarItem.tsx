import { ScrollbarItemProps } from './types'

const ScrollbarItem: React.FC<ScrollbarItemProps> = ({
  place = '1',
  prize = 'A კატეგორიის საგზური',
  voucher = '1 500 ₾',
}) => {
  return (
    <div className='rounded-full bg-background_black_shade_4 py-[1rem] px-[1.3rem] flex justify-between items-center border-[2px] border-gray_shade_1 text-[1rem] font-bold'>
      <span className='px-[0.9rem] py-[0.4rem] bg-gray_shade_1 rounded-full shadow-gray-shadow'>
        {place}
      </span>
      <span>{voucher}</span>
      <span className='inline-block w-32 xs:w-fit'>{prize}</span>
    </div>
  )
}

export default ScrollbarItem
