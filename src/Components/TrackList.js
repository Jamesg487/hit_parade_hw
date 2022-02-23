import Track from "./Track"
import './TrackList.css';

const TrackList = ({tracks, onImageClick}) => {
    const trackListNodes = tracks.map((track, index) => {
        return <Track track={track} index={index} onImageClick={onImageClick} key={track.id.attributes["im:id"]}/>
      })
  
    return (
      <ul className="ul-box">
        {trackListNodes}
      </ul>
    )
}

export default TrackList;