import React from 'react'
import {HiOutlineDocumentDuplicate}from "react-icons/hi"
import {VscGithubInverted, VscAccount, VscSettingsGear} from 'react-icons/vsc'
import { AiOutlineRocket, AiOutlineMail } from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'
import Link from 'next/link'
function SideBar() {
  return (
    <aside class="bg-[#24292e] text-gray-500 flex flex-col justify-between items-center w-14 "> 
            <div className = 'space-y-5'>
            <Link href = '/'>
              <HiOutlineDocumentDuplicate className = 'sidebar' />
            </Link>
            <Link href = '/github'>
              <VscGithubInverted className = 'sidebar' />
            </Link>
            <Link href = '/projects'>
              <AiOutlineRocket className = 'sidebar' />
            </Link>
            <Link href = '/skills'>
              <BsCodeSlash className = 'sidebar' /> 
            </Link>
            <Link href = '/contact'>
              <AiOutlineMail className = 'sidebar' />
            </Link>
            </div>
            <div className = 'space-y-5 my-4'>
           <Link href = '/about'>
                <VscAccount className = 'sidebar'/>
           </Link>
                <VscSettingsGear className = 'sidebar' />
            </div>
    </aside>
  )
}

export default SideBar