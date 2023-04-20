import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './styles.css'
import {
  sliderBannerCashback,
  sliderBannerCar,
  sliderBannerJackpot,
} from '@/assets'

const Slider = () => {
  return (
    <>
      <Swiper slidesPerView={'auto'} spaceBetween={15} className='mySwiper'>
        <SwiperSlide>
          <div className='h-[18rem]'>
            <img
              src={sliderBannerCashback}
              alt=''
              className='w-[15rem] h-[18rem] rounded-[0.5rem] object-cover'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-[18rem]'>
            <img
              src={sliderBannerCar}
              alt=''
              className='w-[15rem] h-[18rem] rounded-[0.5rem] object-cover'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-[18rem]'>
            <img
              src={sliderBannerJackpot}
              alt=''
              className='w-[15rem] h-[18rem] rounded-[0.5rem] object-cover'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-[18rem]'>
            <img
              src={sliderBannerCashback}
              alt=''
              className='w-[15rem] h-[18rem] rounded-[0.5rem] object-cover'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-[18rem]'>
            <img
              src={sliderBannerCar}
              alt=''
              className='w-[15rem] h-[18rem] rounded-[0.5rem] object-cover'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-[18rem]'>
            <img
              src={sliderBannerJackpot}
              alt=''
              className='w-[15rem] h-[18rem] rounded-[0.5rem] object-cover'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider
