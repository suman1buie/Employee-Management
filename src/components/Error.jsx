import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Error() {
    return (
        <div className="container">
            <h1 style={{textAlign:"center"}}>Error Page</h1>
            <div className="outer-div container">
                <div className="message">
                    <p>Something went wrong. please <Link style={{textDecoration:"none"}} to="/signup">SignUp</Link> or <Link style={{marginTop:20,textDecoration:"none"}} to="/signin">Login</Link> again</p>
                    <br />
                    
                </div>
            </div>
        </div>
    )
}
