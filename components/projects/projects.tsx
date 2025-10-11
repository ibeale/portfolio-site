import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode} from '@fortawesome/free-solid-svg-icons'

interface ProjectProps{
    children?: React.ReactNode;
}

export default function Projects({children}: ProjectProps){
    return (
        <div className="w-full">
            <div className="grid grid-cols-2 gap-4">
                    <h2>Projects
                        <FontAwesomeIcon color="#70D7FF" className="mx-3" icon={faCode} />
                    </h2>
            </div>
            <div className="[&>*:nth-child(odd)]:xl:flex-row-reverse">
                {children}
            </div>
        </div>
    )
}

