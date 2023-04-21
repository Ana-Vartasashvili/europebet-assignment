import { finalInfoImg } from '@/assets'
import { Card, FinalTravelItem } from '@/components'
import { finalItemEventIcon } from '@/assets'

const FinalStage = () => {
  return (
    <div>
      <div className='bg-background_black_shade_2 border-4 border-background_black_shade_3 p-[2rem] rounded-[1.6rem]'>
        <img
          src={finalInfoImg}
          alt='Malta'
          className='rounded-[1.6rem]  w-full xxs:h-[20rem] object-cover md:h-auto mx-auto mb-[1.7rem]'
        />

        <div className='text-center md:w-[90%] mx-auto'>
          <p className='text-[1.3rem] mb-[1rem] uppercase md:text-[1.4rem] md:font-bold'>
            გაემგზავრე The Festival in Malta-ზე!
          </p>
          <p className='text-[1.4rem] mb-[2rem] md:font-bold'>
            The Festival Series ტურნირების ფარგლებში, ევროპაბეთი უკვე მეორედ
            აძლევს პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
          </p>
        </div>

        <div className='flex items-center gap-[0.8rem] w-full bg-gray_shade_1 px-[1.6rem] py-[1.4rem] rounded-[0.8rem] relative  md:gap-[1.6rem] md:px-[1.8rem] mb-[2rem] md:max-w-fit md:mx-auto'>
          <div className='w-[0.4rem] h-[75%] bg-main_orange shadow-orange-shadow absolute left-0 rounded-r-full' />
          <p className='text-[1.4rem] font-bold text-left md:text-[1.5rem]'>
            15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
          </p>
        </div>

        <Card title='A კატეგორიის საგზურში შედის'>
          <FinalTravelItem />
        </Card>
      </div>
    </div>
  )
}

export default FinalStage
