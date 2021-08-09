import React from 'react'
import { Link } from 'react-router-dom';

export default function Invalid() {
    return (
        <div className="error container">
            <h2>Error :(</h2>
                <h4>You need to 
                    <Link to="/signin">Log In</Link>  
                first</h4> 
        </div>
    )
}

