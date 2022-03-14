import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import RightSide from '../components/RightSide'
import Homee from '../components/HomeNav'
import Link from 'next/link'
import Image from 'next/image'
const About = () => {
  return (
    <div className="bg-[#24292e] ">
      <Head>
        <title>Yonatan Tesfaye | About</title>
        <link rel="icon" href="/vs.svg.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap" rel="stylesheet"/>
      </Head>
      <Header />
      <div className =' pb-14 flex'>
        <SideBar />
        <RightSide />
        <div className = ' w-full ml-2 md:ml-56'>
        <Homee />
        <div className = "bg-[#24292e] w-full text-white justify-center  px-9 flex flex-col 2xl:grid 2xl:grid-cols-3 ">
        <div className = 'mb-20 md:mb-0 relative w-[18rem] h-[12rem] md:w-[30rem] md:h-[30rem] group'>
            <Image 
                src = '/imgs/amazonclone.png'
                layout = 'fill'
                objectFit = 'contain'
                className = 'md:group-hover:blur-[1px]'
            />
            <div className = 'absolute bg-gradient-to-t from-black to-transparent w-[18rem] md:w-[30rem] md:h-[16rem] h-[12rem] top-28 opacity-0 md:group-hover:opacity-100' />
            <Link href = 'https://amazon-clone-yoni1342.vercel.app/'>
              <button className =' bg-[#edf2f7] px-10 py-4 rounded-full shadow-md text-purple-500 my-3 font-bold 
                  hover:shadow-xl shadow-black active:scale-90 transtion duration-150 absolute top-52 left-10 md:top-52 md:left-36 md:animate-bounce md:opacity-0 group-hover:opacity-100 '>
                  View Project  
              </button>
            </Link>
        </div>
        <div className = 'mb-20 md:mb-0 relative w-[18rem] h-[12rem] md:w-[30rem] md:h-[30rem] group'>
            <Image 
                src = '/imgs/airbnbclone.png'
                layout = 'fill'
                objectFit = 'contain'
                className = 'md:group-hover:blur-[1px]'
            />
            <div className = 'absolute bg-gradient-to-t from-black to-transparent w-[18rem] md:w-[30rem] md:h-[16rem] h-[12rem] top-28 opacity-0 md:group-hover:opacity-100' />
            <Link href = 'https://airbnb-clone-yoni1342.vercel.app/'>
              <button className =' bg-[#edf2f7] px-10 py-4 rounded-full shadow-md text-purple-500 my-3 font-bold 
                  hover:shadow-xl shadow-black active:scale-90 transtion duration-150 absolute top-52 left-10 md:top-52 md:left-36 md:animate-bounce md:opacity-0 group-hover:opacity-100 '>
                  View Project  
              </button>
            </Link>
        </div>
        <div className = 'mb-20 md:mb-0 relative w-[18rem] h-[12rem] md:w-[30rem] md:h-[30rem] group'>
            <Image 
                src = '/imgs/HTC.png'
                layout = 'fill'
                objectFit = 'contain'
                className = 'md:group-hover:blur-[1px]'
            />
            <div className = 'absolute bg-gradient-to-t from-black to-transparent w-[18rem] md:w-[30rem] md:h-[16rem] h-[12rem] top-28 opacity-0 md:group-hover:opacity-100' />
            <Link href = 'https://gracious-ride-37384a.netlify.app/'>
              <button className =' bg-[#edf2f7] px-10 py-4 rounded-full shadow-md text-purple-500 my-3 font-bold 
                  hover:shadow-xl shadow-black active:scale-90 transtion duration-150 absolute top-52 left-10 md:top-52 md:left-36 md:animate-bounce md:opacity-0 group-hover:opacity-100 '>
                  View Project  
              </button>
            </Link>
        </div>
        <div className = 'mb-20 md:mb-0 relative w-[18rem] h-[12rem] md:w-[30rem] md:h-[30rem] group'>
            <Image 
                src = '/imgs/amazon-angualr.png'
                layout = 'fill'
                objectFit = 'contain'
                className = 'md:group-hover:blur-[1px]'
            />
            <div className = 'absolute bg-gradient-to-t from-black to-transparent w-[18rem] md:w-[30rem] md:h-[16rem] h-[12rem] top-28 opacity-0 md:group-hover:opacity-100' />
            <Link href = 'https://e-commerce-with-angular-yoni1342.vercel.app/'>
              <button className =' bg-[#edf2f7] px-10 py-4 rounded-full shadow-md text-purple-500 my-3 font-bold 
                  hover:shadow-xl shadow-black active:scale-90 transtion duration-150 absolute top-52 left-10 md:top-52 md:left-36 md:animate-bounce md:opacity-0 group-hover:opacity-100 '>
                  View Project  
              </button>
            </Link>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
