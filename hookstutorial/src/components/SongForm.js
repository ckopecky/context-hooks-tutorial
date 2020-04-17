import React, { useState } from 'react';

const SongForm = ({addSong}) => {
    const [ title, setTitle ] = useState('');
    const [ artist, setArtist ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title, artist)
        setTitle('');
        setArtist('');
    }


    const handleChange = (e) => {
        if(e.target.name === "artist") {
            setArtist(e.target.value);
        }
        else {
            if(e.target.name === "title") {
                setTitle(e.target.value);
            }
        }
    }

    return (
        <form className="artist-form" onSubmit={handleSubmit}>
            <div>
                <label>Artist Name:</label>
                <input name="artist" value={artist} onChange={handleChange} type="text" placeholder="i.e. The Beatles..."/>
            </div>
            <div>
                <label>Title of Song:</label>
                <input name="title" value={title} onChange={handleChange} type="text" placeholder="i.e. Hey Jude..." />
            </div>
            <button>Add Song</button>
        </form>
    );
};

export default SongForm;