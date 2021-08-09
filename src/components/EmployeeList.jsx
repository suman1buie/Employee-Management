import React,{useState} from 'react'
import { EditOutlined, DeleteOutlined, UserAddOutlined} from "@ant-design/icons"
import {addEmployee, deleteEmployee} from "../actions/index"
import {useDispatch , useSelector} from "react-redux"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Invalid from "../components/Invalid";

export default function EmployeeList() {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [date, setDate] = useState('');
    const dispatch = useDispatch();

    const listOfEmployees = useSelector((state)=>state.EmployReducer.employees);
    const token = useSelector(state=>state.LoginReducer.id);

    const editEmployee=(eId)=>{
        const needToEditEmp = listOfEmployees.filter((emp)=>emp.id===eId)[0];
        dispatch(deleteEmployee(eId));
        setName(needToEditEmp.data.name);
        setDepartment(needToEditEmp.data.department);
        setDate(needToEditEmp.data.date);
    }

    const changeDate = (event)=>{
        let pickDate = (event.target.value).toString();
        setDate(pickDate);
    }
    const changeName = (event)=>{
        setName(event.target.value);
    }
    const changeDepartment=(event)=>{
        setDepartment(event.target.value);
    }

    const addEmp = (event)=>{
        event.preventDefault();
        if(name.length<=0){
            alert("Please Enter a name");
        }else if(department.length<=0){
            alert("Please Enter a Department");
        }else if(date.length<=0){
            alert("Please Enter a joining date");
        }else{
            dispatch(addEmployee({name,department,date}));
            setName('');
            setDate('');
            setDepartment('');
        }
    }


    if(!token){
        return <Invalid />
    }else{
        return (
            <>
                <div className="container">
                    <h2 style={{textAlign:"center",margin:30,padding:30}}>List of Employees</h2>
                    <div className="input-class conatiner">
                        <input onChange={changeName} type="text" placeholder="name ..." value={name}/>
                        <input onChange={changeDepartment} type="text" placeholder="department..." value={department}/>
                        <input type="date" value={date} onChange={changeDate} /> 
                        <div className="upper">
                            <UserAddOutlined onClick={addEmp} style={{marginTop:10,color:"red"}} />
                        </div>
                    </div>
                    {listOfEmployees.map(emp=>(
                        <div key={emp.id}>
                        <div className="container" >
                            <div className="itemitem"  >
                                <h5 style={{display:"inline"}}>{emp.data.name}</h5>
                                <p style={{display:"inline"}}>{emp.data.department}</p>
                                <p style={{display:"inline"}}>{emp.data.date}</p>
                                <div >
                                <Link className="btn btn-dark btn-sm my-1" to={`/detail/${emp.id}`}>
                                    Sow Details
                                </Link>
                                    <DeleteOutlined style={{color:"red",marginLeft:20}} onClick={()=>dispatch(deleteEmployee(emp.id))} />
                                    <EditOutlined style={{color:"blue",marginLeft:20}} onClick={()=>editEmployee(emp.id)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </>
        )
    }
}
