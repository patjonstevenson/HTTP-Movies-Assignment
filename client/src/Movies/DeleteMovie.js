import React, { useEffect } from "react";
import axios from "axios";

const DeleteMovie = props => {
    useEffect(() => {
        axios
            .delete(`http://localhost:5000/api/${props.match.params.id}`)
            .then(res => console.log(res))
            .catch(err => console.log("Error deleting movie: ", err));
    }, [])
    return (
        <div>
            <h2>Deleting movie...</h2>
        </div>
    );
}

export default DeleteMovie;