import { createSlice } from '@reduxjs/toolkit'
 import axios from 'axios'
 import { createAsyncThunk} from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';


const initialState={
    loading:false,
    data:[],
    sort:true,
    searchKey:"",
    updatedData:[],
    userData:[],
    userloading:false,
}
export const getData=createAsyncThunk('/counter/getData',async()=>{
   return  fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10')
  .then((response)=>response.json());
}
)
export const getUser=createAsyncThunk('/counter/getUser',async(id)=>{
  return  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
 .then((response)=>response.json());
}
)


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    sortOrder:(state,action)=>{
      if(action.payload.type.order=="ASCE"){
    
        state.sort=true
      }
      else if(action.payload.type.order="DESC"){
     
        state.sort=false
      }

    },
    inSearch:(state,action)=>{
         state.searchKey=action.payload.toLowerCase();


        if(state.searchKey.startsWith("incomplete",0,10)){
          state.updatedData=state.data.filter((item)=>{
            return item.completed===false
          })
        }
        else if(state.searchKey.startsWith("complete",0,8)){
          state.updatedData=state.data.filter((item)=>{
            return item.completed===true
          })
        }
        else{

          state.updatedData=state.data.filter((item)=>{
            return ((item.title.includes(state.searchKey) || item.id===state.searchKey*1)) ; 
          })
        }



        
         
        
    }
   
    
    
  },
  extraReducers:(builder)=>{
    builder.addCase(getData.pending,(state)=>{
     
        state.loading=true
    })
    builder.addCase(getData.fulfilled,(state,action)=>{
   
      state.loading=false
      state.data=action.payload
      state.updatedData=state.data
      
    })
    builder.addCase(getData.rejected,(state)=>{
        state.loading=true
        state.data=[]
    })

  
  builder.addCase(getUser.pending,(state)=>{
     
      state.userloading=false
  })
  builder.addCase(getUser.fulfilled,(state,action)=>{
 
    state.userData=action.payload
    state.userloading=true
    
    
  })
 
    
    
  }
 })


// // Action creators are generated for each case reducer function
export const { sortOrder ,inSearch} = counterSlice.actions

export default counterSlice.reducer