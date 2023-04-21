import { Card, FinalTicketItem } from '@/components'

const FinalTicketList = () => {
  return (
    <Card
      title='მოიგე საგზური 30 აპრილის ტურნირებზე'
      styles='mb-[2.4rem]'
      headerStyles='rounded-b-[1.6rem] md:rounded-b-[0rem]'
    >
      <div className='flex flex-col gap-[1rem] mb-[1rem] md:flex md:flex-row md:gap-[1.6rem] md:mb-[2rem]'>
        <div className='flex flex-col gap-[1rem] mb-[1rem] md:justify-between md:w-full md:mb-0 md:gap-[2rem]'>
          <FinalTicketItem title='„Holdem Grinders”' styles='md:flex-grow'>
            <p className='text-[1.3rem] md:text-[1.4rem]'>
              C კატეგორიის 1 საგზური
            </p>
          </FinalTicketItem>

          <FinalTicketItem title='„Cashgame Grinders”' styles='md:flex-grow'>
            <p className='text-[1.3rem] md:text-[1.4rem]'>1 საგზური</p>
          </FinalTicketItem>

          <FinalTicketItem title='„Tournament Sharks“ -' styles='md:flex-grow'>
            <p className='text-[1.3rem] md:text-[1.4rem]'>1 საგზური</p>
          </FinalTicketItem>
        </div>

        <div className='flex flex-col gap-[1rem] md:w-full md:gap-[2rem]'>
          <FinalTicketItem title='„The Festival in Malta, GTD“'>
            <p className='text-[1.3rem] md:text-[1.4rem] mb-[0.4rem]'>
              B კატეგორიის 1 საგზური
            </p>
            <p className='text-[1.3rem] md:text-[1.4rem] mb-[0.4rem]'>
              C კატეგორიის 1 საგზური
            </p>
            <p className='text-[1.3rem] md:text-[1.4rem]'>
              *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
              ბაი-ინის გადახდით.
            </p>
          </FinalTicketItem>

          <FinalTicketItem title='“Cashgame Sharks”'>
            <p className='text-[1.3rem] md:text-[1.4rem] mb-[0.4rem]'>
              C კატეგორიის 1 საგზური
            </p>
            <p className='text-[1.3rem] md:text-[1.4rem]'>
              *ტურნირზე მონაწილებას შეძლებენ მხოლოდ ევროპაბეთის ბეჭდის
              მფლობელები.
            </p>
          </FinalTicketItem>
        </div>
      </div>

      <p className='text-[1.3rem] mb-[1rem] md:[1.2rem]'>
        * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the Rings
        ტურნირზე მოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
      </p>
      <p className='text-[1.3rem]'>
        *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
        ბაი-ინის გადახდით.
      </p>
    </Card>
  )
}

export default FinalTicketList
