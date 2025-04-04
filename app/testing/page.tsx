import React from 'react'
import { getResult } from './action'

async function page() {
    const res = await getResult("ramesh","i am good")
    console.log(res)
  return (
    <div>
      {res}
    </div>
  )
}

export default page
