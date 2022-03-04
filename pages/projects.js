import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import RightSide from '../components/RightSide'
import Homee from '../components/HomeNav'
import Image from 'next/image'
import Link from 'next/link'

function projects() {
  return (
    <div className="h-screen w-full">
    <Head>
      <title>Yonatan Tesfaye | Projects</title>
      <link rel="icon" href="/vs.svg.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap" rel="stylesheet"/>
    </Head>
    <Header />
    <div className ='h-full pb-14 flex'>
      <SideBar />
      <RightSide />
      <div className = 'w-full'>
      <Homee />
      <div class = "bg-[#24292e] w-full h-full text-white px-10 flex space-x-4">
        <div className = 'relative w-[30rem] h-[30rem] group'>
            <Image 
                src = '/imgs/amazonclone.png'
                layout = 'fill'
                objectFit = 'contain'
                className = 'group-hover:blur-[1 px]'
            />
            <div className = 'absolute bg-gradient-to-t from-black to-transparent w-[30rem] h-[16rem] top-28 opacity-0 group-hover:opacity-100' />
            <Link href = 'https://amazon-clone-yoni1342.vercel.app/'>
              <button className =' bg-[#edf2f7] px-10 py-4 rounded-full shadow-md text-purple-500 my-3 font-bold 
                  hover:shadow-xl shadow-black active:scale-90 transtion duration-150 absolute top-52 left-36 animate-bounce opacity-0 group-hover:opacity-100 '>
                  View Project  
              </button>
            </Link>
        </div>
        <div className = 'relative w-[30rem] h-[30rem] group'>
            <Image
                src = '/imgs/airbnbclone.png'
                layout = 'fill'
                objectFit = 'contain'
            />
            <div className = 'absolute bg-gradient-to-t from-black to-transparent w-[30rem] h-[16rem] top-28 opacity-0 group-hover:opacity-100' />
            <Link href = 'https://airbnb-clone-yoni1342.vercel.app/'>
              <button className =' bg-[#edf2f7] px-10 py-4 rounded-full shadow-md text-purple-500 my-3 font-bold 
                  hover:shadow-xl shadow-black active:scale-90 transtion duration-150 absolute top-52 left-36 animate-bounce opacity-0 group-hover:opacity-100'>
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

export default projects


