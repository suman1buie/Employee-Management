const initialState = {
    users:[],
}

const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case "REGISTER":
            const {id, user} = action.payload;
            return{
                ...state,
                users:[
                    ...state.users,
                    {
                        id:id,
                        user:user,
                    }
                ]
            }
        default:return state;
    }
}

export default userReducer;