import React from 'react'
import { BeatLoader } from 'react-spinners'
export function Loader() {

  return (
    <div
    style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      height:"50vh"
    }}>
      
      <BeatLoader color='orange' />
      
    </div>
  )
}

