import React, { useState, useEffect } from 'react';
import SongForm from './SongForm';

const Songlist = () => {

    const [ songs, setSongs ] = useState([]);

    useEffect(() => {
        setSongs([{artist: 'The Beatles', title: 'Let It Be',  id: 1}, {artist: 'Sixpence None the Richer', title:'Kiss Me', id: 2}, { artist: 'Taylor Swift', title: 'Love Story', id: 3}])
    }, [songs])

    const addSong = (title, artist) => {
        const id = (songs[songs.length - 1].id + 1)
        console.log(artist, title, id)
        setSongs([...songs, {title, artist, id}])
    }
    return (
        <div className="song-list">
            <ul>{ songs.map(song => {
                return (
                    <li>
                        <span>{ song.artist }: </span>
                        <span>{ song.title }</span>
                    </li>
                )
            })}
            </ul>
            <SongForm addSong={addSong} />
        </div>
    );
};

export default Songlist;