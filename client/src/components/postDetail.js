import React, { useState } from "react"
import reasonsList from "../lib/reasons.js"


export default function PostDetail() {
    const title = "asdasdwaasfasd"
    const [img, setImgState] = useState(0)
    const images = []
    const imgUrl = "https://media.istockphoto.com/photos/poor-indian-children-asking-for-help-picture-id1252924066?b=1&k=20&m=1252924066&s=170667a&w=0&h=qNQJ6tsPPj2A1xdqFrc3gsN-btrNW4CPH1fecRVf2xg="
    const name = "PoorGuy"
    const cause = reasonsList.medical
    const description = "Lorem Ipsum is simply dummy text of the printing and typesettiny dummy text of the printing and typesettiny dummy text of the printing and typesettiny dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into..."
    const donateTot = 100
    const donateCur = 80

    return (
        <div className="flex flex-row spacex-20px">
            <div id="left" className="">
            <div id="image" className="flex-col">
                <img
                src={images ? images[img] : null}
                alt="Oops, currently no image available for this item."
                className="w-600px h-500px rounded-12px border-gray-100 border-2 mb-15px overflow-hidden object-contain" />
                <div className="overflow-hidden flex justify-center w-600px">
                    {images.map(id => (
                        <ImageTile id={id} />
                    ))}
                </div>
            </div>
                <div id="des">

                </div>
            </div>
            <div  id="right" >
                <div id="title" className="text-gray-600 text-[30px] font-semibold">
                    {title}
                </div>
                <div id="donate">

                </div>
            </div>
        </div>
    )
}

function ImageTile(props, { setImgState }) {
    return (
      <button
        onClick={() => setImgState(props.id)}
        className={`w-80px h-84px rounded-12px mr-10px border-2 hover:border-blue-300 hover:shadow-inner overflow-hidden ${true ? "border-blue-400" : "border-transparent"}`}
      >
        <img
          className="h-full w-auto m-auto object-cover"
          src={props.img}
          alt="Oops, currently no image available for this item."
        />
      </button>
    );
  }