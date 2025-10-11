import Image from "next/image"

interface ProjectImageProps{
    src: string
}

export default function ProjectImage(props: ProjectImageProps){
    return(
        <div className="block w-full">
            <Image
                src={props.src}
                width={1920}
                height={1080}
                alt="Project screenshot"
                className="w-full h-auto"
            />
        </div>
    )
}
