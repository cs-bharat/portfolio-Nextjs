"use client"
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import courceData from '@/data/projectData.json'


function ProjectSection() {
    return (
        <div className="w-full  dark:bg-black h-auto
                          dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl md:text-7xl font-bold text-center mb-3 mt-6 z-10 ">Projects</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
    
                    <div className="flex w-full flex-wrap justify-center max-w-7xl mx-auto items-center">
                        {/* temporary */}
                        {courceData.Projects.map((project) => (
                            <CardContainer className="inter-var ml-6 ">
                                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-neutral-600 dark:text-white"
                                    >
                                        {project.title}
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                    >
                                        {project.description}
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <Image
                                            src={project.image}
                                            height="1000"
                                            width="1000"
                                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                            alt="thumbnail"
                                        />
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-20">
                                        <CardItem
                                            translateZ={20}
                                            as={Link}
                                            href={project.links}
                                            target="__blank"
                                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                        >
                                            Visit Project →
                                        </CardItem>
                                        <CardItem
                                            translateZ={20}
                                            as={Link}
                                            href="https://github.com/cs-bharat"
                                            target="__blank"
                                            className="px-4 py-2 rounded-xl bg-black dark:bg-[#00b9bc] dark:text-black text-white text-xs font-bold"
                                        >
                                            GitHub
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        ))}
                    </div>
            </div>

        </div>
    )
}

export default ProjectSection
