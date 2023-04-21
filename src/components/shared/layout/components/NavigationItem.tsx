import { NavigationItemProps } from './types'

const NavigationItem: React.FC<NavigationItemProps> = ({
  date,
  title,
  onClick,
  activeComponent,
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-[0.9rem] md:gap-[0.4rem] w-full h-full  rounded-[0.8rem] py-[2.2rem] text-center ${
        activeComponent === title
          ? 'bg-main_orange scale-y-[1.15] px-[1.2rem]'
          : ''
      }`}
      onClick={() => onClick(title)}
    >
      <p className='text-[1rem]  md:text-[1.4rem]'>{date}</p>
      <p className='font-bold  text-[1.2rem] md:text-[1.4rem]'>{title}</p>
    </div>
  )
}

export default NavigationItem
