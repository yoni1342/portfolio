import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import RightSide from '../components/RightSide'
import Homee from '../components/HomeNav'
import Image from 'next/image'

function about() {
  return (
    <div className="h-screen w-full">
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
    <div className ='h-full pb-14 flex'>
      <SideBar />
      <RightSide />
      <div className = 'w-full'>
      <Homee />
      <div class = "bg-[#24292e] w-full h-full text-white px-10 py-5">
            <h1 className = 'text-2xl font-bold p-8' >About Me</h1>
            <Image 
                src = '/imgs/yo.jpeg'
                width = '240'
                height = '240'
                objectFit = 'contain'
                className = 'rounded-full '
            />
            <p className = 'w-[50rem] text-lg my-7'>Hello, my name is Yonatan Tesfaye, and I am a 20-year-old software engineer and third-year student at Addis Ababa Science and Technology University (AASTU). I began learning programming while quarantined due to the Covid 19 outbreak, using YouTube videos and Udemy courses as resources. The first course I took was buky Robert's html course, which I found to be rather intriguing. After that, I studied a lot of css, js, and python. My curiosity in online programming led me to plunge into it, when I discovered react and fell in love with it. Next Js and Tailwind CSS are two of my favorite frameworks. I'm learning Node.js, Express, and MongoDB on the backend.</p>
      </div>
      </div>
    </div>
  </div>
  )
}

export default about