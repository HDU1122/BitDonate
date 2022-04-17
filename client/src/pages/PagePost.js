import React from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import PostDetail from "../components/postDetail";

export default function PagePostIndex() {

    return (
            <Routes>
                <Route path="/" element={<PagePosts />}/>
                <Route path=":id" element={<PagePost />}/>
            </Routes>
        );
}

function PagePosts() {
    return <div>Posts Gallery</div>
}

function PagePost() {
    let { id } = useParams();
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <PostDetail id={id} />
            </div>
        </div>)
}