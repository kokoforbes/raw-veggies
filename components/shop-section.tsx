import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const ShopSection = () => {
  return (
    <div className='min-h-screen bg-[#12664F] pt-20'>
      <h1 className='text-[#96E072] text-5xl lg:text-[64px] font-medium text-center'>
        Shop
      </h1>
      <div className='flex flex-col gap-8 md:flex-row px-4 lg:px-16 py-16 md:justify-center'>
        <Image src='/onion.png' alt='' width={400} height={444} />

        <Image src='/spinach.png' alt='' width={400} height={444} />

        <Image src='/tomatoes.png' alt='' width={400} height={444} />
      </div>
      <div>
        <h1 className='text-[#96E072] text-5xl lg:text-[64px] font-medium text-center max-w-[770px] mx-auto'>
          What People Are Saying About Us
        </h1>
        <p className='text-center text-white mt-6'>
          Here are a few testimonials from our satisfied customers:
        </p>

        <div className='mt-16 mb-24 flex flex-col md:flex-row gap-6 justify-center'>
          <Card className='bg-[#E8FCCF]  w-full md:w-[758px] flex flex-col justify-center items-center p-4 gap-4 rounded-2xl'>
            <Image
              src='/quotes.svg'
              alt='quote'
              width={48}
              height={48}
              className='mx-auto'
            />

            <p className='text-center max-w-[514px] font-normal text-lg'>
              FreshVeggieHub has completely transformed the way I eat and cook.
              The quality of their vegetables is unmatched, and it has made a
              noticeable difference in the taste and texture of my dishes.
            </p>

            <Image
              src='/sarah.png'
              alt='image'
              width={80}
              height={80}
              className='mx-auto rounded'
            />

            <h1 className='text-[#12664F] font-medium text-3xl'>Sarah D.</h1>
          </Card>

          <Card className='bg-[#E8FCCF] w-full md:w-[758px] flex flex-col justify-center items-center p-4 gap-4 rounded-2xl'>
            <Image
              src='/quotes.svg'
              alt='quote'
              width={48}
              height={48}
              className='mx-auto'
            />

            <p className='text-center max-w-[514px] font-normal text-lg'>
              I love the convenience of FreshVeggieHub. As a working
              professional, I don&apos;t always have time to go grocery
              shopping. Their delivery service ensures that I have fresh
              vegetables on hand whenever I need them.
            </p>

            <Image
              src='/john.png'
              alt='image'
              width={80}
              height={80}
              className='mx-auto rounded'
            />

            <h1 className='text-[#12664F] font-medium text-3xl'>John M.</h1>
          </Card>

          <Card className='bg-[#E8FCCF]  w-full md:w-[758px] flex flex-col justify-center items-center p-4 gap-4 rounded-2xl'>
            <Image
              src='/quotes.svg'
              alt='quote'
              width={48}
              height={48}
              className='mx-auto'
            />

            <p className='text-center max-w-[514px] font-normal text-lg'>
              FreshVeggieHub&apos;s commitment to sustainability aligns
              perfectly with my values. I feel good knowing that I am supporting
              local farmers and contributing to a more environmentally friendly
              food system while enjoying delicious and fresh vegetables.
            </p>

            <Image
              src='/sarah.png'
              alt='image'
              width={80}
              height={80}
              className='mx-auto rounded'
            />

            <h1 className='text-[#12664F] font-medium text-3xl'>Emily R.</h1>
          </Card>
        </div>
      </div>
      <div className='pb-20 flex flex-col items-center'>
        <h1 className='text-[#96E072] text-5xl lg:text-[64px] font-medium text-center max-w-[770px] mx-auto'>
          Join the Fresh Harvest Farms Family
        </h1>
        <p className='text-[#E8FCCF] mt-8 max-w-[500px] mx-auto text-center font-light text-lg'>
          Discover the pleasure of farm-fresh vegetables that are as good for
          the planet as they are for you. At Fresh Harvest Farms, we are more
          than just a supplier — we are a community of food enthusiasts,
          passionate about bringing the best of nature to your table. Join us on
          this flavorful journey and experience the joy of savoring the very
          best that nature has to offer
        </p>
        <Button className='bg-[#D64933] text-[#E8FCCF] rounded-md mt-8'>
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default ShopSection;
