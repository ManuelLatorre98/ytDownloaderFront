"use client"
import React, {useEffect, useState} from 'react';
import YoutubeInputStyle from "@/components/youtubeInput/style";
import Text from "@/components/text";
import roboto from "@/components/fonts";
import axios from 'axios';
import {VideoData} from "@/components/FullPage/FullPage";
import axiosInstance from "@/services";


interface YouTubeInputProps {
  addVideos: (videoData: VideoData) => void
  videos: VideoData[]
  isDuplicated: (videoURL: string) => boolean
  loading: boolean
  setLoading: (value: boolean) => void
}

const YouTubeInput: React.FC<YouTubeInputProps> = (props) => {
  const [url, setUrl] = useState<string>('');
  const [validUrl, setValidUrl] = useState<boolean>(true);
  const [isRepeated, setIsRepeated] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  const fetchData = async () => {
    props.setLoading(true)
    try {
      const response = await axiosInstance.get(`/api?video_url=${encodeURIComponent(url)}`);
      return response.data
    } catch (error) {
      console.error('Error fetching data:', error);
    }finally {
      props.setLoading(false)
    }
  };

  const validateYoutubeUrl = async () => {
    const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be|music\.youtube\.com)\/.+$/
    const isDuplicated =  props.isDuplicated(url)
    if (!youtubeRegex.test(url) || isDuplicated) {
      setValidUrl(false)
      if (isDuplicated) {
        setIsRepeated(true)
      }
      return false
    }

    try {
      await axios.get(`https://www.youtube.com/oembed?url=${url}&format=json`)
      return true
    } catch (e) {
      setValidUrl(false)
      return false
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validUrl) {
      setValidUrl(true)
    }
    if(isRepeated){
      setIsRepeated(false)
    }
    setUrl(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid = await validateYoutubeUrl()
    try {
      if (valid) {
        const videoData = await fetchData()
        props.addVideos(videoData)
        //addVideos(prevState => [...prevState, videoData])
      }
    } catch (e) {
      console.log(e)
    }
  };
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>)=>{
    event.target.select()
  }


  return (
    <div style={YoutubeInputStyle.container}>
      <form style={YoutubeInputStyle.form} onSubmit={handleSubmit}>
        <label style={YoutubeInputStyle.titleLabel} className={`${roboto.className}`}
               htmlFor="youtubeUrl">{`${Text.ingreseURL}`}</label>
        <input
          type="text"
          id="youtubeUrl"
          style={validUrl ? YoutubeInputStyle.inputText : {...YoutubeInputStyle.inputText, ...YoutubeInputStyle.invalidInputText}}
          value={url}
          placeholder={`${Text.placeholderIngresoURL}`}
          onChange={handleChange}
          autoComplete={'off'}
          onFocus={handleFocus}
        />
        {!validUrl && !isRepeated && <p style={YoutubeInputStyle.errorText}>{Text.textErrorVideoNotFound}</p>}
        {isRepeated && <p style={YoutubeInputStyle.errorText}>{Text.textErrorVideoRepeated}</p>}
        <button
          type="submit"
          style={{
            ...YoutubeInputStyle.button,
            ...(isHover && YoutubeInputStyle.onHover),
            ...(isClicked && YoutubeInputStyle.onClick)
          }}
          className={`${roboto.className}`}
          disabled={props.loading}
          onMouseDown={() =>  setIsClicked(true)}
          onMouseUp={() => setIsClicked(false)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => {
            setIsClicked(false)
            setIsHover(false)
          }}
        >
          {props.loading?`${Text.textLoading}`: `${Text.buttonSelect}`}
        </button>
      </form>
    </div>
  );
};

export default YouTubeInput;
