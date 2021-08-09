const initialState = {
    id:null,
}

const LoginReducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_TOKEN":
            const {userId} = action.payload;
            return{
                ...state,
                id:userId,
            }

        case "DELETE_TOKEN":
            return{
                ...state,
                id:null,
            }
            
        default:return state;
    }
}

export default LoginReducer;