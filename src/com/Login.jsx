import React from 'react'

const Login = () => {
  return (
   <>
   <section>
    <p className='text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8'>Login</p>
   </section>
   <form>
    <div className='mb-6'>
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
    <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='shubham@example.com'/>
    </div>
    <div className='mb-6'>
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Passoword</label>
    <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
    </div>
    <button style={{backgroundColor:'red'}}>login</button>
   </form>
   </>
  )
}

export default Login
