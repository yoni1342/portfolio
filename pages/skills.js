import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import RightSide from '../components/RightSide'
import Homee from '../components/HomeNav'
const Skills = () => {
  return (
    <div className="bg-[#24292e] md:h-screen">
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
      <div className =' pb-14 flex'>
        <SideBar />
        <RightSide />
        <div className = ' w-full ml-2 md:ml-56'>
        <Homee />
        <div className = "bg-[#24292e] w-full h-full text-white justify-center pb-9 px-9 space-y-8 flex flex-col">
        <h1 className = 'text-4xl font-yoni mb-10 font-semibold'>My Skills</h1>
        <div className = 'flex flex-col justify-between xl:flex-row items-center xl:w-[60rem]  xl:ml-[10rem] font-serif space-y-10'>

            <div className ='text-center'>
                <h2 className ='text-xl font-semibold text-purple-500 mb-3'>Front-End</h2>
                <p>HTML 5</p>
                <p>CSS 3</p>
                <p>Javascript</p>
                <p>React Js | Next JS</p>
                <p>Angular Js</p>
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

export default Skills
