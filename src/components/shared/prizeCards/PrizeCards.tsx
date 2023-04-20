import { PrizeCard } from '@/components'
import { travelIcon, ticketIcon, prizeIcon } from '@/assets'
import { PrizeCardsProps } from './types'

const PrizeCards: React.FC<PrizeCardsProps> = ({ text, styles }) => {
  return (
    <div
      className={`flex flex-col gap-[0.8rem] mb-[1.8rem] md:bg-background_black_shade_3 md:py-[2rem] md:px-[2.4rem] md:rounded-[1.6rem] md:mb-[2.6rem] ${styles}`}
    >
      <PrizeCard
        icon={travelIcon}
        altText='Plane icon'
        text='The Festival in Malta-ს საგზური'
      />
      <PrizeCard
        icon={ticketIcon}
        altText='Golden ticket icon'
        text='სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური'
      />
      <PrizeCard
        icon={prizeIcon}
        altText='Prize icon'
        text={`${text ? text : 'ტექნიკის მაღაზიის ვაუჩერი'}`}
      />
    </div>
  )
}

export default PrizeCards
