"use client"
import React, {useEffect, useState} from 'react';
import roboto from "@/components/fonts";
import DownloadListStyle from "@/components/downloadList/style";
import ListElementStyle from "@/components/listElement/style";
import Image from "next/image";
import {VideoData} from "@/components/FullPage/FullPage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";

interface ListElementProps {
  videoData: VideoData
  deleteVideo: (url: string, deleteAll:boolean) => void
}

const ListElement: React.FC<ListElementProps> = (props) => {
  const [url, setUrl] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isHoveredTrash, setIsHoveredTrash] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const formatTime=(seconds: number):string=>{
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    const hDisplay = h > 0? `${h.toString().padStart(2, '0')}:` : '';
    const mDisplay= `${m.toString().padStart(2, '0')}:`;
    const sDisplay= s.toString().padStart(2, '0');
    return hDisplay + mDisplay + sDisplay;
  }
  return (
    <div style={{
      ...ListElementStyle.container,
      ...(isHovered && ListElementStyle.containerHover),
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >

      <div style={ListElementStyle.imageContainer}>
        <Image
          alt={"Album Picture"}
          layout="fill"
          objectFit="cover"
          src={`${props.videoData.thumbnail_url}`}
          sizes={"50"}
        />
      </div>
      <div style={ListElementStyle.songTitleContainer}>
        <p style={ListElementStyle.songName} className={roboto.className}>{props.videoData.title}</p>
        <p style={ListElementStyle.author} className={roboto.className}>{props.videoData.author}</p>
      </div>
      <p style={ListElementStyle.time}>{formatTime(parseInt(props.videoData.duration))}</p>
      <div
        style={ListElementStyle.crossContainer}
        onMouseEnter={() => setIsHoveredTrash(true)}
        onMouseLeave={() => setIsHoveredTrash(false)}
        onClick={()=>props.deleteVideo(props.videoData.url, false)}
      >
        <FontAwesomeIcon style={isHoveredTrash?ListElementStyle.trashHover: ListElementStyle.trash} icon={faTrashCan}/>
      </div>
    </div>
  );
};

export default ListElement;
