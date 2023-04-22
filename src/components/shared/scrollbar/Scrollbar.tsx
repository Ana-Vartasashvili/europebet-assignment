import { ScrollbarItem } from '@/components'
import { voucherIcon } from '@/assets'
import { ScrollbarProps } from './types'

const leaderBoardData = [
  { place: '1', prize: 'A კატეგორიის საგზური', voucher: '--' },
  { place: '2', prize: 'B კატეგორიის საგზური', voucher: '--' },
  { place: '3', prize: 'სპეც. ტურნირის ბილეთი', voucher: '1500 ₾' },
  { place: '4', prize: 'სპეც. ტურნირის ბილეთი', voucher: '1200 ₾' },
  { place: '5', prize: 'სპეც. ტურნირის ბილეთი', voucher: '1000 ₾' },
  { place: '6', prize: 'სპეც. ტურნირის ბილეთი', voucher: '800 ₾' },
  { place: '7', prize: 'სპეც. ტურნირის ბილეთი', voucher: '700 ₾' },
  { place: '8', prize: 'სპეც. ტურნირის ბილეთი', voucher: '600 ₾' },
  { place: '9', prize: 'სპეც. ტურნირის ბილეთი', voucher: '500 ₾' },
  { place: '10', prize: 'სპეც. ტურნირის ბილეთი', voucher: '300 ₾' },
  { place: '11-20', prize: 'სპეც. ტურნირის ბილეთი', voucher: '--' },
]

const Scrollbar: React.FC<ScrollbarProps> = ({
  withHeading = true,
  children,
}) => {
  return (
    <div className='md:bg-background_black_shade_3 md:pt-[3.2rem] md:pl-[3.2rem] md:pr-[1.2rem] md:pb-[2rem] md:rounded-[1.2rem] md:mb-[2.4rem]'>
      {withHeading && (
        <div className='flex justify-between mb-[1.6rem] text-gray_shade_2 text-[1.2rem] px-3 pr-12 xs:pr-24 md:text-[1.3rem] md:pr-36'>
          <p>ადგილი</p>
          <div className='flex gap-2 items-center  xs:-ml-20 md:-ml-36'>
            <img src={voucherIcon} alt='Voucher icon' />
            <p>ვაუჩერი</p>
          </div>
          <p>პრიზი</p>
        </div>
      )}

      <div
        className={`w-full h-[30rem] overflow-y-scroll pr-[0.9rem] scrollbar flex flex-col gap-1 mb-[2rem] md:mb-0`}
      >
        {leaderBoardData.map((item) => {
          return (
            <ScrollbarItem
              place={item.place}
              voucher={item.voucher}
              prize={item.prize}
              key={item.place}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Scrollbar
