"use client"
import React, {useEffect, useState} from 'react';
import FullPageStyle from "@/components/FullPage/style";
import DownloadList from "@/components/downloadList/DownloadList";
import YouTubeInput from "@/components/youtubeInput/YouTubeInput";
export type VideoData = {
  url: string;
  title: string;
  author: string;
  thumbnail_url: string;
  duration: string;
}

const FullPage: React.FC = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const addVideosCallBack =(videoData: VideoData)=>{
    if(isDuplicated(videoData.url)){
      return
    }
    setVideos(prevState => [...prevState, videoData])
  }

  const setLoadingCallBack = (value: boolean) => {
    setLoading(value)
  }

  const deleteVideoCallBack = (url: string, deleteAll:boolean) => {

    setVideos(prevState => prevState.filter(video => video.url !== url))
  }

  const cleanList = ()=>{
      setVideos([])
  }

  const isDuplicated = (videoURL: string) => {
    return videos.some(video => video.url === videoURL)
  }
/*  useEffect(() => {
    console.log('Videos:', videos);
  }, [videos]);*/

  return (
    <div style={FullPageStyle.container}>
      <img src="./images/logo.png" alt="logo" style={FullPageStyle.logo}/>
      <YouTubeInput videos={videos} isDuplicated={isDuplicated} addVideos={addVideosCallBack} loading={loading} setLoading={setLoadingCallBack} />
      <DownloadList videos={videos} addVideos={addVideosCallBack} deleteVideo={deleteVideoCallBack} cleanList={cleanList} loading={loading} setLoading={setLoadingCallBack}/>
    </div>
  );
};

export default FullPage;
