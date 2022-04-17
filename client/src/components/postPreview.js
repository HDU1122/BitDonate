import React, { useEffect } from "react"
import reasonsList from "../lib/reasons.js";
import { Link } from "react-router-dom";

export default function PostPreview({ postId }) {

    const imgUrl = 
    ["https://media.istockphoto.com/photos/poor-indian-children-asking-for-help-picture-id1252924066?b=1&k=20&m=1252924066&s=170667a&w=0&h=qNQJ6tsPPj2A1xdqFrc3gsN-btrNW4CPH1fecRVf2xg=",
"https://i.guim.co.uk/img/media/a4afd3bf28984679b6e78115ad7f9da2411c20ce/0_313_6344_3808/master/6344.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=1fe0f0ea2b83d93ad4234e8e16be8138"]
    const name = "PoorGuy"
    const cause = reasonsList.medical
    const description = "Lorem Ipsum is simply dummy text of the printing and typesettiny dummy text of the printing and typesettiny dummy text of the printing and typesettiny dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into..."
    const donateTot = 100
    const donateCur = 80

    return (
        <Link to={"/post/" + postId}>
            <div className="flex flex-col justify-between rounded-10px border-0.5px border-gray-400 w-400px h-400px hover:border-none hover:shadow-light">
                <img id="img" className="flex-shrink-0 w-full h-[180px] object-cover overflow-hidden border-none rounded-t-10px" src={imgUrl[(postId-1)%imgUrl.length]} />
                <div id='info' className="px-25px h-full">
                    <div id="meta" className="flex justify-between item-baseline pt-15px pb-5px">
                        <div id="name" className="text-gray-600 text-18px font-medium">
                            {name}
                        </div>
                        <Cause cause={cause} />
                    </div>
                    <div id="description" className="h-[130px] text-14px text-gray-400 font-normal overflow-hidden">
                        {description}
                    </div>
                </div>
                <DonationBar current={donateCur} total={donateTot}/>
            </div>
        </Link>
        
    )
}

function Cause({ cause }) {
    return (
        <div className="flex flex-row items-center justify-end space-x-1">
            <div id="icon" className="w-20px h-20px flex justify-center items-center">{cause.icon}</div>
            <div id="cause" className={`h-20px flex items-center text-14px leading-none ${cause.color}`}>{cause.name}</div>
        </div>
    )
}
function DonationBar({ current, total }) {

    useEffect(() => {
    }, [])

    return (
        <div className="relative flex-shrink-0 flex flex-row h-30px rounded-b-10px overflow-clip">
            <div className="absolute w-full h-full flex justify-center items-center text-white text-12px font-semibold">{current} / {total}</div>
            <div className="flex-shrink-0 bg-gold"  style={{ width: `${parseInt(current/total*100)}%` }}></div>
            <div className="bg-lightgold w-full"></div>
        </div>
    )
}