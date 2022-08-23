import React from 'react'
import SearchBar from './SearchBar'
import TableInfo from './TableInfo'
function Table() {
  return (
    <div className='w-full lg:w-1/2  p-4 space-y-4'>
        <SearchBar></SearchBar>
        <TableInfo></TableInfo>
        {/* <Tables></Tables> */}

    </div>
  )
}

export default Table