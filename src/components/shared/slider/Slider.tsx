import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './styles.css'
import {
  sliderBannerCashback,
  sliderBannerCar,
  sliderBannerJackpot,
} from '@/assets'
import { SliderItem } from './components'
import './components/styles.css'

const Slider = () => {
  return (
    <div>
      <h2 className='mb-[2.4rem] md:mb-[3.2rem] text-[1.6rem] md:text-[1.8rem]'>
        მსგავსი აქციები
      </h2>

      <Swiper slidesPerView='auto' spaceBetween={15} className='mySwiper'>
        <SwiperSlide>
          <SliderItem
            imgSrc={sliderBannerCashback}
            altText='Europebet cashback campaign banner'
            styles='blue-gradient'
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem
            imgSrc={sliderBannerCar}
            altText='Range Rover - europebet raffle prize'
            styles='orange-gradient'
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem
            imgSrc={sliderBannerJackpot}
            altText='Characters standing holding tickets for europebet raffle'
            styles='purple-gradient'
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem
            imgSrc={sliderBannerCashback}
            altText='Europebet cashback campaign banner'
            styles='blue-gradient'
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem
            imgSrc={sliderBannerCar}
            altText='Range Rover - europebet raffle prize'
            styles='orange-gradient'
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem
            imgSrc={sliderBannerJackpot}
            altText='Characters standing holding tickets for europebet raffle'
            styles='purple-gradient'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
