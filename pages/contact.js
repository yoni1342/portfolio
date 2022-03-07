import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import RightSide from '../components/RightSide'
import Homee from '../components/HomeNav'

function contact() {
  async function handleOnSubmit(e) {
    e.preventDefault();
    const FormData = {};
    Array.from(e.currentTarget.elements).forEach(field =>{
      if(!field.name) return;
      FormData[field.name] = field.value;
    });
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(FormData)
    })  
  }
  return (
    <div className="h-screen w-full">
    <Head>
      <title>Yonatan Tesfaye | Contact</title>
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
      <div class = "bg-[#24292e] w-full h-full text-white px-10 py-5 flex flex-col space-x-96 items-center md:flex-row">
          <div className = ''>
            <h1 class="text-2xl font-semibold mb-10">Reach Out via Socials</h1>
            <div className = 'flex space-x-2 text-lg items-center'>
                <div className = 'text-gray-600 space-y-2 text-lg '>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                </div>
                <div className = 'space-y-2 text-lg flex flex-col'>
                    <p>
                        <span className ='text-purple-400'>.socials {'{'} </span>
                    </p>
                    <div className = 'space-y-2 pl-9 flex flex-col '>
                        <p>
                            <span>email: </span>
                            <span className  ='font-typewriter hover:underline text-purple-400 pl-3'><a href="mailto:yonatantesfaye30@gmail.com"> yonatantesfaye30@gmail.com</a></span>
                        </p>
                        <p>
                            <span>github: </span>
                            <span className  ='font-typewriter hover:underline text-purple-400 pl-3'><a href="https://www.github.com/yoni1342">yoni1342</a></span>
                        </p>
                        <p>
                            <span>facebook: </span>
                            <span className  ='font-typewriter hover:underline text-purple-400 pl-3'><a  href="https://www.facebook.com/yoni.tesfu.7">Yonatan Tesfaye</a></span>
                        </p>
                        <p>
                            <span>telegram: </span>
                            <span className  ='font-typewriter hover:underline text-purple-400 pl-3'><a href="https://t.me/Yonatan_Tesfaye">@Yonatan_Tesfaye</a></span>
                        </p>
                        <p>
                            <span>linkedin: </span>
                            <span className  ='font-typewriter hover:underline text-purple-400 pl-3'><a href="https://www.linkedin.com/in/yonatan-tesfaye-8594211a8/">Yonatan Tesfaye</a></span>
                        </p>
                        
                    </div>
                    <p>{'}'}</p>
                </div>
            </div>
          </div>
          <div className = 'border-l-2 border-purple-400 pl-7 w-[45rem] h-[40rem] '>
              <h2 className = 'text-2xl font-semibold mb-10 font-yoni'>Or Fill Out the Form</h2>
              <form method = 'POST' onSubmit = {handleOnSubmit}>
                <div className = 'flex space-x-3'>
                  <div>
                    <label htmlFor="Name" className = 'text-lg font-semibold'>Name</label> <br />
                    <input type="text" className = 'bg-[#1F2428] w-50 h-16 my-3' name = 'Name'/>
                  </div>
                  <div>
                    <label htmlFor="Email"className = 'text-lg font-semibold'>Email</label> <br />
                    <input type="email" className = 'bg-[#1F2428] w-50 h-16 my-3' name = 'Email'/>
                  </div>
                </div>
                <div>
                  <label htmlFor="Subject" className = 'text-lg font-semibold'>Subject</label> <br />
                  <input type="text" className = 'bg-[#1F2428] w-full h-16 my-3' name = 'Subject'/>
                </div>
                <div>
                  <label htmlFor="Message" className = 'text-lg font-semibold'>Message</label> <br />
                  <textarea name="Message" id="message" cols="30" rows="8"  className = 'bg-[#1F2428] w-full my-3'></textarea>
                </div>
                <button className ='bg-[#24292e] px-10 py-4 rounded-full shadow-md text-purple-500 my-3 font-bold 
                hover:shadow-xl shadow-black active:scale-90 transtion duration-150'>
                  SUBMIT
                </button>
              </form>
          </div>

      </div>
      </div>
    </div>
  </div>
  )
}

export default contact