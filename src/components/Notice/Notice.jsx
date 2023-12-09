import React, {useEffect ,useState} from "react";
import "./noticesstyle.css";
import sanityClient from "../../client"
const Notice = () => {
    const [notice, setnotice] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="notice"]{
          title,
          
          releaseDate
           
          
      }`
      )
      .then((data) => setnotice(data))
      .catch(console.error);
  }, []);
 
  
  console.log(notice);
  return (
    <div className=" flex h-screen flex-col items-center p-4 ">
      <h2 className="text-center noticesty text-3xl lg:text-4xl font-bold text-[#2c4964]">NOTICE</h2>
      
      <div className="px-16 pb-10 mt-4  bg-[#01204E] w-full lg:max-w-screen-md rounded-[15px] ">
      
      { notice?.length===0 ?<p className=" lg:text-xl pt-10 text-center text-white font-medium">
            Notice not available
          </p> :notice && notice.map((element,index)=>(
        <div className="pt-14 text-white title ">
          <p className=" lg:text-2xl cursor-pointer text-left text-white font-medium">
            {element.title}
          </p>
          <span className="text-sm lg:text-[12px] text-left font-extralight">
            {element.releaseDate}
          </span>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default Notice;
