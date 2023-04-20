import { ScrollbarProps } from './types'

const Scrollbar: React.FC<ScrollbarProps> = ({ children, styles }) => {
  return (
    <div
      className={`w-full h-[30rem] overflow-y-scroll pr-[0.9rem] scrollbar flex flex-col gap-1 ${styles}`}
    >
      {children}
    </div>
  )
}

export default Scrollbar
