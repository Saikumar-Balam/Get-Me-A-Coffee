import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base gap-4 ">
        <div className="font-bold md:text-5xl text-3xl flex items-center justify-center gap-5  md:gap-20">Get Me a Coffee
          <span><img className="invertImg" width={88} src="/tea.gif" alt="tea" /></span>
        </div>
        <p className="text-center md:text-left">
          A crowdfunding platform for creators to fund their projects.
        </p>
        <p className="text-center md:text-left">
          A place where your fans can buy you a Coffee. Unleash the power of your fans and get your projects funded.
        </p>
        <div>
          <Link href={'/login'}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>
          <Link href={'/about'}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10">

      </div>

      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Coffee</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className=" bg-slate-400 rounded-full p-2 text-black" width={88} src="man.gif" alt="man" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center">Your fans are available to support you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className=" bg-slate-400 rounded-full p-2 text-black" width={88} src="coin.gif" alt="coin" />
            <p className="font-bold text-center">Fans want to contribute</p>
            <p className="text-center">Your fans are willing to contribute financially</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className=" bg-slate-400 rounded-full p-2 text-black" width={88} src="group.gif" alt="group" />
            <p className="font-bold text-center">Fans want to collaborate</p>
            <p className="text-center">Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        {/* Responsive youtube embed */}
        <div className="w-[90%] h-[40vh] md:[w-50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
          {/* <iframe className="w-full h-fit"  src="https://www.youtube.com/embed/FpjzY0_FVPc?si=S2KN0vL7mOQASaRp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
         <video
  className="w-full rounded-lg"
  controls
  muted
  loop
>
  <source src="/Demo_Video.mp4" type="video/mp4" />
</video>
        </div>
      </div>
    </>

  );
}
