import { Card, Scrollbar } from '@/components'
import { infoIcon } from '@/assets'

const CashGame = () => {
  return (
    <Card title='1₾ რეიქი = 1 ქულას'>
      <div className='flex justify-center gap-[0.85rem] mb-[2rem]'>
        <p className='font-semibold text-[1.3rem]'>TOP20 ლიდერბორდი ჰოლდემში</p>
        <img src={infoIcon} alt='Info icon' className='w-[2rem]' />
      </div>

      <Scrollbar>
        <div className='rounded-full bg-background_black_shade_4 py-[1rem] px-[1.3rem] justify-between'>
          <span>1</span>
          <span>1500₾</span>
          <span>A კატეგორიის საგზური</span>
        </div>
      </Scrollbar>
    </Card>
  )
}

export default CashGame
