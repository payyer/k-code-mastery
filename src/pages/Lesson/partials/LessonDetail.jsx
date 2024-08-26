import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import ReactPlayer from "react-player/lazy";

export default function LessonDetail({ videoUrl }) {
  return (
    <>
      <div className="h-full flex justify-center">
        <ReactPlayer
          url={videoUrl}
          playing
          controls
          light
          height={"100%"}
          width={"100%"}
          playIcon={
            <FaCirclePlay className="text-[80px] bg-primary rounded-full overflow-hidden" />
          }
        />
      </div>
    </>
  );
}
