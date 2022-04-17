import React, { useState } from "react"
import Form, {InputField, SelectionField} from "../components/form"
import reasonsList from "../lib/reasons.js";
import uploadImage from "../firebase/imageUpload";

export default function CreateDonate() {

    const reasons = ["medical", "poverty", "war", "food"]

    const [title, setTitleState] = useState("");
    const [totalAmount, setTotalAmount] = useState(0)
    const [description, setDescriptionState] = useState("");
    const [reason, setReasonState] = useState(reasons[0]);

    const [images, setImages] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);

    async function handleCreatePost() {
        
        const img_arr_size = images.length;

        let url_array = []

        if(img_arr_size >= 1) {
            let url_1 = await uploadImage(images[0])
            url_array.push(url_1)
        }

        if(img_arr_size >= 2) {
            let url_2 = await uploadImage(images[1])
            url_array.push(url_2)
        }

        if(img_arr_size >= 3) {
            let url_3 = await uploadImage(images[2])
            url_array.push(url_3)
        }

        if(img_arr_size >= 4) {
            let url_4 = await uploadImage(images[3])
            url_array.push(url_4)
        }

        if(img_arr_size >= 5) {
            let url_5 = await uploadImage(images[4])
            url_array.push(url_5)
        }

        if(img_arr_size >= 6) {
            let url_6 = await uploadImage(images[5])
            url_array.push(url_6)
        }
        
        console.log("url", url_array)
    }

    function handleUploadImage(event) {
        setImages([...images, ...event.target.files])
        const newUrls = [...event.target.files].map((file, key) => { return URL.createObjectURL(file) })
        setImageUrls([...imageUrls, ...newUrls])
    }


    return (
        <div className="w-full">
            <div className="text-[30px] text-gray-600 font-semibold mt-10px mb-20px ml-10px">Start A Donation</div>
            <div className="w-full h-max bg-white pt-35px pr-25px pl-25px pb-30px rounded-25px space-y-50px">
                <Form id="title"
                    label="Title"
                    placeholder="Brief summary of reason"
                    value={title}
                    onChange={(event) => setTitleState(event.target.value)}
                    type="text"
                    width={750}
                    required={true} />
                <Form id="amount"
                    label="Amount Needed"
                    placeholder="Amount of donation needed"
                    value={totalAmount}
                    onChange={(event) => setTotalAmount(event.target.value)}
                    type="number"
                    width={750}
                    required={true} />
                <Form id="reason"
                    label="Reason"
                    formType="selection"
                    options={reasons}
                    selected={reason}
                    onChange={setReasonState}
                    required={true} />
                <div className='flex flex-col justify-start item-start w-800px'>
                    <PhotoUpload urls={imageUrls} handleUploadImage={(event) => handleUploadImage(event)} />
                </div>
                <Form id="description"
                    label="Description"
                    width={750}
                    height={300}
                    placeholder="Description of the item"
                    value={description}
                    onChange={(event) => setDescriptionState(event.target.value)}
                    type="text"
                    required={true} />
                <div className='flex flex-row justify-end mt-30px'>
                    <button onClick={() => handleCreatePost()} className="w-150px h-50px rounded-10px bg-blue-400 text-18px text-white bottom-0 right-0 mb-30px hover:bg-blue-500 active:bg-blue-700">
                        Post
                    </button>
                </div>
            </div>
        </div>
            
    )
}


function PhotoPreview(props) {
    return (
        props.main ?
            <div className="w-full h-200px rounded-8px">
                <img src={props.imgUrl} className="w-full h-full object-contain" />
            </div> :
            <div className="w-100px h-80px rounded-8px">
                <img src={props.imgUrl} className="w-full h-full object-cover" />
            </div>
    );
}

function UploadImage(props) {

    return (
        <div className="relative w-24px h-24px">
            <input type="file" onChange={(event) => props.handleUploadImage(event)} multiple className="absolute block opacity-0 z-20 w-24px h-24px left-0 top-0" />
            <div className="absolute z-0 w-24px h-24px left-0 top-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11.5239H22" stroke="#9CA3AF" stroke-width="3" stroke-linecap="round"/>
                    <path d="M12 22L12 2" stroke="#9CA3AF" stroke-width="3" stroke-linecap="round"/>
                </svg>
            </div>
        </div>
    )
}

function PhotoUpload(props) {

    // const images = props.urls.map((url) => (<PhotoPreview imgUrl={url} />))
    const arr = [0, 1, 2, 3, 4, 5]
    const [select, setSelected] = useState(0)
    return (
        <div>
            <label className='avenir-med text-14px text-left'>
                Photos:
            </label>
            <div className="flex flex-row space-x-30px">
                <div className='w-full h-200px bg-white rounded-12px border-solid border-gray-100 border-2'>
                    {props.urls.length != 0 ? <PhotoPreview imgUrl={props.urls[select]} main={true} /> : ''}
                </div>
                <div className="flex-shrink-0 grid grid-cols-3 grid-rows-2 gap-x-28px gap-y-20px mt-16px">
                    {/*images*/}
                    {arr.map((element) => (
                        element === props.urls.length ?
                            <div className='w-[112px] h-80px bg-gray-100 rounded-8px overflow-hidden grid items-center justify-center' key={element}>
                                <UploadImage handleUploadImage={(event) => props.handleUploadImage(event)}/>
                            </div> :
                            <div type='button' onClick={() => setSelected(element)} className='w-[112px] h-80px bg-gray-100 rounded-8px overflow-hidden grid items-center justify-center hover:bg-blue-100' key={element}>
                                {element < props.urls.length ? <PhotoPreview imgUrl={props.urls[element]} main={false} /> : ""}
                            </div> 
                    ))}
                </div>
            </div>
            
        </div>
    );
}