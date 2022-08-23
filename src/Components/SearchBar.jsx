import React from "react";
import {useDispatch} from "react-redux";
import {sortOrder,inSearch} from "../Features/CounterSlice";

function SearchBar() {
const dispatch=useDispatch();
const onChange=(order)=>{
  dispatch(sortOrder({type:{order}}));
}
const searchFunc=(searchkey)=>{
 dispatch(inSearch(searchkey));
}
// dispatch(sortOrderASEC());
  return (
    <div className="w-full flex flex-col space-y-4">
      <div>
        <h2 className="text-xl text-sky-500 md:text-3xl">TodoList</h2>
      </div>
      <div className="flex flex-row justify-between items-center">
      <div>
        <select name="cars" id="cars" onChange={(e)=>{onChange(e.target.value)}} className="bg-sky-700 md:p-2 text-white text-sm py-1">
          <option selected={true} disabled="disabled">Select Order</option>
          <option value="ASCE">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>

      <div>
        <input type="text" placeholder="search" onChange={(e)=>searchFunc(e.target.value)} className="border border-slate-700 px-4 md:py-2 md:px-8 rounded-full"></input>
      </div>
      </div>
    </div>
  );
}

export default SearchBar;
