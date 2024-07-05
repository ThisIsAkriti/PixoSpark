import { Link } from "react-router-dom"


const Notification = () => {
  return (
    <div className='w-full h-screen  flex items-center justify-center text-3xl flex-col space-y-5 '>
        <div className="p-4 rounded-xl text-red-700 shadow-red-200 border border-red-100 shadow-md hover:text-black hover:shadow-gray-400 hover:border-gray-400">
        No new Notification
        </div>
        <Link to='/'>
        <div className=" py-2 px-6 rounded-lg cursor-pointer flex items-center hover:shadow-blue-800 hover:border-blue-600 hover:border hover:shadow-md hover:text-blue-900 active:text-black active:bg-gray-100 active:shadow-none active:border-none ">
          Home
          <img className=" size-8 ml-3" src="/images/tapGesture.gif" alt="tapGesture" />
        </div>
        </Link>
        
      
    </div>
  )
}

export default Notification
