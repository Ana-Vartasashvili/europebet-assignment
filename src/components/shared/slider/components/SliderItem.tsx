import { SwiperSlide } from 'swiper/react'

const SliderItem = ({ imgSrc, altText }) => {
  return (
    <div className='h-[18rem]'>
      <img
        src={imgSrc}
        alt={altText}
        className='w-[15rem] h-[18rem] rounded-[0.5rem] md:w-[23rem] md:h-[27rem] object-cover'
      />
    </div>
  )
}

export default SliderItem
