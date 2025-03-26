import DisplayLayout from "@/components/layout";
import Link from "next/link";

const AboutUsPage = () => {
    return (
        <DisplayLayout theme="white">
            <>
                <div className="w-full pt-40">
                    <div className="px-20">
                        <div className="text-center">
                            <div>
                                <h2 className="w-[60%] mx-auto mb-5 text-6xl text-black leading-tight font-bold">
                                    Transforming visions <br /> into converting websites
                                </h2>
                                <p className="w-[60%] mx-auto text-lg text-black leading-loose md:leading-relaxed opacity-70 mb-8">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit autem incidunt harum nulla, quia, deleniti natus molestiae quibusdam, sint libero voluptas laborum optio. Rem sit modi porro corrupti aspernatur.
                                </p>
                                <div className="flex gap-4 justify-center">
                                    <Link href="/" className="bg-black px-8 py-4 text-sm text-white rounded-lg">Get project quote</Link>
                                    <Link href="/" className="bg-transparent px-8 py-4 text-sm text-black border-2 border-solid border-black rounded-lg">See our work</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#B4BDBC] w-full h-[32rem] mt-20"></div>
                        <div className="mt-20 mb-16">
                            <div className="grid grid-cols-2 gap-20 gap-y-1">
                                <div>
                                    <div className="size-16 rounded-xl border-2 mb-4 border-solid border-black"></div>
                                    <h4 className="text-2xl mb-3">Approach to Work</h4>
                                    <p className="mx-auto text-lg text-black leading-loose md:leading-relaxed opacity-70 mb-8">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit autem incidunt harum nulla, quia, deleniti natus molestiae quibusdam, sint libero voluptas laborum optio. Rem sit modi porro corrupti aspernatur.
                                    </p>
                                </div>
                                <div className="mt-20">
                                    <div className="size-16 rounded-xl border-2 mb-4 border-solid border-black"></div>
                                    <h4 className="text-2xl mb-3">Approach to Work</h4>
                                    <p className="mx-auto text-lg text-black leading-loose md:leading-relaxed opacity-70 mb-8">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit autem incidunt harum nulla, quia, deleniti natus molestiae quibusdam, sint libero voluptas laborum optio. Rem sit modi porro corrupti aspernatur.
                                    </p>
                                </div>
                                <div>
                                    <div className="size-16 rounded-xl border-2 mb-4 border-solid border-black"></div>
                                    <h4 className="text-2xl mb-3">Approach to Work</h4>
                                    <p className="mx-auto text-lg text-black leading-loose md:leading-relaxed opacity-70 mb-8">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit autem incidunt harum nulla, quia, deleniti natus molestiae quibusdam, sint libero voluptas laborum optio. Rem sit modi porro corrupti aspernatur.
                                    </p>
                                </div>
                                <div className="mt-20">
                                    <div className="size-16 rounded-xl border-2 mb-4 border-solid border-black"></div>
                                    <h4 className="text-2xl mb-3">Approach to Work</h4>
                                    <p className="mx-auto text-lg text-black leading-loose md:leading-relaxed opacity-70 mb-8">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit autem incidunt harum nulla, quia, deleniti natus molestiae quibusdam, sint libero voluptas laborum optio. Rem sit modi porro corrupti aspernatur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </DisplayLayout>
    )
}

export default AboutUsPage;