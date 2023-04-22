import { arrowUpIcon } from '@/assets'
import { useState } from 'react'
import { DropdownItemProps } from './types'

const DropdownItem: React.FC<DropdownItemProps> = ({ text, children }) => {
  const [textIsShown, setTextIsShown] = useState(false)

  return (
    <div>
      <div
        className='bg-background_black_shade_3 px-[1.4rem] py-[1.7rem] rounded-[0.8rem] flex items-center justify-between gap-4 cursor-pointer ease-out duration-500'
        onClick={() => setTextIsShown((prevState) => !prevState)}
      >
        <p className='text-gray_shade_4 leading-7 md:text-white'>{text}</p>

        <img
          src={arrowUpIcon}
          alt='Arrow down icon'
          className={`w-[1.4rem] ${textIsShown ? 'rotate-180' : ''}`}
        />
      </div>

      {textIsShown && (
        <div className='mt-[2rem] ml-[2rem] leading-6 text-gray_shade_4 mb-[2rem]'>
          <ul className='list-disc marker:text-main_orange space-y-4 animate-fade-in list-outside'>
            {children}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropdownItem
