import React from 'react'
import Link from 'next/link'
function Homee() {
  return (
    <nav className = 'flex-[1] bg-[#24292e] text-white '>
      <div className = 'flex space-x1 bg-[#1F2428] w-full'>
          <Link href = '/'>
              <div class="pages">
                <img src="/icons/React-icon.svg.png" alt="React js icon" className ='w-4' />
                <p>home.jsx</p>
              </div>
            </Link>
           <Link href = '/about'>
              <div class="pages">
                  <img src="/icons/html.png" alt="HTML icon" className ='w-4' />
                  <p>about.html</p>
              </div>
           </Link>
           <Link href='/contact'>
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
    </nav>
  )
}

export default Homee