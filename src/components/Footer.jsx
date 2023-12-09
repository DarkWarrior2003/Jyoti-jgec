import React from 'react'
import logo from './assests/Logo.png'



const Footer = () => {
  
  return (
    
    <div>

      <footer class=" footer mt-5  bg-white rounded-lg shadow dark:bg-gray-900 ">
        <div class="w-full max-w-screen-xl mx-auto p-4  md:py-8">
          <div class="flex items-center justify-between">
            <a href="/" class="flex items-center  sm:mb-0">
              <img src={logo} class="lg:h-8 h-6 mr-3" alt="" />
              <span class="self-center text-xl lg:text-2xl font-semibold whitespace-nowrap dark:text-white">JYOTI</span>
            </a>
            <ul class="flex flex-wrap  items-center text-xl lg:text-2xl font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li className='hover:scale-105 transition-transform'>
                <a href="https://www.instagram.com/jyotijgec target='_blank' rel='noreferrer'" class="mr-4 bg-tr hover:bg-transparent hover:text-blue-400  md:mr-6 "><i class="fa-brands fa-instagram"></i></a>
              </li>
              <li className='hover:scale-105 transition-transform'>
                <a href="https://www.facebook.com/jgecjyoti?mibextid=ZbWKwL" target='_blank' rel='noreferrer' class="mr-4 hover:text-blue-400 md:mr-6 hover:bg-transparent"><i class="fa-brands fa-facebook"></i></a>
              </li>
              <li className='hover:scale-105 transition-transform'>
                <a href="https://t.me/jyotijgec" target='_blank' rel='noreferrer' class="mr-4 hover:text-blue-400 md:mr-6 hover:bg-transparent "><i class="fa-brands fa-telegram"></i></a>
              </li>
              <li className='hover:scale-105 transition-transform'>
                <a href="https://www.linkedin.com/company/jyotijgec/" target='_blank' rel='noreferrer' class="mr-4 hover:bg-transparent hover:text-blue-400 md:mr-6 "><i class="fa-brands fa-linkedin"></i></a>
              </li>

            </ul>
          </div>
          <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 " />
          <span class="block lg:text-sm text-xs text-gray-500 text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">Jyoti JGEC™</a>. All Rights Reserved.</span>
        </div>
      </footer>


    </div>
  )
}

export default Footer
