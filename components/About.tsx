import Image from "next/image"


const About = () => {
  return (
    <div className="min-w-80 px-4 flex items-start xl:flex-col space-y-4 space-x-4 xl:space-x-0 ">
        <div>
            <div className="relative h-32 w-32 rounded-full">
            <Image
              src={"/imran.jpeg"}
              fill
              className="object-center rounded-full aspect-square   grayscale object-cover"
              alt=""
            />
              </div>
        </div>
        <div className="w-full xl:max-w-80 space-y-2">
            <h2 className="text-3xl  font-bold">Imran Syam</h2>
            <p className="text-sm text-primary tracking-wider">My expertise lies in React JS, Next JS crafting small and medium full-stack web applications.</p>
        </div>
    </div>
  )
}

export default About