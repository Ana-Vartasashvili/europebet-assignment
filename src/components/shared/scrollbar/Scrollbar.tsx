import { Children } from '@/types'

const Scrollbar = ({ children }: Children) => {
  return <div className='w-full min-h-[30rem]'>{children}</div>
}

export default Scrollbar
