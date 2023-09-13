import Image from "next/image";
import Link from "next/link";

const SocialsSection = () => {
  return (
    <div className='bg-[#12664F] pb-12 '>
      <div className='rounded-md mx-4 lg:mx-16 border border-[#96E072] py-12 px-4'>
        <Image
          src='/brand-lg.svg'
          alt='raw veggies'
          width={652}
          height={108}
          className='mx-auto'
        />

        <p className='mx-auto text-white max-w-[421px] mt-4 text-center font-normal text-lg'>
          xperience the unparalleled taste and nutritional benefits of
          farm-fresh produce in every bite.
        </p>

        <div className='flex items-center flex-col gap-6 justify-center md:flex-row lg:gap-x-12 mt-16'>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/instagram.svg'
              width={56}
              height={56}
              alt='instagram'
            />
            <span className='text-white text-normal text-2xl'>Instagram</span>
          </Link>

          <Link href='/' className='flex items-center gap-2'>
            <Image src='/linkedin.svg' width={56} height={56} alt='linkedin' />
            <span className='text-white text-normal text-2xl'>Linkedin</span>
          </Link>

          <Link href='/' className='flex items-center gap-2'>
            <Image src='/facebook.svg' width={56} height={56} alt='facebook' />
            <span className='text-white text-normal text-2xl'>Facebook</span>
          </Link>

          <Link href='/' className='flex items-center gap-2'>
            <Image src='/envelope.svg' width={56} height={56} alt='email' />
            <span className='text-white text-normal text-2xl'>
              hello@freshveggies.com
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialsSection;
