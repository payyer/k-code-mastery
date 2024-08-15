import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import ReactPlayer from "react-player/lazy";

export default function LessonDetail() {
  return (
    <>
      <div className="h-[458px] flex justify-center">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=hO2FvV09F-A"
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

      <div className="p-12">
        Text-Editor:
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          facere a eveniet unde ab provident? Numquam a mollitia, nulla quisquam
          distinctio officia sunt beatae, expedita architecto provident in ab
          error? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Nulla, harum ut? Consequuntur officiis unde asperiores ducimus quis
          quam ratione culpa aperiam sunt maxime repellendus labore ex, ab
          cupiditate placeat nisi.
        </div>
      </div>
    </>
  );
}
