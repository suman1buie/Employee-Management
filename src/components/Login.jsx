import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useSelector,useDispatch } from 'react-redux';
import {addToken} from "../actions/index";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    let history = useHistory();
    let users = useSelector(state=>state.userReducer.users);
    const dispatch = useDispatch();

    const changeInput = (event)=>{
        event.target.type === "password"?setPassword(event.target.value):setUsername(event.target.value);
    }

    const formSubmit = (event)=>{ 
        event.preventDefault();
        let logInUser = users.filter(user=>user.user.username === username && user.user.password === password);
        if(logInUser.length < 1){
            history.push("/error");
        }else{
            dispatch(addToken(logInUser[0].id));
            setUsername("");
            setPassword("");
            history.push("/emplist");
        }
    }
    return (
        <>
            <h4 style={{textAlign:"center"}} >LogIn Now</h4>
            <div className="form-wrapper container">
                <form className="signin">
                    <input onChange={changeInput} value={username} className="s-input" type="text" placeholder="Enter username" /> <br />
                    <input onChange={changeInput} value={password} className="s-input" type="password" placeholder="Enter password" /> <br />
                    <input className="bttn btn btn-sm btn-primary" type="submit" onClick={formSubmit} /><br />
                    <Link className="s-input" to="/" >Home</Link>
                </form>
                
            </div>
        </>
    )
}
