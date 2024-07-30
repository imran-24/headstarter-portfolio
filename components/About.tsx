import Image from "next/image"


const About = () => {
  return (
    <div className="min-w-80   flex items-start lg:flex-col space-y-4 space-x-4">
        <div>
            <div className="relative h-28 w-28 lg:mb-4 mr-4 lg:mr-0  rounded-full">
            <Image
              src={"/imran.jpeg"}
              fill
              className="object-center rounded-full aspect-square scale-125  grayscale object-cover"
              alt=""
            />
              </div>
        </div>
        <div className="w-full lg:max-w-80 space-y-2">
            <h2 className="text-3xl  font-bold">Imran Syam</h2>
            <p className="text-sm text-neutral-500">My expertise lies in React JS, Next JS crafting small and medium full-stack web applications.</p>
        </div>
    </div>
  )
}

export default About