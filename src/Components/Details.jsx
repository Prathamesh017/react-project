import React from 'react'
import { useSelector } from 'react-redux';
// box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
function Details() {
  const {userData,userloading,updatedData}=useSelector(state=>state.counter);
  const item=updatedData.filter(item=>item.id==userData.id);
 


  return (
    <div className='w-full lg:w-1/2 flex flex-col items-center  p-10 lg:mt-0 mt-10'>
     <p>User Details</p>
       <div className='w-[95vw] lg:w-1/2 h-[250px] space-y-3 bg-indigo-500 shadow-md shadow-lg  shadow-indigo-500/50 py-4 px-4 text-white '>
        <div>
            <p>ToDo ID<span>{userloading ? `  : ${item[0].id}` :"  "}</span></p>
        </div>
        <div>
            <p>ToDo Title<span>{userloading ? `  : ${item[0].title}` :"  "}</span></p>
        </div>
        <div>
            <p>UserId<span>{userloading ? `  : ${item[0].userId}` :"  "}</span></p>
        </div>
        <div>
            <p>Name<span>{userloading ? `  : ${userData.name}` :"  "}</span></p>
        </div>
        <div>
            <p>Email<span>{userloading ? `  : ${userData.email}` :"  "}</span></p>
        </div>

       </div>
    </div>
  )
}

export default Details