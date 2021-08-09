import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Home() {
    return (
        <div style={styles} >
            <div style={{textAlign:'center', margin:20, padding:30}} className="container">
                <h1  >Welcome Here</h1>
                <Link style={{textDecoration:"none"}} to="signin">LogIn</Link>
                <br />
                <Link style={{textDecoration:"none"}} to="signup">Signup</Link>
            </div>
        </div>

    )
}


const styles={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
}