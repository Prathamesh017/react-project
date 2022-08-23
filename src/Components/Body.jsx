import React from 'react'
import Table from './Table'
import Details from './Details'
function Body() {
  return (
    <div className='w-full  flex  flex-col md:flex-row justify-between md:space-x-6 md:py-6 md:px-8 mt-6 md:mt-10'>
        <Table></Table>
        <Details></Details>
    </div>
  )
}

export default Body