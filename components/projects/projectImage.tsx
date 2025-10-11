import Image from "next/image"

interface ProjectImageProps{
    src: string
}

export default function ProjectImage(props: ProjectImageProps){
    return(
        <div className="relative w-full aspect-video">
            <Image
                src={props.src}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Project screenshot"
                className="object-contain"
            />
        </div>
    )
}
