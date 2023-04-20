import { Children } from '@/types'

const Scrollbar = ({ children }: Children) => {
  return (
    <div className='w-full h-[30rem] overflow-y-scroll pr-[0.9rem] scrollbar flex flex-col gap-1'>
      {children}
    </div>
  )
}

export default Scrollbar
