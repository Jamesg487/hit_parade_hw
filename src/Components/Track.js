import './Track.css';

const Track = ({track, index, onImageClick}) => {

    const audio = new Audio(track.link[1].attributes.href)

    const handleClick = () => {
        onImageClick(audio)
       }

    

    return (
        
        <li className='list-items'>
            <label htmlFor="img" className='img-label'>click image to hear preview</label> 
            <img name="img" src={track["im:image"][2].label} alt="track" className='img' onClick={handleClick}/> 
            <h2 className='position'>{index + 1}.</h2> 
            <p className='track-info'>{track["im:name"].label} - {track["im:artist"].label}</p>
        </li>
  
        )
}

export default Track;