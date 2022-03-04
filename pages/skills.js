import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import RightSide from '../components/RightSide'
import Homee from '../components/HomeNav'
import Image from 'next/image'

function skills() {
  return (
    <div className="h-screen w-full">
    <Head>
      <title>Yonatan Tesfaye | Skills</title>
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

        <h1 className = 'text-4xl font-yoni mb-10 font-semibold'>My Skills</h1>
        <div className = 'flex justify-between w-[60rem]  ml-[10rem] font-serif'>

            <div className ='text-center'>
                <h2 className ='text-xl font-semibold text-purple-500 mb-3'>Front-End</h2>
                <p>HTML 5</p>
                <p>CSS 3</p>
                <p>Javascript</p>
                <p>React Js | Next JS</p>
                <p>Tailwind CSS</p>
                <p>Bootstrap</p>
            </div>
            <div className ='text-center'>
                <h2 className ='text-xl font-semibold text-purple-500 mb-3'>Back-End</h2>
                <p>Node JS</p>
                <p>Express</p>
                <p>NPM</p>
                <p>YARN</p>
                <p>SQL</p>
                <p>Mongo DB</p>
                <p>Rest API</p>
                <p>Axios</p>
                <p>Next-Auth</p>
            </div>
            <div className = 'text-center'>
                <h2 className ='text-xl font-semibold text-purple-500 mb-3'>Tools</h2>
                <p>Git</p>
                <p>Postman</p>
                <p>VS Code</p>
                <p>Github</p>
            </div>
        </div>
        </div> 
      </div>
    </div>
  </div>
  )
}

export default skills




