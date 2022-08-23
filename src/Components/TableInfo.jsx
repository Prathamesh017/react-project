import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getData ,getUser } from '../Features/CounterSlice';
// import axios from "axios";
function TableInfo() {
const dispatch=useDispatch();

const {loading,updatedData,sort}=useSelector(state=>state.counter);

let datas;
// sorting order
if(!loading){
  if(sort){
    datas=updatedData

  }
  else{
     datas=[...updatedData].reverse();
    
    
  }
  
}
const submitfunc=(id)=>{
  dispatch(getUser(id));

}
useEffect(()=>{
  dispatch(getData());
},[])
  return (
    <>
    {
      loading ? <h1 className='text-red-700 text-xl'>No Items to Display</h1>:
    
    <div className='w-full border border-sky-700 text-sm lg:text-lg '>

    

{/* Title */}
    <div className=' px-1 flex list-none justify-between bg-[#009879] text-left text-[#ffffff] lg:px-3 lg:py-2'>
    <div className=' w-[80px]  lg:min-w-[80px]'>
    <li>ToDoID</li>
    </div>
    <div className= 'w-[100px] lg:w-1/2'>
    <li>Title</li>
    </div>
    <div className='w-[120px]'>
    <li>Status</li>
    </div>
    <div>
    <li>Action</li>
    </div>
    </div>


{/* Body */}
{
  datas.map((item)=>{
    return(
      // <>
      <div key={item.id} className='flex list-none border-t-2 border-slate-900  justify-between bg-[#f3f3f3] text-left text-Gray-700 px-3 py-2'>
    <div>
    <li className='w-[10px] lg:min-w-[50px]'>{item.id}</li>
    </div>
    <div className='w-[100px]  lg:w-1/2 lg:text-base'>
    <li className='break-words'>{item.title}</li>
    </div>
    <div className='lg:text-base'>
    <li>{item.completed?"complete":"Incomplete"}</li>
    </div>
    <div>
     <button className='bg-[#24A0ED] py-1 px-6 rounded-full text-white hover:bg-sky-700 ' onClick={()=>submitfunc(item.id)}>View User</button>
    </div>
    </div>
      // </>
    )
  })
}







    



    
   


   

  

   




   
       {/* </div> */}
    
    </div>
}
    </>
  )
}

export default TableInfo