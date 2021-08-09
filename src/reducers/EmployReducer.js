const initialState = {
    employees:[]
}

const EmployReducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_EMPLOYEE" :
            const {id, data} = action.payload;
            return{
                ...state,
                employees:[
                    ...state.employees,
                    {
                        id:id,
                        data:data,
                    }
                ]
            }
            
        case "DELETE_EMPLOYEE":
            const {employeeId} = action.payload;
            const employees = state.employees.filter(emp=>emp.id!==employeeId);
            return{
                ...state,
                employees:employees
            }
            
        default:return state;
    }
}

export default EmployReducer;