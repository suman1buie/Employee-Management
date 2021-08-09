import React from 'react'
import {Nav} from "react-bootstrap"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {deleteToken} from "../actions/index";
import { UsergroupDeleteOutlined, LogoutOutlined} from "@ant-design/icons"

export default function NavBar() {
  const history = useHistory();
  const token = useSelector(state => state.LoginReducer.id);
  const dispatch = useDispatch();

    const clearUser = ()=>{
      dispatch(deleteToken());
      history.push("/");
    }
    
    return (
    <Nav className="nav-class">
        <h4 className="content" >
          <Link style={{color:"white",textDecoration:"none"}} to="/">
            Employee Management 
            <UsergroupDeleteOutlined style={{marginLeft:10,marginBottom:40}} />
          </Link>
        </h4>
        {
          token &&
          <h3 style={{
            marginLeft:"95%",
            marginTop:"-80px",
            color:"white",
            }}>
            
          <LogoutOutlined 
          onClick={clearUser}/>
          </h3>
        }
      </Nav>
    )
}
