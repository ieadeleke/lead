"use client";

import { Drawer } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

import { CgMenuRight } from "react-icons/cg";
import { CgFacebook } from "react-icons/cg";
import { BsTwitterX } from "react-icons/bs";
import { TbBrandInstagram } from "react-icons/tb";


interface NavProps {
    theme?: string
}

const Navigation = (props: NavProps) => {

    const [fixedNav, setFixed] = useState(false);
    const [displayModal, setDisplayModal] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        });
    }, [])

    const toggleModalDisplay = () => setDisplayModal(!displayModal);

    return (
        <div className={`flex justify-between z-30 items-center fixed z-50 ${fixedNav ? "shadow-l bg-background" : "bg-transparent"} px-5 md:px-20 top-0 w-full py-5`}>
            <div className="logo flex items-center gap-1 md:gap-2">
                <div className="size-10 md:size-12 bg-primary rounded-xl"></div>
                <h3 className={`text-xl md:text-2xl font-bold ${props.theme === "white" ? "text-black" : "text-white"}`}>Boxhed Studio</h3>
            </div>
            <div>
                <ul className="flex">
                    <li>
                        <Link href="" className="px-5 py-3 text-sm text-white font-ClashRegular">Home
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="px-5 py-3 text-sm text-white font-ClashRegular">About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="px-5 py-3 text-sm text-white font-ClashRegular">Portolio
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="px-5 py-3 text-sm text-white font-ClashRegular">Gallery
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <ul className="flex gap-5">
                    <li>
                        <Link href="" className="text-sm text-white font-ClashRegular size-8 flex items-center justify-center bg-[#262626] rounded-full">
                            <CgFacebook />
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="text-sm text-white font-ClashRegular size-8 flex items-center justify-center bg-[#262626] rounded-full">
                            <BsTwitterX />
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="text-sm text-white font-ClashRegular size-8 flex items-center justify-center bg-[#262626] rounded-full">
                            <TbBrandInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="px-8 py-4 text-sm bg-accent text-white font-ClashRegular">Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
            {/* <div className="cursor-pointer" onClick={toggleModalDisplay}>
                <CgMenuRight className={`text-3xl text-main font-black ${props.theme === "white" ? "text-black" : "text-white"}`} />
            </div> */}
            <Drawer open={displayModal} onClose={toggleModalDisplay}>
                <div className="relative h-screen">
                    <div className="absolute bottom-20">
                        <ul className="flex flex-col gap-8">
                            <li className="">
                                <Link href="/" className="flex gap-3 items-center text-7xl font-bold">
                                    <span>01.</span>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="">
                                <Link href="/" className="flex gap-3 items-center text-7xl font-bold">
                                    <span>02.</span>
                                    <span>Who We Are</span>
                                </Link>
                            </li>
                            <li className="">
                                <Link href="/" className="flex gap-3 items-center text-7xl font-bold">
                                    <span>03.</span>
                                    <span>Portfolio</span>
                                </Link>
                            </li>
                            <li className="">
                                <Link href="/" className="flex gap-3 items-center text-7xl font-bold">
                                    <span>04.</span>
                                    <span>Contact Us</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="absolute top-8 right-10 cursor-pointer" onClick={toggleModalDisplay}>
                        <div className="border-2 border-solid border-black rounded-full size-16"></div>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Navigation;