import React, { useState } from "react";
import axios from "axios";



const UpdateMovie = props => {
    const [movie, setMovie] = useState({
        ...props.updated
    });

    const handleChanges = e => {
        e.persist();
        let value = e.target.value;
        if (e.target.name === "metascore") {
            value = parseInt(value, 10);
        }
        setMovie({
            ...movie,
            [e.target.name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newMovie = {
            ...movie,
            stars: movie.stars.split(",")
        };

        axios
            .put(`http://localhost:5000/api/movies/${movie.id}`, newMovie)
            .then(res => {
                console.log(res.data);
                props.updateMovie(res.data);
                props.history.push(`/movies/${props.match.params.id}`);
            })
            .catch(err => console.log(err));

    }

    return (
        <div className="update-movies">
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label>Title:</label>
                    <input type="text" name="title" value={movie.title} onChange={handleChanges} />
                </div>
                <div className="input">
                    <label>Director:</label>
                    <input type="text" name="director" value={movie.director} onChange={handleChanges} />
                </div>
                <div className="input">
                    <label>Metascore:</label>
                    <input type="number" name="metascore" value={movie.metascore} onChange={handleChanges} />
                </div>
                <div className="input">
                    <label>Stars:</label>
                    <input type="text" name="stars" value={movie.stars} onChange={handleChanges} />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default UpdateMovie;