import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import AnouncementBar from "@/components/AnouncementBar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className='w-full relative bg-[#12664F] flex flex-col items-center'>
      <AnouncementBar />

      <div className='flex w-full h-[67px] items-center justify-between px-8 lg:px-16 container max-w-[1440px]'>
        <div className='flex items-center justify-between w-full'>
          <Image
            src='/brand.svg'
            alt='raw veggies'
            width={116}
            height={44}
            priority
          />
          <ul className='lg:flex gap-6  text-sm text-white hidden'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>About Us</Link>
            </li>
            <li>
              <Link href='/'>Shop</Link>
            </li>
            <li>
              <Link href='/'>Recipes</Link>
            </li>
            <li>
              <Link href='/'>Blog</Link>
            </li>
            <li>
              <Link href='/'>Contact Us</Link>
            </li>
          </ul>

          <div className='hidden lg:flex'>
            <Button>Login</Button>
          </div>
        </div>

        <Sheet>
          <SheetTrigger>
            <Menu className='md:hidden text-white' />
          </SheetTrigger>
          <SheetContent className='bg-[#12664F]'>
            <div className='mt-8'>
              <ul className='flex flex-col gap-6  text-sm text-white'>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/'>About Us</Link>
                </li>
                <li>
                  <Link href='/'>Shop</Link>
                </li>
                <li>
                  <Link href='/'>Recipes</Link>
                </li>
                <li>
                  <Link href='/'>Blog</Link>
                </li>
                <li>
                  <Link href='/'>Contact Us</Link>
                </li>
              </ul>
              <div className='mt-6'>
                <Button>Login</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className='flex flex-col gap-y-12 w-full md:flex-row md:justify-between mt-8 max-w-[1440px] mx-auto'>
        <div className='flex-1 px-8 lg:px-16 max-w-[605px] mt-8'>
          <h1 className='text-5xl lg:text-[64px] text-[#96E072] font-semibold leading-[60px]'>
            Discover the Fresh Food Revolution
          </h1>
          <p className='text-[#E8FCCF] mt-4 '>
            At Fresh Food Solutions, we believe in the power of fresh, wholesome
            food to transform lives. Explore our online store to discover a wide
            variety of fresh fruits, vegetables, and organic products.
          </p>

          <div className='flex mt-4 gap-4'>
            <Button className='bg-[#D64933] text-[#E8FCCF]'>
              Get Inspired
            </Button>
            <Button className='bg-[#E8FCCF] text-dark'>Shop Now</Button>
          </div>
        </div>
        <div className='flex-1'>
          <Image
            src='/lettuce.png'
            alt='raw veggies'
            width={602}
            height={708}
            className='lg:ml-auto'
          />
        </div>
      </div>

      <div className='mt-16 lg:mt-32 max-w-[1440px]'>
        <marquee width='100%' direction='left' height='179px'>
          <h1 className='text-[#96E072] text-9xl font-semibold'>
            Delivering Nature&apos;s Finest to Your Table
          </h1>
        </marquee>
      </div>

      <Image
        src='/veg.png'
        alt='raw veggies'
        width={1280}
        height={499}
        className='px-4 lg:px-16  py-16 lg:py-32'
      />
    </div>
  );
};

export default Navbar;
