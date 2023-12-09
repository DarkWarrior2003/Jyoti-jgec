import React from 'react'

const Support = () => {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
    
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
    
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
    
      window.addEventListener("scroll", reveal);
    return (
      <div className='bg-white'>
        <div className='container  flex lg:flex-row flex-col lg:gap-16 lg:px-60 p-8 lg:p-14'>
            <img src="https://rabbit_olive_306.pineapplebuilder.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Faurity%2Fimage%2Fupload%2Fv1694328286%2FWhats_App_Image_2023_09_10_at_12_14_30_PM_b679950020.jpg&w=640&q=90" className=' lg:w-2/4 reveal support-img rounded-lg' alt="" />
            <div className='support reveal'>
                <h3 className='lg:text-4xl text-center lg:text-left text-2xl pb-6 text-blue-500'>Support Us</h3>
                <p className='lg:text-xl'>A/c no: 34615713229</p>
                <p className='lg:text-xl'>IFSC: SBIN0007194</p>
                <p className='lg:text-xl'>Branch: Denguajhar</p>
                <p className='pt-6 text-sm italic'>Your support for this noble cause can help us to run this centre better, since this centre is a separate body in our college. Your contributions can help poor children to read and write and in turn help us to increase the literacy rate in this poverty-stricken district, thus helping to improve their life. Help us to keep burning the light of INDIA - “JYOTI”</p>
            </div>
        </div>
      </div>
        
    )
}

export default Support
