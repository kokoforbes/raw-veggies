import Image from "next/image";
import { Card } from "./ui/card";

const ClassSection = () => {
  return (
    <div className='min-h-screen bg-[#12664F] pt-16 lg:pt-[160px]'>
      <h2 className='text-[#E8FCCF] text-2xl lg:text-5xl font-bold text-center max-w-[940px] mx-auto '>
        Our vegetables are commonly classified into the following classes
      </h2>

      <div className='mt-12 flex flex-col gap-4 items-center'>
        <Card className='bg-[#96E072] p-4 lg:p-16 flex flex-col md:flex-row md:items-center max-w-[1280px] border-0 sticky -top-1/3'>
          <div className='max-w-[534px]'>
            <h2 className='font-bold text-5xl lg:text-[64px] text-black'>
              Leafy Green Vegetables
            </h2>

            <p className='font-light mt-6 text-lg'>
              Indulge in the vibrant and refreshing world of leafy green
              vegetables. From delicate spinach to crunchy kale, these
              nutrient-packed greens add a burst of freshness to your meals.
              Whether you&apos;re looking to create a crisp salad or sautéed
              greens as a side dish, our selection of leafy greens will elevate
              your culinary creations.
            </p>
          </div>
          <div>
            <Image src='/leafy.png' alt='leafy' width={564} height={432} />
          </div>
        </Card>

        <Card className='bg-[#E8FCCF] p-4 lg:p-16 flex flex-col md:flex-row md:items-center max-w-[1280px] border-0'>
          <div className='max-w-[534px]'>
            <h2 className='font-bold text-5xl lg:text-[64px] text-black'>
              Cruciferous Vegetables
            </h2>

            <p className='font-light mt-6 text-lg'>
              Unlock a realm of robust flavors with our selection of cruciferous
              vegetables. From the versatile broccoli to the versatile
              cauliflower, these nutrient-dense vegetables are perfect for
              roasting, stir-frying, or incorporating into your favorite soups
              and stews. Dive into their earthy goodness and embrace their
              unique textures and tastes.
            </p>
          </div>
          <div>
            <Image
              src='/tomato.png'
              alt='cruciferous'
              width={564}
              height={432}
            />
          </div>
        </Card>

        <Card className='bg-[#D64933] p-4 lg:p-16 flex flex-col md:flex-row md:items-center max-w-[1280px] border-0'>
          <div className='max-w-[534px]'>
            <h2 className='font-bold text-5xl lg:text-[64px] text-[#E8FCCF]'>
              Root Vegetables
            </h2>

            <p className='font-light mt-6 text-[#E8FCCF] text-lg'>
              We are committed to providing you with the freshest vegetables
              possible. Our produce is carefully selected and harvested at the
              peak of ripeness to ensure optimal flavor, texture, and
              nutritional value. With FreshVeggieHub, you can savor the true
              taste of nature in every bite.
            </p>
          </div>
          <div>
            <Image src='/root.png' alt='root' width={564} height={432} />
          </div>
        </Card>

        <Card className='bg-[#FFFFFF] p-4 lg:p-16 flex flex-col md:flex-row md:items-center max-w-[1280px] border-0 sticky top-0'>
          <div className='max-w-[534px]'>
            <h2 className='font-bold text-5xl lg:text-[64px] text-[#12664F]'>
              Gourd Vegetables
            </h2>

            <p className='font-light mt-6 text-[#12664F] text-lg'>
              We are committed to providing you with the freshest vegetables
              possible. Our produce is carefully selected and harvested at the
              peak of ripeness to ensure optimal flavor, texture, and
              nutritional value. With FreshVeggieHub, you can savor the true
              taste of nature in every bite.
            </p>
          </div>
          <div>
            <Image src='/gourd.png' alt='gourd' width={564} height={432} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ClassSection;
