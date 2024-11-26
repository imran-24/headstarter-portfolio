"use client";
import { ProjectModal } from "@/components/modals/project-modal";
import Overlay from "@/components/overlay";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  card: any;
}

const ProjectCard = ({ card }: ProjectCardProps) => {
  return (
    <ProjectModal project={card}>
      <div
        // router.push(`/listings/${data.id}`)}
        className='group col-span-1 cursor-pointer'
      >
        <div className='flex flex-col w-full'>
          <div
            className='
            w-full
            aspect-[3/2]
            overflow-hidden
            relative
            rounded-xl
            border
            rounded-b-none
            border-b-0'
          >
            <Overlay />
            <Image
              alt='project'
              src={card?.projectImages[0]}
              fill
              className={cn(`
                w-full
                h-full
                transition
                object-cover
                object-${card.position}
                `)}
            />
            {/* <div className='absolute top-3 right-3 z-10'>
            <HeartButton currentUser={currentUser} listingId={data.id} />
          </div> */}
          </div>
          {/* <div className=' text-lg'>
          {location?.region}, {location?.label}
        </div> */}
          <div
            onClick={(e) => e.stopPropagation()}
            className='border text-xs text-start font-semibold p-3 rounded-xl rounded-t-none z-10'
          >
            <Link target="_blank"  href={card.href}>{card.name}</Link>
          </div>
          {/* <div className='text-sm font-semibold flex items-center'>
          ${price}
          {!reservation && (
            <div className='pl-2 inline-flex font-semibold'>night</div>
          )}
        </div> */}
          {/* {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )} */}
        </div>
      </div>
    </ProjectModal>
  );
};

export default ProjectCard;
