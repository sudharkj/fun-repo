import React from "react";

import VideoListItem from "./video_list_item";

export default ({videos, onVideoSelect}) => {
    if (!videos || !videos.length) {
        return <div></div>;
    }

    const videoItems = videos.map(video => {
        return (
            <VideoListItem
                onVideoSelect={onVideoSelect}
                key={video.etag}
                video={video}/>
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};