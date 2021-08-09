import React,{useState} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch } from 'react-redux';
import {addUserSignUp} from "../actions/index";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Registration() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const history = useHistory();

    const changeInput = (event)=>{
        event.target.type === "password"?setPassword(event.target.value):setUsername(event.target.value);
    }

    const formSubmit = (event)=>{
        event.preventDefault();
        dispatch(addUserSignUp({username,password}));
        //Here we need to store that username and password 
        setUsername("");
        setPassword("");
        history.push("/signin");
    }
    return (
        <div>
            <h4 style={{textAlign:"center"}}>Register Now</h4>
            <div className="form-wrapper container">
                <form className="reg form-class">
                    <input onChange={changeInput} value={username} className="s-input" type="text" placeholder="Enter username" /> <br />
                    <input onChange={changeInput} value={password} className="s-input" type="password" placeholder="Enter password" /> <br />
                    <button className="bttn btn btn-sm btn-primary" onClick={formSubmit}>Submit</button><br />
                    <Link className="s-input" to="/" >Home</Link>
                </form>
            </div>
        </div>
    )
}
