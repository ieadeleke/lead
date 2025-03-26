import Image from "next/image";

import HeroImage from "@/assets/images/hero.svg";
import ArrowImage from "@/assets/images/arrow.svg";
import FlowerImage from "@/assets/images/flower.svg";
import BottomImage from "@/assets/images/bottom.svg";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Controller, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import DisplayLayout from "@/components/layout";
import Link from "next/link";

import Logo1 from "@/assets/images/logo1.avif";
import Logo2 from "@/assets/images/logo2.avif";
import Logo3 from "@/assets/images/logo3.avif";
import Logo4 from "@/assets/images/logo4.png";

import Work1 from "@/assets/images/work1.avif";
import Work2 from "@/assets/images/work2.avif";
import Work3 from "@/assets/images/work3.avif";
import Banner1 from "@/assets/images/banner.avif";

import { GoArrowUpRight } from "react-icons/go";


// import Logo4 from "@/assets/images/bg.png";


export default function Home() {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 1,
    },
  };
  return (
    <div>
      <DisplayLayout>
        <>
          <div className="hero-sect h-screen bg-black w-full relative">
            {/* <video src="/website.mp4" autoPlay muted loop></video> */}
          </div>
          <div>
            <div className="slider">
              <div className="slider-track">
                <div className="flex gap-[70px] items-center">
                  <div className="h-[10rem] w-[10rem] bg-white"></div>
                  <h5 className="text-white text-[10rem] uppercase">About Peak</h5>
                </div>
                <div className="flex gap-[70px] items-center">
                  <div className="h-[10rem] w-[10rem] bg-white"></div>
                  <h5 className="text-white text-[10rem] uppercase">About Peak</h5>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-40 w-[50%] mx-auto text-center">
              <h4 className="text-white text-[2.5rem] leading-loose md:leading-tight">
                Peak™ Founded in 2021, this agency focuses on building, launching, and revitalizing brands.
              </h4>
              <Link href="" className="mt-14 block text-center text-white uppercase">More About Us</Link>
              <div className="mt-32">
                <div className="grid grid-cols-4 gap-20 gap-y-10">
                  <div className="size-20 rounded-full bg-white rounded-full"></div>
                  <div className="size-20 rounded-full bg-white rounded-full"></div>
                  <div className="size-20 rounded-full bg-white rounded-full"></div>
                  <div className="size-20 rounded-full bg-white rounded-full"></div>
                  <div className="size-20 rounded-full bg-white rounded-full"></div>
                  <div className="size-20 rounded-full bg-white rounded-full"></div>
                  <div className="size-20 rounded-full bg-white rounded-full"></div>
                  <div className="size-20 rounded-full bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="mt-52">
              <div>
                <h3 className="uppercase text-white text-9xl text-center">
                  Selected &mdash; Work
                </h3>
                <div className="mt-40 px-52">
                  <div className="grid grid-cols-1.5/1 gap-5 mb-20">
                    <div>
                      <Image src={Work1} alt="work" width={0} height={0} className="w-full h-[32rem] object-cover object-centerd" />
                      <div className="flex justify-between items-center px-10 pt-7">
                        <h4 className="text-white text-3xl">
                          Creative Pulse
                        </h4>
                        <p className="text-[#7D7D7D] text-lg font-ClashMedium">UI, UX, Development</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-1/1.5 gap-5 mb-20">
                    <div></div>
                    <div>
                      <Image src={Work2} alt="work" width={0} height={0} className="w-full h-[32rem] object-cover object-centerd" />
                      <div className="flex justify-between items-center px-5 pt-5">
                        <h4 className="text-white text-3xl">
                          Creative Pulse
                        </h4>
                        <p className="text-[#7D7D7D] text-lg font-ClashMedium">UI, UX, Development</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-.5/1.5/1 gap-5">
                    <div></div>
                    <div>
                      <Image src={Work3} alt="work" width={0} height={0} className="w-full h-[32rem] object-cover object-centerd" />
                      <div className="flex justify-between items-center px-5 pt-5">
                        <h4 className="text-white text-3xl">
                          Creative Pulse
                        </h4>
                        <p className="text-[#7D7D7D] text-lg font-ClashMedium">UI, UX, Development</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="mt-52">
                <h3 className="uppercase text-white text-9xl text-center">
                  What we do
                </h3>
                <div className="mt-28 px-20">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="h-[23rem] flex items-center justify-center w-full border-b border-r border-solid border-[#4D4D4D] relative">
                      <div className="absolute right-5 top-5">
                        <div className="size-12 rounded-full border border-solid border-[#4D4D4D] flex items-center justify-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </div>
                      <h4 className="text-white text-5xl">Design</h4>
                    </div>
                    <div className="h-[23rem] flex items-center justify-center w-full border-b border-solid border-[#4D4D4D] relative">
                      <div className="absolute right-5 top-5">
                        <div className="size-12 rounded-full border border-solid border-[#4D4D4D] flex items-center justify-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </div>
                      <h4 className="text-white text-5xl">Design</h4>
                    </div>
                    <div className="h-[23rem] flex items-center justify-center w-full border-b border-r border-solid border-[#4D4D4D] relative">
                      <div className="absolute right-5 top-5">
                        <div className="size-12 rounded-full border border-solid border-[#4D4D4D] flex items-center justify-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </div>
                      <h4 className="text-white text-5xl">Design</h4>
                    </div>
                    <div className="h-[23rem] flex items-center justify-center w-full border-b border-solid border-[#4D4D4D] relative">
                      <div className="absolute right-5 top-5">
                        <div className="size-12 rounded-full border border-solid border-[#4D4D4D] flex items-center justify-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </div>
                      <h4 className="text-white text-5xl">Design</h4>
                    </div>
                  </div>
                </div>
              </div>.
              <div className="mt-36 px-8">
                <Image src={Banner1} alt="work" width={0} height={0} className="w-full h-[35rem] object-cover object-centerd" />
              </div>
            </div>
          </div>
          <div className="mb-20 mt-36">
            <div className="slider">
              <div className="slider-track">
                <div className="flex gap-[70px] items-center">
                  <div className="h-[10rem] w-[10rem] bg-white"></div>
                  <h5 className="text-white text-[10rem] uppercase">Let&apos;s Talk</h5>
                </div>
                <div className="flex gap-[70px] items-center">
                  <div className="h-[10rem] w-[10rem] bg-white"></div>
                  <h5 className="text-white text-[10rem] uppercase">Let&apos;s Talk</h5>
                </div>
              </div>
            </div>
          </div>
        </>
      </DisplayLayout>
    </div >
  );
}
