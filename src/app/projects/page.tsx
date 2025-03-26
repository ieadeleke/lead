import DisplayLayout from "@/components/layout";
import { Input } from "antd";
import Link from "next/link";

const ProjectsPage = () => {
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
                        <div className="mt-20 pb-12">
                            <div className="grid grid-cols-2 gap-10">
                                <div className="">
                                    <div className="w-full h-[25rem] bg-black mb-3 rounded-xl"></div>
                                    <h4 className="text-base">Hollandia Yoghurt</h4>
                                </div>
                                <div className="">
                                    <div className="w-full h-[25rem] bg-black mb-3 rounded-xl"></div>
                                    <h4 className="text-base">Hollandia Yoghurt</h4>
                                </div>
                                <div className="">
                                    <div className="w-full h-[25rem] bg-black mb-3 rounded-xl"></div>
                                    <h4 className="text-base">Hollandia Yoghurt</h4>
                                </div>
                                <div className="">
                                    <div className="w-full h-[25rem] bg-black mb-3 rounded-xl"></div>
                                    <h4 className="text-base">Hollandia Yoghurt</h4>
                                </div>
                                <div className="">
                                    <div className="w-full h-[25rem] bg-black mb-3 rounded-xl"></div>
                                    <h4 className="text-base">Hollandia Yoghurt</h4>
                                </div>
                                <div className="">
                                    <div className="w-full h-[25rem] bg-black mb-3 rounded-xl"></div>
                                    <h4 className="text-base">Hollandia Yoghurt</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </DisplayLayout>
        </div>
    )
}

export default ProjectsPage;