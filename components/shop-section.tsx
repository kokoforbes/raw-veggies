import Image from "next/image";
import { Button } from "./ui/button";

const ShopSection = () => {
  return (
    <div className='min-h-screen bg-[#12664F]'>
      <h1 className='text-[#96E072] text-5xl lg:text-[64px] font-bold text-center'>
        Shop
      </h1>
      <div className='flex flex-col gap-8 md:flex-row px-4 lg:px-16 py-16'>
        <Image src='/onion.png' alt='' width={400} height={444} />

        <Image src='/spinach.png' alt='' width={400} height={444} />

        <Image src='/tomatoes.png' alt='' width={400} height={444} />
      </div>
      <div>
        <h1 className='text-[#96E072] text-5xl lg:text-[64px] font-bold text-center max-w-[470px] mx-auto'>
          What People Are Saying About Us
        </h1>
        <p className='text-center text-white mt-4'>
          Here are a few testimonials from our satisfied customers:
        </p>
      </div>
      <div className='pb-20'>
        <h1 className='text-[#96E072] text-5xl lg:text-[64px] font-bold text-center max-w-[470px] mx-auto'>
          Join the Fresh Harvest Farms Family
        </h1>
        <p className='text-[#E8FCCF] mt-8 max-w-[500px] mx-auto text-center'>
          Discover the pleasure of farm-fresh vegetables that are as good for
          the planet as they are for you. At Fresh Harvest Farms, we are more
          than just a supplier — we are a community of food enthusiasts,
          passionate about bringing the best of nature to your table. Join us on
          this flavorful journey and experience the joy of savoring the very
          best that nature has to offer
        </p>
        <Button className='bg-[#D64933] text-[#E8FCCF] rounded-md '>
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default ShopSection;
