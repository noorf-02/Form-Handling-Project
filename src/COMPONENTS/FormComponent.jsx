import React from 'react'

function FormComponent() {
  return (
    <>
    <nav className='bg-indigo-500 text-white flex p-4'>
        <div className="navlist wrapper flex items-center medium justify-between">
            <h1 className='text-[22px] font-medium'>
                Form Handling
            </h1>
            <button className='bg-white w-13 h-7 rounded-2xl px-1'>
                <div className="ball bg-indigo-500 h-6 w-6 rounded-full"></div>
            </button>
        </div>
    </nav>
    
    <div className="wrapper form flex justify-center my-5">
        <form action="" className='flex flex-col gap-4'>

            <div className='flex flex-col gap-2'>
                <label className='text-[18px] font-medium' htmlFor="name">Enter Name</label>
                <input type="text" placeholder='John Doe' className='border-1 w-[340px] px-3 py-2 rounded-3xl border-gray-300 outline-none' id='name' />
            </div>

            <div className='flex flex-col gap-2'>
                <label className='text-[18px] font-medium' htmlFor="email">Enter Email</label>
                <input type="text" placeholder='johndoe@gmail.com' className='border-1 w-[340px] px-3 py-2 rounded-3xl border-gray-300 outline-none' id='email' />
            </div>

            <div className='flex flex-col gap-2'>
                <label className='text-[18px] font-medium' htmlFor="password">Enter Password</label>
                <input type="password" placeholder='wQuix1nkjd22' className='border-1 w-[340px] px-3 py-2 rounded-3xl border-gray-300 outline-none' id='password' />
            </div>

            <button type='submit' className='bg-green-600 text-white font-medium py-1 px-3 rounded-full w-fit hover:bg-green-700 cursor-pointer'>
                Submit
            </button>

        </form>
    </div>

    <div className="users wrapper my-5">
        <h1 className='text-2xl font-bold'>Users</h1>
        <div className="user-cards">
            {}
        </div>
    </div>
    </>
  )
}

export default FormComponent
