import React, { useState } from "react"
import reasonsList from "../lib/reasons.js"


export default function PostDetail() {
    const title = "asdasdwaasfasd"
    const [img, setImgState] = useState(0)
    const imgUrl = "https://media.istockphoto.com/photos/poor-indian-children-asking-for-help-picture-id1252924066?b=1&k=20&m=1252924066&s=170667a&w=0&h=qNQJ6tsPPj2A1xdqFrc3gsN-btrNW4CPH1fecRVf2xg="
    const images = [imgUrl, imgUrl]
    const name = "PoorGuy"
    const cause = reasonsList.medical
    const description = "Lorem Ipsum is simply dummy text of the printing and typesettiny dummy text of the printing and typesettiny dummy text of the printing and typesettiny dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into rambled it to make a type specimen book. It has survived not only five centuries, but also the leap intorambled it to make a type specimen book. It has survived not only five centuries, but also the leap intorambled it to make a type specimen book. It has survived not only five centuries, but also the leap intorambled it to make a type specimen book. It has survived not only five centuries, but also the leap intorambled it to make a type specimen book. It has survived not only five centuries, but also the leap into"
    const donateTot = 100
    const donateCur = 80

    return (
        <div className="w-full flex flex-row justify-between space-x-30px">
            <div id="left" className="flex flex-col space-y-20px">
                <div id="image" className="flex-col flex-shrink-0">
                    <img
                    src={images ? images[img] : null}
                    alt="Oops, currently no image available for this item."
                    className="w-600px h-500px rounded-12px border-gray-100 border-2 mb-15px overflow-hidden object-contain" />
                    <div className="overflow-hidden flex justify-center w-600px">
                        {images.map((url, index) => (
                            <ImageTile id={index} imgUrl={url} setImgState={setImgState} />
                        ))}
                    </div>
                </div>
            </div>
            <div  id="right" className="w-full flex flex-col space-y-20px">
                <div id="title" className="text-gray-600 text-[30px] font-semibold">
                    {title}
                </div>
                <div id="des" className="w-600px h-max">
                    <div className="text-gray-700 text-[20px] font-medium">Description</div>
                    {description}
                </div>
                <div className="fixed bottom-5 right-10 flex flex-col space-y-5px">
                    <Donate current={donateCur} total={donateTot}/>
                </div>
                
            </div>
        </div>
    )
}

function ImageTile(props) {
    return (
      <button
        onClick={() => props.setImgState(props.id)}
        className={`w-80px h-84px rounded-12px mr-10px border-2 hover:border-blue-300 hover:shadow-inner overflow-hidden ${true ? "border-blue-400" : "border-transparent"}`}
      >
        <img
          className="h-full w-auto m-auto object-cover"
          src={props.imgUrl}
          alt="Oops, currently no image available for this item."
        />
      </button>
    );
  }

  function Donate({ current, total }) {
      function handleDonate() {}
        return (
            <div className="flex flex-row w-full">
                <div className="relative flex-shrink-0 flex flex-row w-500px h-80px rounded-10px overflow-clip mr-30px">                    
                <div className="absolute w-full h-full flex justify-center items-center text-white text-[20px] font-bold">{current} / {total}</div>
                    <div className="flex-shrink-0 bg-gold"  style={{ width: `${parseInt(current/total*100)}%` }}></div>
                    <div className="bg-lightgold w-full"></div>
                </div>
                <div onClick={() => handleDonate()} className="h-80px w-max flex justify-center items-center px-30px border border-gold rounded-10px text-gold text-[22px] text-semibold hover:bg-gold hover:text-white">
                    Donate
                </div>
            </div>
        )
  }