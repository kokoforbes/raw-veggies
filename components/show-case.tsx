import Image from "next/image";

const ShowCase = () => {
  return (
    <div className='min-h-screen bg-[#E8FCCF] pt-8 relative px-4 lg:px-16'>
      <h1 className='mx-auto max-w-[770px] text-[#D64933] text-5xl lg:text-[64px] leading-[56px] font-bold text-center'>
        Discover the Fresh Harvest Farms Difference
      </h1>

      <div className='flex flex-col gap-8 md:flex-row mt-16 lg:mt-36'>
        <div>
          <h2 className='text-[#12664F] font-bold text-xl mb-2'>
            Uncompromising Quality:
          </h2>
          <p className='text-black'>
            From the vibrant hues of our ripe tomatoes to the crisp freshness of
            our leafy greens, every vegetable we deliver reflects our commitment
            to excellence.
          </p>
        </div>
        <div>
          <h2 className='text-[#12664F] font-bold text-xl mb-2'>
            Farm-to-Table Freshness
          </h2>
          <p>
            With Fresh Harvest Farms, you can enjoy the true taste of nature. We
            work directly with local farmers who share our dedication to
            sustainable agriculture and ethical practices.
          </p>
        </div>
        <div>
          <h2 className='text-[#12664F] font-bold text-xl mb-2'>
            Convenience at Your Fingertips
          </h2>
          <p>
            We understand the demands of modern life. That&apos;s why we&apos;ve
            made it effortless for you to access our exceptional vegetables.
            Simply browse our online store, select your favorites, and leave the
            rest to us.
          </p>
        </div>
      </div>

      <div>
        <Image
          src='/onions.png'
          alt='raw veggies'
          width={944}
          height={957}
          className='mx-auto'
        />
      </div>
    </div>
  );
};

export default ShowCase;
