

export const addEmployee = (newEmployee)=> {
    return{
        type:"ADD_EMPLOYEE",
        payload:{
            id:new Date().getTime().toString(),
            data:newEmployee,
        }
    }
}


export const deleteEmployee = (employeeId)=> {
    return{
        type:"DELETE_EMPLOYEE",
        payload:{
            employeeId:employeeId,
        }
    }
}

export const addUserSignUp = (newUser)=>{
    return{
        type:"REGISTER",
        payload:{
            id:new Date().getTime().toString(),
            user:newUser,
        }
    }
}


export const addToken = (token) =>{
    return{
        type:"ADD_TOKEN",
        payload:{
            userId:token,
        }
    }
}

export const deleteToken = () =>{
    return{
        type:"DELETE_TOKEN",
    }
}