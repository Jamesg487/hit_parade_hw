import {useState, useEffect, useRef} from 'react';
import TrackList from '../Components/TrackList';

const ChartContainer = () => {
    const [tracks, setTracks] = useState([])
    const imageRef = useRef(0)
    
    useEffect(() => {
        getTracks();
      }, [])

    const onImageClick = (audio) => {        
        imageRef.current = imageRef.current + 1
        imageRef.current % 2 === 0 ? audio.pause() : audio.play();
    }

    const getTracks = function(){
     fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(res => res.json())
    .then(tracks => setTracks(tracks.feed.entry))
    }

    return (
        <div className="main-container">
            <TrackList tracks={tracks} onImageClick={onImageClick}/>
        </div>
    )
}

export default ChartContainer;