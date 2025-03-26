'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import LogoImg from "@/assets/images/logo.svg";

const Footer = () => {
    const [currYear] = useState(new Date().getFullYear());
    return (
        <div>
            <div className="text-center">
                <Image src={LogoImg} alt="work" width={0} height={0} className="w-auto h-[5rem] mx-auto" />
                <div className="mt-16 w-max mx-auto">
                    <ul className="flex flex-col md:flex-row gap-3">
                        <li>
                            <Link href="" className="px-5 py-3 text-sm bg-[#262626] rounded-full text-white font-ClashRegular">Home
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="px-5 py-3 text-sm bg-[#262626] rounded-full text-white font-ClashRegular">About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="px-5 py-3 text-sm bg-[#262626] rounded-full text-white font-ClashRegular">Work
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="px-5 py-3 text-sm bg-[#262626] rounded-full text-white font-ClashRegular">Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="px-5 py-3 text-sm bg-[#262626] rounded-full text-white font-ClashRegular">Home
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mt-16 w-max mx-auto">
                    <button className="text-sm text-[#d9dae2] uppercase">Back to Top</button>
                    <div className="flex gap-2 flex-col md:flex-row mt-5 pb-10">
                        <button className="text-sm text-[#d9dae2] uppercase">Copyright © peak — powered by Webflow</button>
                        <button className="text-sm text-[#d9dae2] uppercase">Style Guide</button>
                        <button className="text-sm text-[#d9dae2] uppercase">Licensing</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;