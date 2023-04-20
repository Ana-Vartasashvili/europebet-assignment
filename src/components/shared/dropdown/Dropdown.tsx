import { DropdownItem } from '@/components'

const Dropdown = () => {
  return (
    <div>
      <h3 className='text-[1.6rem] mb-[2.1rem]'>წესები და პირობები</h3>

      <div className='flex flex-col gap-3'>
        <DropdownItem />
        <DropdownItem />
        <DropdownItem />
      </div>
    </div>
  )
}

export default Dropdown
