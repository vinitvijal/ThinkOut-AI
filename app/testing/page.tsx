import React from 'react'
import { getResult } from './action'

async function page() {
    const res = await getResult("what is sobby","i am good", "", "")
    console.log(res)
  return (
    <div>
      {res.toString()}
    </div>
  )
}

export default page
