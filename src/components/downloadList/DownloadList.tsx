"use client"
import React, {useEffect, useState} from 'react';
import roboto from "@/components/fonts";
import DownloadListStyle from "@/components/downloadList/style";
import ListElement from "@/components/listElement/ListElement";
import Text from "@/components/text";
import YoutubeInputStyle from "@/components/youtubeInput/style";
import {VideoData} from "@/components/FullPage/FullPage";
import axiosInstance from "@/services";
import JSZip from "jszip";
import {saveAs} from 'file-saver'
interface ListElementProps {
  videos: VideoData[]
  addVideos: (videoData: VideoData) => void
  deleteVideo: (url: string, deleteAll:boolean) => void
  cleanList: () => void
  loading: boolean
  setLoading: (value: boolean) => void

}

interface DownloadedVideo{
  url: string,
  filename: string,
  blob: Blob
}

const DownloadList: React.FC <ListElementProps>= (props) => {
  const [isClickedBot1, setIsClickedBot1] = useState<boolean>(false);
  const [isHoverBot1, setIsHoverBot1] = useState<boolean>(false);
  const [downloadingBot1, setDownloadingBot1] = useState<boolean>(false)
  const [isClickedBot2, setIsClickedBot2] = useState<boolean>(false);
  const [isHoverBot2, setIsHoverBot2] = useState<boolean>(false);
  const [downloadingBot2, setDownloadingBot2] = useState<boolean>(false)

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const downloadedVideos: DownloadedVideo[] = []
    //todo para cada video de la lista, descargar, luego comprimir y luego descargar
    setDownloadingBot1(true)
    /*console.log(props.videos)*/
    for (const video of props.videos) {
      /*console.log("VIDEO ITERA: ", video.title)*/
      downloadedVideos.push(await handleDownload(video))
    }
    setDownloadingBot1(false)
    /*console.log("CANTIDAD VIDEOS: ", downloadedVideos.length)*/
    if(downloadedVideos.length===1){
      downloadSingleVideo(downloadedVideos[0])
    }else if(downloadedVideos.length>1){
      await zipVideosAndDownload(downloadedVideos)
    }
  };

  const handleDownload = async (video: VideoData):  Promise<DownloadedVideo> => {
    const response = await axiosInstance.post(
      '/api',
      {video_url: video.url},
      {responseType: 'blob'}
    )
    const blob = new Blob([response.data], { type: 'audio/mpeg' });
    const url = URL.createObjectURL(blob);
    const fileName = `${video.title} - ${video.author}.mp3`;
    return {url: url, filename: fileName, blob: blob}
  }

  const downloadSingleVideo = (video: DownloadedVideo) => {
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = video.url;
    a.download = video.filename;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(video.url);
  };

  const zipVideosAndDownload = async (videos: DownloadedVideo[]) => {
    const zip = new JSZip();
    videos.forEach(video => {
      zip.file(video.filename, video.blob)
    });
    const zipBlob = await zip.generateAsync({type: 'blob'});
    saveAs(zipBlob, 'musica.zip');
  }

  /*useEffect(() => {
    console.log("LOS VIDEOS CAMBIARON EN LISTA DE ELEMENTOS")
  }, [props.videos]);*/
  return (
    <div style={DownloadListStyle.container}>
      <div style={DownloadListStyle.titleContainer}>
        <p className={roboto.className}>{`${Text.lista}`}</p>
      </div>
      <div style={DownloadListStyle.songsContainer}>
        {props.videos.map((videoData, i) => (
          <ListElement videoData={videoData} deleteVideo={props.deleteVideo} key={i} />
        ))}
      </div>
      <button
        type="submit"
        style={{
          ...DownloadListStyle.button,
          ...(isHoverBot1 && YoutubeInputStyle.onHover),
          ...(isClickedBot1 && YoutubeInputStyle.onClick)

        }}
        className={`${roboto.className}`}
        disabled={props.loading}
        onMouseDown={() => setIsClickedBot1(true)}
        onMouseUp={() => setIsClickedBot1(false)}
        onMouseEnter={() => setIsHoverBot1(true)}
        onMouseLeave={() => {
          setIsClickedBot1(false)
          setIsHoverBot1(false)
        }}
        onClick={handleSubmit}
      >{downloadingBot1?`${Text.textDownloading}`:`${Text.buttonDownload}`}</button>
      <button
        type="submit"
        style={{
          ...DownloadListStyle.buttonClear,
          ...(isHoverBot2 && YoutubeInputStyle.onHover),
          ...(isClickedBot2 && YoutubeInputStyle.onClick)

        }}
        className={`${roboto.className}`}
        disabled={props.loading}
        onMouseDown={() => setIsClickedBot2(true)}
        onMouseUp={() => setIsClickedBot2(false)}
        onMouseEnter={() => setIsHoverBot2(true)}
        onMouseLeave={() => {
          setIsClickedBot2(false)
          setIsHoverBot2(false)
        }}
        onClick={props.cleanList}
      >{`${Text.textClear}`}</button>

    </div>
  );
};

export default DownloadList;
