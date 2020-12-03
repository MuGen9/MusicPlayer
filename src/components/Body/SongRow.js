import React from 'react';
import './SongRow.scss';

function SongRow({ track, playSong }) {
    const handleClick = () => {
        playSong(track.id)
    }

    return (
        <div className="songRow" onClick={handleClick}>
            <img className="songRow__album" src={track.album.images[0].url} alt="" />
            <div className="songRow__info">
                <h3>{track.name}</h3>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow;
