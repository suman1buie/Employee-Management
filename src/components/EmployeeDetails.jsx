import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Invalid from './Invalid';

export default function EmployeeDetails(props) {
    let id = props.match.params.id;
    const listOfEmployees = useSelector((state)=>state.EmployReducer.employees);
    const emp = listOfEmployees.filter((user)=>user.id === id);
    const token = useSelector(state=>state.LoginReducer.id);
    if(token){
        return (
            <div className="container">
                <h3 style={{textAlign:"center",margin:30}}>Employee details</h3>
                <div className="cart">
                    <div className="in container">
                        Name : <h5 style={{display:"inline"}}>{emp[0].data.name}</h5> <br />
                        Joining date : <p style={{display:"inline"}}>{emp[0].data.date}</p> <br />
                        Department : <p style={{display:"inline"}}>{emp[0].data.department}</p>
                    </div>
                </div>
                <Link style={{marginLeft:480,marginTop:100}} to="/emplist">Back</Link>
            </div>
        )
    }else{
        return <Invalid />;
    }
}
