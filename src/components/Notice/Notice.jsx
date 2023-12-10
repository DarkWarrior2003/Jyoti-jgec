import React, { useEffect, useState } from "react";
import "./noticesstyle.css";
import sanityClient from "../../client";
const Notice = () => {
  const [notice, setnotice] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="notice"]{
          title,
          filename{
            asset->{
              _id,
              url
            },
          },
          releaseDate
      }`
      )
      .then((data) => setnotice(data))
      .catch(console.error);
  }, []);

  console.log(notice);
  return (
    <div className=" flex h-screen flex-col items-center p-8 ">
      <h2 className="text-center noticesty text-3xl lg:text-4xl pb-3 lg:pb-4 font-bold text-[#2c4964]">
        NOTICE
      </h2>

      <div className="lg:px-10 px-6 pt-8 pb-10 mt-4  bg-[#01204E] w-full lg:max-w-screen-md rounded-[15px] ">
        {notice?.length === 0 ? (
          <p className=" lg:text-xl pt-10 text-center text-white font-medium">
            Notice not available
          </p>
        ) : (
          notice &&
          notice.map((element, index) => (
            <div className="pb-8 text-white title ">
              <a
                href={element.filename.asset.url}
                target="_blank"
                rel="noreferrer"
                
              >
                <p className=" lg:text-2xl cursor-pointer text-left text-white font-semibold">
                  {element.title}
                </p>
              </a>
              <span className="lg:text-sm text-[10px] lg:text-[12px] text-left font-extralight">
                {element.releaseDate}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notice;
