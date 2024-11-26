"use client";

import { CARDS } from "@/components/cards";
import ProjectCard from "./_components/project-card";



  
const ProjectsPage = () => {
  return(
    <div 
    className='
    lg:p-10
    p-6
  
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-2 
    lg:grid-cols-3
    xl:grid-cols-4
    2xl:grid-cols-4
    gap-8
    '>
     
        {
          CARDS?.map(card => (
            
            <ProjectCard
            key={card.id}
            card={card}
            />
          
          ))
        }
      
    </div>
  )
}

export default ProjectsPage