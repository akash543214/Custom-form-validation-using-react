import React, { useState } from 'react'

export default function Input({
    value
})
 {

    let [val,setVal] = useState(value)

  return (
    <div className="w-full md:w-1/3">
      <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="email"
        value={val}
        onChange={(e)=>{
            setVal(e.target.value)
        }}
        onClick={ focus()}
      ></input>
    </div>
  )
}
