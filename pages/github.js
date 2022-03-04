import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import RightSide from '../components/RightSide'
import Homee from '../components/HomeNav'
import Image from 'next/image'

function github() {
  return (
    <div className="h-screen w-full">
    <Head>
      <title>Yonatan Tesfaye | Github</title>
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
      <div class = "bg-[#24292e] w-full h-full text-white px-10 py-5 ">

        <h1 className = 'text-4xl font-yoni mb-10 font-semibold'>Check Out My Github</h1>
        <button className ='bg-[#24292e] px-10 py-4 rounded-full shadow-md text-purple-500 my-3 font-bold 
          hover:shadow-xl shadow-black active:scale-90 transtion duration-150'>
            View Profile
          </button> 
        </div> 
      </div>
    </div>
  </div>
  )
}

export default github
