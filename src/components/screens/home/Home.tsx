import React from 'react'
import { toast } from 'react-toastify'


const Home = () => {
const check = ()=>{
  toast.success("welcome to home page")
}
 check()

  return (
    <>
    <div>Home</div>
    <h1>hello world</h1>
    </>
  )
}

export default Home