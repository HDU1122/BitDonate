import React from "react";
import PostPreviewList from "../components/postPreviewList";

export default function PageHome() {
    return (
        <div className="flex flex-col">
            <div className="text-[30px] text-gray-600 font-semibold mt-10px mb-20px ml-10px">Active Donations</div>
            <PostPreviewList />
        </div>
    )
}