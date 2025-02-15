import React, {useState} from 'react'

const YouTubeInput: React.FC =()=>{
  const [url, setUrl] = useState()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Submited URL", url)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={"youtubeUrl"}>Ingrese URL del video de youtube</label>
        <input
          type="text"
          id="youtubeUrl"
          value={url}
          onChange={handleChange}
          placeholder={"https://www.youtube.com/watch?v=..."}
        />
        <button type="submit">Submit</button>
      </form>
      {url && (
        <div>
          <p>Preview:</p>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${new URL(url).searchParams.get('v')}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  )
}

export default YouTubeInput
