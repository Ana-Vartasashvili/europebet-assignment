import { Card, FinalTravelItem } from '@/components'
import {
  finalItemEventIcon,
  finalItemHotelIcon,
  finalItemTicketIcon,
} from '@/assets'

const FinalTravelList = ({ discardItem = false }) => {
  return (
    <Card
      title='A კატეგორიის საგზურში შედის'
      styles='md:outline-none md:bg-background_black_shade_3 md:pb-[0.8rem]'
      childrenStyles='flex flex-col gap-[0.6rem] md:!px-[1.2rem]'
      headerStyles='md:mb-[0.8rem] md:text-[1.4rem] md:px-[1.9rem]'
    >
      <FinalTravelItem
        iconSrc={finalItemEventIcon}
        text='ორმხრივი ავიაბილეთი'
      />

      <FinalTravelItem
        iconSrc={finalItemHotelIcon}
        text='The Festival in Malta -ს მეინ ივენთის ბაი-ინი'
      />

      {!discardItem && (
        <FinalTravelItem
          iconSrc={finalItemEventIcon}
          text='Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი'
        />
      )}

      <FinalTravelItem iconSrc={finalItemTicketIcon} text='სასტუმრო' />

      <FinalTravelItem iconSrc={finalItemTicketIcon} text='€500 სახარჯი ფული' />
    </Card>
  )
}

export default FinalTravelList
