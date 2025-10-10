import Image from "next/image"

interface ProjectImageProps{
    src: string
}

export default function ProjectImage(props: ProjectImageProps){
    return(
        <div className="d-block w-100">
            <Image
                src={props.src}
                width={1920}
                height={1080}
                alt="Project screenshot"
            />
        </div>
    )
}
