import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import RightSide from '../components/RightSide'
import Homee from '../components/HomeNav'
import Link from 'next/link'
import Image from 'next/image'
const About = () => {
  return (
    <div className="bg-[#24292e] h-screen">
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
        <div className = "bg-[#24292e] w-full text-white justify-center px-9  ">
            <h1 className = 'text-lg md:text-4xl font-yoni mb:4 md:mb-10 font-semibold'>Check Out My Github</h1>
            <Link href = 'https://www.github.com/yoni1342'>
                <button className ='bg-[#24292e] px-10 py-4 rounded-full shadow-md text-purple-500 my-3 font-bold 
                    hover:shadow-xl shadow-black active:scale-90 transtion duration-150'>
                    View Profile
                </button> 
            </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
