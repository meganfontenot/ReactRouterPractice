import React from 'react';
import { Link } from "react-router-dom";

function Home () {
    return(
        <div>
            <h1> Avengers database </h1>
            <h3> Welcome to the Super Secret Boyband! </h3>
            <Link to="/avengers">Enter</Link>
        </div>
    );
}

export default Home;