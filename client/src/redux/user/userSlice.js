import {createSlice} from '@reduxjs/toolkit';


const initialState={
    currentUser:null,
    error:null,
    loading:false,
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        signInStart:(state )=>{
            state.loading=true
        },
        signInSucess:(state,action)=>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error=null;

        },
        signInFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        UpdateUserStart:(state)=>{
            state.loading=true;
        },
        UpdateUserSuccess:(state,action)=>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error=null
        },
        UpdateUserFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
           
        }

    }
      
});

export const {signInStart,
    signInSucess,
    signInFailure,
    UpdateUserStart,
    UpdateUserFailure,
    UpdateUserSuccess,
}=userSlice.actions;
export default userSlice.reducer;