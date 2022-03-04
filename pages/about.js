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
            <p className = 'w-[50rem] text-lg my-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facilis, commodi obcaecati fugit nostrum consequuntur, placeat minus, natus animi velit libero! Nobis beatae consequatur dignissimos similique iste maiores quaerat molestias nesciunt, illo modi, voluptate repudiandae quasi? Ducimus, eveniet quia? Nisi unde necessitatibus aperiam qui temporibus magni fuga. Qui, nam magnam?</p>
      </div>
      </div>
    </div>
  </div>
  )
}

export default about