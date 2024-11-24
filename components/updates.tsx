import Image from "next/image";
import Link from "next/link";
import React from "react";

const currentProject = {
  name: "Finance Manager SaaS App",
  status: "Ongoing",
  description:
    "Building a SaaS application for managing finances, including budgeting, expense tracking, and reporting.",
  technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
};

const learningResources = [
  {
    name: "Full Stack Open",
    type: "Course",
    link: "https://fullstackopen.com",
  },
  {
    name: "JavaScript Info",
    type: "Documentation",
    link: "https://javascript.info",
  },
  {
    name: "Udemy: Advanced React Patterns",
    type: "Course",
    link: "https://www.udemy.com",
  },
];

const techUpdates = [
  "Exploring advanced React patterns for component reusability.",
  "Learning how to optimize SaaS architecture for scalability.",
  "Integrating third-party APIs for payment processing.",
];

const Updates = () => {
  return (
    <div className='p-6 relative flex flex-col items-start    '>
      <div className='space-y-4'>
        <div>
          <Image
            src={"/logo.png"}
            height={30}
            width={40}
            className='object-center border  p-1 rounded-lg  aspect-square  object-cover'
            alt=''
          />
        </div>
        <h3 className='text-xl font-semibold text-neutral-600 dark:text-neutral-200'>
          Ongoing Project:{" "}
          <span className='text-emerald-500 font-bold'>
            {currentProject.name}
          </span>
        </h3>
        <p className='text-sm'>
          {currentProject.description}{" "}
          {/* <span className='text-emerald-500 font-bold'>
            <Link
              href={"https://headstarter.co/"}
              className='underline underline-offset-2 und'
            >
              Headstarter
            </Link>{" "}
            Software Engineering fellow
          </span> */}
          {/* . I will be building 5 AI projects in 5 weeks */}
        </p>
        {/* Current Project */}
        {/* <div className="mb-6">
        <h3 className="text-xl font-semibold text-neutral-600 dark:text-neutral-200">
          Current Project: {currentProject.name}
        </h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
          <strong>Status:</strong> {currentProject.status}
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 mt-2">
          {currentProject.description}
        </p>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          <strong>Technologies:</strong>{" "}
          {currentProject.technologies.join(", ")}
        </p>
      </div> */}
      </div>
      {/* <div className='relative overflow-hidden  aspect-[2/1]'>
        <Image
          src={"/track-a.png"}
          fill
          className='object-center rounded-3xl  aspect-square  object-cover'
          alt=''
        />
      </div> */}
      {/* <ExperienceModal /> */}
    </div>
  );
};

export default Updates;

// import React from "react";

// const Updates = () => {

//   return (
//     <section className="p-6 bg-gray-100 dark:bg-neutral-800 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-center mb-4 text-neutral-700 dark:text-neutral-100">
//         Life Updates 🌟
//       </h2>

//       {/* Current Project */}
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold text-neutral-600 dark:text-neutral-200">
//           Current Project: {currentProject.name}
//         </h3>
//         <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
//           <strong>Status:</strong> {currentProject.status}
//         </p>
//         <p className="text-neutral-600 dark:text-neutral-300 mt-2">
//           {currentProject.description}
//         </p>
//         <p className="mt-2 text-neutral-600 dark:text-neutral-300">
//           <strong>Technologies:</strong>{" "}
//           {currentProject.technologies.join(", ")}
//         </p>
//       </div>

//       {/* Learning Resources */}
//       {/* <div className="mb-6">
//         <h3 className="text-xl font-semibold text-neutral-600 dark:text-neutral-200">
//           Learning Resources
//         </h3>
//         <ul className="list-disc ml-5 mt-2 text-neutral-600 dark:text-neutral-300">
//           {learningResources.map((resource, index) => (
//             <li key={index}>
//               <a
//                 href={resource.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 dark:text-blue-400 hover:underline"
//               >
//                 {resource.name}
//               </a>{" "}
//               - {resource.type}
//             </li>
//           ))}
//         </ul>
//       </div> */}

//       {/* Tech Updates */}
//       {/* <div>
//         <h3 className="text-xl font-semibold text-neutral-600 dark:text-neutral-200">
//           Tech Updates
//         </h3>
//         <ul className="list-disc ml-5 mt-2 text-neutral-600 dark:text-neutral-300">
//           {techUpdates.map((update, index) => (
//             <li key={index}>{update}</li>
//           ))}
//         </ul>
//       </div> */}
//     </section>
//   );
// };

// export default Updates;
