import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {Navigation, Autoplay, Pagination } from "swiper/modules";
import AchievementsCard from "./AchievementsCard";


const data = [{
    id: 1,
    img : "https://rabbit_olive_306.pineapplebuilder.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Faurity%2Fimage%2Fupload%2Fv1694248767%2FWhats_App_Image_2023_09_09_at_2_03_11_PM_7043a335fd_72093d30b7.jpg&w=384&q=90",
    title : "Organizing donation drives regularly for essential items and stationaries...",
    pad : "14",
},
{
    id: 2,
    img : "https://rabbit_olive_306.pineapplebuilder.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Faurity%2Fimage%2Fupload%2Fv1694248851%2FWhats_App_Image_2023_09_09_at_2_10_18_PM_25723565cc_b8af82f0af.jpg&w=384&q=90",
    title : "Rima Sharma, a student of Jyoti has undergone eye operation ",
    
},
{
    id: 3,
    img : "https://rabbit_olive_306.pineapplebuilder.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Faurity%2Fimage%2Fupload%2Fv1694324241%2FWhats_App_Image_2023_09_09_at_2_13_40_PM_a8149298f0_21a3da67a1.jpg&w=384&q=90",
    title : "JYOTI organizes offline class during the whole lockdown period with the local students of our college",
    pad : "14"
},
{
    id: 4,
    img : "https://rabbit_olive_306.pineapplebuilder.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Faurity%2Fimage%2Fupload%2Fv1694324404%2FWhats_App_Image_2023_09_10_at_11_09_32_AM_d93818cb38_d6e8d09977.jpg&w=384&q=90",
    title : "JYOTI organizes functions like dancing etc annually",
    pad : "14"
},
{
    id: 5,
    img : "https://rabbit_olive_306.pineapplebuilder.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Faurity%2Fimage%2Fupload%2Fv1694324642%2FWhats_App_Image_2023_09_10_at_11_13_37_AM_1fe1474172_608c2e299d.jpg&w=384&q=90",
    title : "Yearly PICNIC in the Denguajhar Tea Gardens",
    pad : "14"
},
{
    id: 6,
    img : "https://rabbit_olive_306.pineapplebuilder.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Faurity%2Fimage%2Fupload%2Fv1694324742%2FWhats_App_Image_2023_09_10_at_11_15_27_AM_19ac0e8c89.jpg&w=384&q=90",
    title : "Priyanka Roy, once a Student of JYOTI, is now studying in... "
}

]

const Achievements = () => {
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
    <div className="bg-[#182b51]">
      <div className="container  p-10  text-center mt-10 lg:mt-20">
      <p className="lg:text-4xl text-3xl text-center  text-white pb-2">
        Our Achievements
      </p>

      <Swiper
       modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
       
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mySwipe pt-14  reveal  achievements"
      >
       {data.map((e) => (
                        <SwiperSlide >
                            <AchievementsCard
                                key={e.id}
                                title={e.title}
                                img={e.img}
                                pad = {e.pad}
                                
                                
                            />
                        </SwiperSlide>
                    ))}
      </Swiper>
    </div>
    </div>
    
  );
};

export default Achievements;
