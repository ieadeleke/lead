'use client';

import Link from "next/link";
import { useState } from "react";

const Footer = () => {
    const [currYear] = useState(new Date().getFullYear());
    return (
        <div className="bg-black pt-28 pb-20 px-20">
            <div className="flex justify-between border-b-2 border-solid border-[#E0E0E0] pb-16">
                <div>
                    <h4 className="text-white text-2xl uppercase">Work with us</h4>
                </div>
                <div>
                    <Link href="" className="text-white text-2xl uppercase">work@boxhedstudio.com</Link>
                </div>
            </div>
            <div className="mt-16">
                <div className="flex gap-32">
                    <div>
                        <h5 className="text-white text-base mb-5">Site map</h5>
                        <ul className="flex flex-col gap-5">
                            <Link className="text-white text-sm font-medium opacity-70" href="/">Home</Link>
                            <Link className="text-white text-sm font-medium opacity-70" href="/">About Us</Link>
                            <Link className="text-white text-sm font-medium opacity-70" href="/">Our Portfolio</Link>
                            <Link className="text-white text-sm font-medium opacity-70" href="/">Reach Out To Us</Link>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white text-base mb-5">Social Links</h5>
                        <ul className="flex flex-col gap-5">
                            <Link className="text-white text-sm font-medium opacity-70" href="/">Twitter</Link>
                            <Link className="text-white text-sm font-medium opacity-70" href="/">Instagram</Link>
                            <Link className="text-white text-sm font-medium opacity-70" href="/">Behance</Link>
                            <Link className="text-white text-sm font-medium opacity-70" href="/">LinkedIn</Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <h3 className="text-9xl font-medium text-white flex items-start gap-10">Boxhed Studio <span className="text-5xl">&copy;</span></h3>
            </div>
            {/* <div className="flex justify-between pt-20 hidden md:block">
                <div>

                </div>
                <div>
                    <p className="">Developed with love in Lagos Nigeria by <Link className="" href="">ieadeleke</Link></p>
                </div>
            </div> */}
        </div>
    )
}

export default Footer;