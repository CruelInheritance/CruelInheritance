import React from "react"
import Video from "../components/video"
import { BsFillCloudDownloadFill, BsGithub } from "react-icons/bs"
import IconWrapper from "../components/icon"
import "../css/main.css"

export default function Home() {
  return (
    <div id="root">
      <div className="textWrapper">
        <h1>Cruel Inheritance</h1>
        <p>
          An atmospheric horror exploration game where you need to try and
          escape the mansion alive.
        </p>
      </div>
      <div className="videoLinkWrapper">
        <div className="linkWrapper">
          <IconWrapper iconSrcUrl={"./cruel_inheritance.zip"}>
            <BsFillCloudDownloadFill size={48} />
          </IconWrapper>
          <IconWrapper
            iconSrcUrl={"https://github.com/CruelInheritance/HauntedMansion"}
          >
            <BsGithub size={48} />
          </IconWrapper>
        </div>
        <Video
          videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
          videoTitle="Official Music Video on YouTube"
        />
      </div>
    </div>
  )
}
