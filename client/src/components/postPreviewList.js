import React from "react";
import PostPreview from "./postPreview";

export default function PostPreviewList() {
    const postIds = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-wrap gap-60px">
                {
                    postIds.map(id => (
                        <PostPreview key={id} postId={id} />
                    ))
                }
            </div>
        </div>
    )
}