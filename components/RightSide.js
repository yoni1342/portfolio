import React from 'react'
import Link from 'next/link'
function RightSide() {
  return (
    <div className = 'w-48 bg-[#1F2428] text-white shadow-md shadow-[#1f2428]  hidden md:inline-block fixed h-full ml-10'>
            <p className = 'my-4 mx-2 text-xs font-bold '>EXPLORER</p>
            <p className ='mx-10 my-5 text-sm'>PORTFOLIO</p>
           <Link href = '/'>
                <div class="pages">
                    <img src="/icons/React-icon.svg.png" alt="React js icon" className ='w-4' />
                    <p>home.jsx</p>
                </div>
           </Link>
            <Link href ='/about'>
                <div class="pages">
                    <img src="/icons/html.png" alt="HTML icon" className ='w-4' />
                    <p>about.html</p>
                </div>
            </Link>
            <Link href ='/contact'>
                <div class="pages">
                    <img src="/icons/CSS3_logo.svg.png" alt="CSS3 Logo" className ='w-4' />
                    <p>contact.css</p>
                </div>
            </Link>
            <Link href = '/skills'>
                <div class="pages">
                    <img src="/icons/next.png" alt="Next Js Icon" className ='w-4' />
                    <p>skills.config.js</p>
                </div>
            </Link>
            <Link href = '/projects'>
                <div class="pages">
                    <img src="/icons/js.png" alt="Next Js Icon" className ='w-4' />
                    <p>Projects.js</p>
                </div>
            </Link>
            <Link href = '/github'>
                <div class="pages">
                <img src="/icons/git.png" alt="Next Js Icon" className ='w-4' />
                    <p>githun.gitignore</p>
                </div>
            </Link>

        </div>
  )
}

export default RightSide