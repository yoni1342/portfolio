import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import RightSide from '../components/RightSide'
import Homee from '../components/HomeNav'
import TypeWriter from 'typewriter-effect'
import Link from 'next/link'
const Home = () => {
  return (
    <div className="h-screen overflow-y-hidden">
      <Head>
        <title>Yonatan Tesfaye | Home</title>
        <link rel="icon" href="/vs.svg.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap" rel="stylesheet"/>
      </Head>
      <Header />
      <div className ='h-full pb-14 flex overflow-hidden'>
        <SideBar />
        <RightSide />
        <div className = ' w-full h-screen ml-10 md:ml-56'>
        <Homee />
        <div className = "bg-[#24292e] w-full h-full text-white flex flex-col  justify-center pb-9 px-9 ">
            <p className = 'font-yoni font-extralight text-5xl'>Yonatan Tesfaye</p> 
            <div className = 'flex space-x-3 mt-6 font-typewriter items-center text-3xl font-bold'>
              <TypeWriter 
                onInit = {
                  (typewriter)=>{
                    typewriter.typeString("Frontend Web Developer").start()
                  }
                }
              />
            </div>
            <div className ='space-x-1 mt-10 sm:space-x-4'>  
            <Link href = '/projects'>
              <button className ='bg-gray-200 px-10 py-4 rounded-full shadow-md text-purple-500 my-3 font-bold 
                hover:shadow-xl shadow-black active:scale-90 transtion duration-150'>
                View Work
              </button>
            </Link>
        <Link href = '/contact'>
          <button className ='bg-[#24292e] px-10 py-4 rounded-full shadow-md text-purple-500 my-3 font-bold 
          hover:shadow-xl shadow-black active:scale-90 transtion duration-150'>
            Reach Me
          </button>
        </Link>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
