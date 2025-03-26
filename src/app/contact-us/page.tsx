import DisplayLayout from "@/components/layout";
import { Input } from "antd";
import Link from "next/link";

const ContactUsPage = () => {
    return (
        <div>
            <DisplayLayout theme="white">
                <>
                    <div className="px-20 pt-48 pb-10">
                        <h4 className="text-2xl mb-7">Let&apos;s work together.</h4>
                        <h3 className="text-6xl mb-7 font-medium">
                            Bring us a problem.
                        </h3>
                        <h3 className="text-6xl text-[#E63946] font-medium">
                            It&apos;s our favorite place to start.
                        </h3>
                        <div className="mt-28 border-y-2 border-solid border-black px-10 py-14">
                            <div className="flex justify-between gap-10">
                                <div>
                                    <h4 className="text-sm text-black flex items-center gap-2"><span className="bg-black size-3 rounded-full block"></span> Email address</h4>
                                    <div className="mt-4 flex flex-col gap-3">
                                        <Link href="" className="text-lg">eadelekeife@gmail.com</Link>
                                        <Link href="" className="text-lg">help@boxhedstudio.com</Link>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm text-black flex items-center gap-2"><span className="bg-black size-3 rounded-full block"></span> Phone number</h4>
                                    <div className="mt-4 flex flex-col gap-3">
                                        <Link href="" className="text-lg">eadelekeife@gmail.com</Link>
                                        <Link href="" className="text-lg">help@boxhedstudio.com</Link>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm text-black flex items-center gap-2"><span className="bg-black size-3 rounded-full block"></span> Email address</h4>
                                    <div className="mt-4 flex flex-col gap-3">
                                        <Link href="" className="text-lg">eadelekeife@gmail.com</Link>
                                        <Link href="" className="text-lg">help@boxhedstudio.com</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-10 py-14">
                            <h4 className="text-lg font-medium">You can also send us a mail directly</h4>
                            <form action="" className="mt-14">
                                <div className="grid grid-cols-2 gap-10 mb-5">
                                    <div className="form-group">
                                        <label htmlFor="">First name</label>
                                        <Input name="firstName" className="text-sm py-4" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Last name</label>
                                        <Input name="firstName" className="text-sm py-4" />
                                    </div>
                                </div>
                                <div className="form-group mb-5">
                                    <label htmlFor="">Email address</label>
                                    <Input name="email" type="email" className="text-sm py-4" />
                                </div>
                                <div className="form-group mb-5">
                                    <label htmlFor="">Phone number</label>
                                    <Input name="phone" className="text-sm py-4" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Message</label>
                                    <textarea name="message" id="" rows={5}></textarea>
                                </div>

                                <button className="bg-black py-5 text-sm text-white px-10 mt-20">Send us a mail</button>
                            </form>
                        </div>
                    </div>
                </>
            </DisplayLayout>
        </div>
    )
}

export default ContactUsPage;