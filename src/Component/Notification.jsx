import { Link } from "react-router-dom"


const Notification = () => {
  return (
    <div className='bg-black w-full h-screen text-white flex items-center justify-center text-3xl flex-col space-y-5 '>
        <div className="bg-red-700 p-4 rounded-xl">
        No new Notification
        </div>
        <Link to='/'>
        <div className="bg-blue-800 py-2 px-6 rounded-lg cursor-pointer flex items-center">
          Home
          <img className=" size-8 ml-3" src="/images/tapGesture.gif" alt="tapGesture" />
        </div>
        </Link>
        
      
    </div>
  )
}

export default Notification
