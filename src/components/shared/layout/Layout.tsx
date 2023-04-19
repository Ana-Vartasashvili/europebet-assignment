import logo from '../../../assets/icons/logo.png'
import banner from '../../../assets/images/banner.jpg'

const Layout = () => {
  return (
    <div
      className={
        "bg-[url('../../../../public/assets/background.jpg')] h-screen w-screen bg-no-repeat bg-center bg-cover text-white text-[1.5rem]"
      }
    >
      <div className='w-full h-full bg-background_black_shade_1 pt-[10.4rem] font-Helvetica-Neue-55'>
        <div className='flex justify-between px-[1.6rem]'>
          <img src={logo} alt='Europebet logo' className='h-[2.4rem]' />

          <div className='flex gap-[1.6rem] font-semibold'>
            <button>Sign up</button>
            <button className='bg-main_orange py-[0.6rem] px-[1.2rem] rounded-[5px]'>
              Sign in
            </button>
          </div>
        </div>

        <div className='mb-[1.6rem]'>
          <img
            src={banner}
            alt='Europebet poker legends banner'
            className='w-full h-auto object-cover min-h-[21rem]'
          />
        </div>

        <div className='w-full px-[1.6rem]'>
          <div className='flex gap-[0.8rem] mb-[1.6rem] items-center'>
            <p className='text-[1.2rem] px-[1rem] py-[0.4rem] rounded-[15px] bg-background_black_shade_3'>
              სლოტები
            </p>
            <p className='opacity-90'>10 სექტემბერი - 7 ნოემბერი</p>
          </div>

          <p className='text-[1.6rem] mb-[1.4rem] font-semibold'>
            მოიპოვე 10 საგზურიდან ერთ-ერთი
          </p>
          <p className='text-[1.4rem] opacity-90 mb-[2rem]'>
            მოხვდი პოკერის ფესტივალზე მალტაში
          </p>

          <div className='w-full bg-gray_shade_1 py-[2.2rem] flex items-center justify-between px-[0.8rem] rounded-[0.8rem] mb-[3rem]'>
            <div className='flex flex-col items-center gap-[0.9rem]'>
              <p className='text-[1.1rem]'>28 ოქტ. - 7 ნოემ.</p>
              <p className='font-bold'>Cash Games</p>
            </div>

            <div className='flex flex-col items-center gap-[0.9rem]'>
              <p className='text-[1.1rem]'>28 ოქტ. - 7 ნოემ.</p>
              <p className='font-bold'>Cash Games</p>
            </div>

            <div className='flex flex-col items-center gap-[0.9rem]'>
              <p className='text-[1.1rem]'>28 ოქტ. - 7 ნოემ.</p>
              <p className='font-bold'>Cash Games</p>
            </div>
          </div>
        </div>

        <div className='bg-background_black_shade_2 py-[1.4rem] w-full fixed bottom-0 left-0 flex justify-center items-center border-t-[0.35rem] border-t-main_orange'>
          <button className='bg-main_orange px-[3.5rem] py-[0.7rem] rounded-[5px]'>
            ითამაშე
          </button>
        </div>
      </div>
    </div>
  )
}

export default Layout
