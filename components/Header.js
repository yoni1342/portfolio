import React from 'react'
import Image from 'next/image'
import {MdCheckBoxOutlineBlank} from 'react-icons/md'
import { MinusIcon, XIcon} from '@heroicons/react/outline'
function Header() {
  return (
    <header className = 'sm:h-[2.5rem] md:h-[3.5rem] sticky top-0 z-50 grid grid-cols-3 bg-[#1F2428] text-white px-2 border-b border-[#24292e] fixed'>
        {/* Top Heder */}
        {/* <div className = 'flex justify-between  bg-[#1F2428] text-white h-5 px-1'> */}
        <div className = 'space-y-0 p-0 md:space-y-1 md:p-1 '>
          <Image 
          src = '/vs.svg.png'
          // layout = 'fill'
          objectFit = 'contain'
          width = '14'
          height = '14'
        //   className = ''
          />

          <div className = 'flex text-xs space-x-2 md:space-x-3 '>
              <p className ='hover:link'>File</p>
              <p className ='hover:link'>Edit</p>
              <p className ='hover:link'>Selection</p>
              <p className ='hover:link'>View</p>
              <p className ='hover:link'>Go</p>
              <p className ='hover:link'>Run</p>
              <p className ='hover:link'>Terminal</p>
              <p className ='hover:link'>Help</p>
          </div>
        </div>
        <div className = 'flex text-xs whitespace-nowrap '>
            <p className = 'flex-grow hidden sm:inline-flex'>Yonatan Tesfaye-Visual Studio Code</p>
        </div>
        
        <div className = 'flex text-sm items-center space-x-3 justify-end'>
            <MinusIcon  className = 'w-3 cursor-pointer hover:bg-[#37465B] hover:rounded-full'/>
            <MdCheckBoxOutlineBlank  className = 'w-3 cursor-pointer hover:bg-[#37465B] hover:rounded-full'/>
            <XIcon className = 'w-3 cursor-pointer hover:bg-[#37465B] hover:rounded-full'/>
        </div>

    </header>
  )
}

export default Header