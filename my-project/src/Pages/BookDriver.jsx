import React from 'react'

function BookDriver() {
  return (

    <>
    <div className="flex flex-row items-center space-x-10">
    <div className="container bg-slate-900  h-[250px] w-[350px] ml-4 mt-10 rounded-x overflow-auto" >
        <div className="flex flex-col text-left space-y-4 text-3xl overflow-auto">
       <p>Name :{}</p>  
       <p> Available:{}</p> 
       <p> Timings:{}</p> 
       <p>Contact Details:{}</p>

       
        </div>
        
    </div>
    <div className="bg-orange-500 rounded-lg h-[50px] w-[100px] font-bold text-center  pt-3">Book</div>
    </div>
    </>
  
  )
}

export default BookDriver
