import React, { useState } from "react"
import Form, {InputField, SelectionField} from "../components/form"
import reasonsList from "../lib/reasons.js";

export default function CreateDonate() {
    function handleCreatePost() {
        
    }

    const reasons = ["medical", "poverty", "war", "food"]

    const [title, setTitleState] = useState("");
    const [description, setDescriptionState] = useState("");
    const [reason, setReasonState] = useState(reasons[0]);

    return (
        <div className="w-full">
            <div className="text-[30px] text-gray-600 font-semibold mt-10px mb-20px ml-10px">Start A Donation</div>
            <div className="w-full h-max bg-white pt-35px pr-25px pl-25px pb-30px rounded-25px space-y-50px">
                <Form id="title"
                    label="Title"
                    placeholder="Name of the item"
                    value={title}
                    onChange={(event) => setTitleState(event.target.value)}
                    type="text"
                    width={750}
                    required={true} />
                <Form id="reason"
                    label="Reason"
                    formType="selection"
                    options={reasons}
                    selected={reason}
                    onChange={setReasonState}
                    required={true} />
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