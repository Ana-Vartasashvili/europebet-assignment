import { arrowDownIcon, arrowUpIcon } from '@/assets'
import { useState } from 'react'

const DropdownItem = () => {
  const [textIsShown, setTextIsShown] = useState(false)

  return (
    <div>
      <div
        className='bg-background_black_shade_3 px-[1rem] py-[1.7rem] rounded-[0.8rem] flex items-center justify-between gap-4 cursor-pointer'
        onClick={() => setTextIsShown((prevState) => !prevState)}
      >
        <p className='text-gray_shade_4 leading-7'>
          როდის იწყება და რა ფორმატით გაიმართება აქცია
        </p>

        <img
          src={textIsShown ? arrowUpIcon : arrowDownIcon}
          alt='Arrow down icon'
          className='w-[1.4rem]'
        />
      </div>

      {textIsShown && (
        <div>
          <ul className='list-disc list-inside'>
            <li>
              აქცია დაიწყება 1 აპრილს 00:00 საათზე და დასრულდება 30 აპრილს 23:59
              საათზე.
            </li>
            <li>
              აქცია ჩატარდება სამ ეტაპად:
              <ul className='list-disc list-inside'>
                <li>Cash Game - 1 აპრილიდან 29 აპრილის ჩათვლით.</li>
                <li>Spring Series - 13 აპრილიდან 29 აპრილის ჩათვლით.</li>
                <li>Final Stage – 30 აპრილი.</li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropdownItem
